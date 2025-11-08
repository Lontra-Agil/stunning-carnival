import {
	EvolutionService,
	getPreviousMessagesInputSchema,
	getPreviousMessagesShortenedOutputSchema,
} from "@/services/evolution/evolution-service";
import { createTool } from "@mastra/core/tools";

export const getPreviousMessagesTool = createTool({
	id: "get-previous-messages-tool",
	description:
		"Use this tool to get previous conversation messages. Provide the remoteJid, which identifies the whatsapp conversation channel. You can also personalize the pagination with perPage (the number of messages), and page number. For default use undefined for pagination. The messages always comes sorted with the most recent first.",
	inputSchema: getPreviousMessagesInputSchema,
	outputSchema: getPreviousMessagesShortenedOutputSchema,
	execute: async ({ context }) => {
		const evolutionService = new EvolutionService();

		return await evolutionService.getPreviousMessageShort(context);
	},
});
