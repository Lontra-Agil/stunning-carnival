import { env } from "@/env";
import {
	type ParsedEvolutionMessage,
	parsedEvolutionMessageSchema,
} from "@/utils/evolution/parse-evolution-message";
import axios from "axios";
import z from "zod";
import { LoggerService } from "../logger/LoggerService";
import type { EvolutionMessage } from "./evolution-message";

const remoteJidSchema = z.string().describe("Whatsapp conversation channel");

/*
    SEND MESSAGES
*/

export const sendMessageInputSchema = z.object({
	remoteJid: remoteJidSchema,
	text: z.string().describe("Message to sent to the conversantion"),
});

export type SendMessageInput = z.infer<typeof sendMessageInputSchema>;

export interface SendMessageOutput {
	key: {
		remoteJid: string;
		fromMe: true;
		id: string;
	};
	pushName: string;
	status: "SENT" | "RECEIVED" | "PENDING";
	message: {
		conversation: string;
	};
	messageType: "conversation";
	messageTimestamp: number;
	instanceId: string;
	source: "web";
}

/*
    GET PREVIOUS MESSAGES
*/

export const getPreviousMessagesInputSchema = z.object({
	remoteJid: remoteJidSchema,

	pagination: z
		.object({
			perPage: z
				.number()
				.optional()
				.describe("Number of messages in the pagination"),
			page: z.number().optional().describe("page number in pagination"),
		})
		.optional()
		.describe("paginate the get messages in conversation channel"),
});

export type GetPreviousMessagesInput = z.infer<
	typeof getPreviousMessagesInputSchema
>;

export interface GetPreviousMessagesOutput {
	messages: {
		total: number;
		pages: number;
		currentPage: number;
		records: Array<EvolutionMessage>;
	};
}

export const getPreviousMessagesShortenedOutputSchema = z.object({
	total: z.number(),
	pages: z.number(),
	currentPage: z.number(),
	records: z.array(parsedEvolutionMessageSchema),
});

export type GetPreviousMessagesShortenedOutput = z.infer<
	typeof getPreviousMessagesShortenedOutputSchema
>;

/*
	CONSTRUCTOR
*/

export interface EvolutionServiceConstructorInput {
	loggerService: LoggerService;
}

export class EvolutionService {
	private client: Axios.AxiosInstance;
	private logger: LoggerService;

	constructor(input?: EvolutionServiceConstructorInput) {
		this.logger = input?.loggerService ?? new LoggerService();

		this.client = axios.create({
			baseURL: env.EVOLUTION_API_URL,
			headers: {
				apiKey: env.EVOLUTION_API_KEY,
			},
		});
	}

	async sendMessage(input: SendMessageInput) {
		this.logger.info("[EVOLUTION SERVICE]: requesting previous messages");
		const response = await this.client.post<SendMessageOutput>(
			`/message/sendText/${env.EVOLUTION_INSTANCE_NAME}`,
			{
				number: input.remoteJid,
				text: input.text,
				// options
				// "delay": 1200,
				// "quoted": {
				//     // payload message or key.id only for get message in database
				//     "key": {
				//         "id": " MESSAGE_ID"
				//     },
				//     "message": {
				//         "conversation": "CONTENT_MESSAGE"
				//     }
				// },
				// "linkPreview": false,
				// "mentionsEveryOne": false,
				// "mentioned": [
				//     "{{remoteJid}}"
				// ]
			},
		);

		this.logger.info(
			"[EVOLUTION SERVICE]: previous messages requested successfully",
			response.data,
		);

		return response.data;
	}

	async getPreviousMessages(input: GetPreviousMessagesInput) {
		this.logger.info("[EVOLUTION SERVICE]: requesting previous messages");
		const response = await this.client.post<GetPreviousMessagesOutput>(
			`/chat/findMessages/${env.EVOLUTION_INSTANCE_NAME}`,
			{
				where: {
					key: {
						remoteJid: "{{remoteJid}}",
					},
				},
				// optional
				page: input?.pagination?.page ?? 1,
				offset: input?.pagination?.perPage ?? 10,
			},
		);

		this.logger.info(
			"[EVOLUTION SERVICE]: previous messages retrieved successfully",
			response.data.messages,
		);

		return response.data.messages;
	}

	async getPreviousMessageShort(
		input: GetPreviousMessagesInput,
	): Promise<GetPreviousMessagesShortenedOutput> {
		this.logger.info("[EVOLUTION SERVICE]: previous messages short requested");

		const messages = await this.getPreviousMessages(input);

		const shortenedMessages: GetPreviousMessagesShortenedOutput = {
			...messages,
			records: messages.records.map<ParsedEvolutionMessage>((item) => ({
				id: item.key.id,
				fromMe: item.key.fromMe,
				remoteJid: item.key.remoteJid,
				author: item.key.participantAlt,
				message: item.message.conversation,
				createdAt: new Date(item.messageTimestamp),
			})),
		};

		this.logger.info(
			"[EVOLUTION SERVICE]: previous messages short requested",
			shortenedMessages,
		);

		return shortenedMessages;
	}
}
