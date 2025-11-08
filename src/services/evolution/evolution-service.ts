import { env } from "@/env";
import axios from "axios";
import { LoggerService } from "../logger/LoggerService";
import type { EvolutionMessage } from "./evolution-message";

/*
    SEND MESSAGES
*/

export interface SendMessageInput {
	remoteJid: string;
	text: string;
}

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

export interface GetPreviousMessagesInput {
	remoteJid: string;

	pagination?: {
		perPage?: number;
		page?: number;
	};
}

export interface GetPreviousMessagesOutput {
	messages: {
		total: number;
		pages: number;
		currentPage: number;
		records: Array<EvolutionMessage>;
	};
}

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
			"[EVOLUTION SERVICE]: previous messages requested successfully",
			response.data.messages,
		);

		return response.data.messages;
	}
}
