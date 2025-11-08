import z from "zod";

export const evolutionMessageUpsertBodySchema = z.object({
	event: z.enum(["messages.upsert"]),
	instance: z.enum(["lontra-agil-gustavo"]),
	data: z.object({
		key: z.object({
			id: z.string(),
			fromMe: z.boolean(),
			remoteJid: z.string(),
			participant: z.string(),
			participantAlt: z.string().optional(),
		}),
		pushName: z.string(),
		status: z.enum(["DELIVERY_ACK", "SERVER_ACK"]),
		message: z.object({
			conversation: z.string(),
		}),
		messageType: z.enum(["conversation"]),
		messageTimestamp: z.number(),
		instanceId: z.string(),
	}),
	sender: z.string(),
	apikey: z.string(),
});

export type EvolutionMessageUpsertBody = z.infer<
	typeof evolutionMessageUpsertBodySchema
>;
