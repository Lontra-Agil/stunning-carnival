import { models } from "@/mastra/models";
import { Agent } from "@mastra/core/agent";

export const identifyUseCaseAgent = new Agent({
	name: "Identify UseCase Agent",
	instructions: `
          
    `,
	model: models.REASONING_MODEL,
});
