import { identifyUseCaseAgent } from "@/mastra/agent/identify-use-case-agent/identify-use-case-agent";
import { parsedEvolutionMessageSchema } from "@/utils/evolution/parse-evolution-message";
import { parseAgentResponse } from "@/utils/parser/parse-agent-response";
import { createStep, createWorkflow } from "@mastra/core/workflows";
import z from "zod";

export const indentifyUCInputSchema = parsedEvolutionMessageSchema;
export const indentifyUCOutputSchema = z.object({
	useCase: z.enum(["UC1", "NONE"]),
	message: z.string(),
});

export const identifyUseCaseWorkflow = createWorkflow({
	id: "identify-use-case-workflow",
	inputSchema: indentifyUCInputSchema,
	outputSchema: indentifyUCOutputSchema,
})
	.then(
		createStep({
			id: "identify-use-case-workflow",
			inputSchema: indentifyUCInputSchema,
			outputSchema: indentifyUCOutputSchema,
			execute: async ({ inputData }) => {
				const response = await identifyUseCaseAgent.generate(
					`We received a message from the user in whatsapp conversation. <userMessage>${JSON.stringify(inputData)}</userMessage>`,
				);

				const parsed = parseAgentResponse(
					response.text,
					indentifyUCOutputSchema,
				);

				if (!parsed) {
					return {
						useCase: "NONE" as const,
						message: "Failed to parse output response",
					};
				}

				return parsed;
			},
		}),
	)
	.commit();
