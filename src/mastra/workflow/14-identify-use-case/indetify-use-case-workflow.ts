import { createStep, createWorkflow } from "@mastra/core/workflows";
import z from "zod";

export const indentifyUCInputSchema = z.object({ message: z.string() });
export const indentifyUCOutputSchema = z.object({
	useCase: z.enum(["UC1", "UC2"]),
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
			execute: async () => {
				return {
					message: "hello",
					useCase: "UC1" as const,
				};
			},
		}),
	)
	.commit();
