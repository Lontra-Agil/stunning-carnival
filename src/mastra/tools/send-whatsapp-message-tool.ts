import {
	EvolutionService,
	sendMessageInputSchema,
} from "@/services/evolution/evolution-service";
import { LoggerService } from "@/services/logger/LoggerService";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const sendWhatsappMessageTool = createTool({
	id: "send-whatsapp-message-tool",
	description:
		"Use this tool to send messages to a conversation in whatsapp. You need to specify the remoteJid which identifies the convesation channel and the message to be sent.",
	inputSchema: sendMessageInputSchema,
	outputSchema: z.object({
		status: z.enum(["success", "failed"]),
	}),
	execute: async ({ context }) => {
		const loggerService = new LoggerService();
		const evolutionService = new EvolutionService({ loggerService });

		try {
			const response = await evolutionService.sendMessage(context);

			loggerService.info(
				"[SEND WHATSAPP MESSAGE TOOL]: sent message with success",
				response,
			);
			return {
				status: "success" as const,
			};
		} catch (error) {
			loggerService.error(
				"[SEND WHATSAPP MESSAGE TOOL]: failed to send message",
				error,
			);
			return {
				status: "failed" as const,
			};
		}
	},
});
