import { parsedEvolutionMessageSchema } from "@/utils/evolution/parse-evolution-message";
import { createWorkflow } from "@mastra/core/workflows";
import z from "zod";
import {
	identifyUseCaseWorkflow,
	indentifyUCOutputSchema,
} from "./14-identify-use-case/indetify-use-case-workflow";

export const evolutionInputSchema = parsedEvolutionMessageSchema;
export const evolutionOutputSchema = z.object({ foo: z.string() });

export const fooWf = createWorkflow({
	id: "foo-workflow",
	inputSchema: indentifyUCOutputSchema,
	outputSchema: z.object({ foo: z.string() }),
}).commit();

export const evolutionWorkflow = createWorkflow({
	id: "evolution-workflow",
	inputSchema: evolutionInputSchema,
	outputSchema: evolutionOutputSchema,
})
	.then(identifyUseCaseWorkflow)
	.branch([
		[async ({ inputData: { useCase } }) => useCase === "UC1", fooWf],
		[async ({ inputData: { useCase } }) => useCase === "NONE", fooWf],
	])
	.commit();
