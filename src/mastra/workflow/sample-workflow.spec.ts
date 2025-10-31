import { createStep, createWorkflow } from "@mastra/core/workflows";
import { describe, expect, it, vi } from "vitest";
import z from "zod";

const sampleInputSchema = z.object({ message: z.string() });
const sampleOutputSchema = z.object({ message: z.string() });

describe("test sample workflow", () => {
	it("hello", async () => {
		// mock function to be called
		const fn = vi.fn();

		const sampleWorkflow = createWorkflow({
			id: "sample-workflow",
			inputSchema: sampleInputSchema,
			outputSchema: sampleOutputSchema,
		})
			.then(
				createStep({
					id: "sample-step",
					inputSchema: sampleInputSchema,
					outputSchema: sampleOutputSchema,
					execute: async ({ inputData }) => {
						fn();
						return {
							message: `hello ${inputData.message}`,
						};
					},
				}),
			)
			.commit();

		const wf = await sampleWorkflow.createRunAsync();

		await wf.start({
			inputData: { message: "hello" },
		});

		expect(fn).toHaveBeenCalled();
	});
});
