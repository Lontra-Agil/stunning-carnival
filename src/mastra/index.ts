import { Mastra } from "@mastra/core/mastra";
import { identifyUseCaseAgent } from "./agent/identify-use-case-agent/identify-use-case-agent";
import { weatherAgent } from "./agent/weather-agent";
import { evolutionWorkflow } from "./workflow/evolution-workflow";

export const mastra = new Mastra({
	agents: { weatherAgent, identifyUseCaseAgent },
	workflows: { evolutionWorkflow },
	bundler: {
		externals: ["axios"],
	},
});
