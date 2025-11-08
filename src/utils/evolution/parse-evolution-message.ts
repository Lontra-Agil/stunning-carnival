import { env } from "@/env";
import { evolutionMessageUpsertBodySchema } from "@/schemas/evolution-message-upsert-body";
import { LoggerService } from "@/services/logger/LoggerService";
import z from "zod";

export const parsedEvolutionMessageSchema = z.object({
	fromMe: z.boolean(),

	id: z.string(),
	author: z.string(),
	message: z.string(),
	remoteJid: z.string(),

	createdAt: z.coerce.date(),
});

export type ParsedEvolutionMessage = z.infer<
	typeof parsedEvolutionMessageSchema
>;

export const parseEvolutionMessage = (
	body: unknown,
	logger: LoggerService = new LoggerService(),
): ParsedEvolutionMessage | null => {
	const parsed = evolutionMessageUpsertBodySchema.safeParse(body);

	if (!parsed.success) {
		logger.warn(
			"[PARSE EVOLUTION WEBHOOK]: failed to parse evolution webhook body",
			parsed.data,
		);
		return null;
	}

	if (parsed.data.apikey !== env.EVOLUTION_WEBHOOK_API_KEY) {
		logger.warn(
			"[PARSE EVOLUTION WEBHOOK]: wrong webhook api key",
			parsed.data,
		);
		return null;
	}

	logger.warn("[PARSE EVOLUTION WEBHOOK]: parse success", parsed.data);
	return {
		id: parsed.data.data.key.id,
		author: parsed.data.data.key.participantAlt ?? parsed.data.sender,
		fromMe: parsed.data.data.key.fromMe,
		message: parsed.data.data.message.conversation,
		remoteJid: parsed.data.data.key.remoteJid,
		createdAt: new Date(parsed.data.data.messageTimestamp),
	};
};
