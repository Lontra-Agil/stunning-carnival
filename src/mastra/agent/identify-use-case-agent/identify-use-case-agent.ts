import { models } from "@/mastra/models";
import { getPreviousMessagesTool } from "@/mastra/tools/get-previous-messages-tool";
import { getUseCaseDescriptionsTool } from "@/mastra/tools/get-use-cases-description-tool";
import { sendWhatsappMessageTool } from "@/mastra/tools/send-whatsapp-message-tool";
import { Agent } from "@mastra/core/agent";

export const identifyUseCaseAgent = new Agent({
	name: "Identify UseCase Agent",
	instructions: `You will receive a message comming from a user. This user may be contractor or a developer or none of them. We need to identify the use case related to the user's intentions and context. You will provide this use case identification for other agents in the flow. Your goal is to only identify the use case. You can request previous messages from the conversational channel and the list of descriptions of the available use cases. You can also send some acknowledgement message to the user. return the use case id and the reason for choosing that use case. return in JSON format for the following outputParser. <OutputParser>z.object({ useCase: z.enum(["UC1", "NONE"]), message: z.string() })</Example>`,
	model: models.REASONING_MODEL,
	tools: [
		getPreviousMessagesTool,
		getUseCaseDescriptionsTool,
		sendWhatsappMessageTool,
	],
});
