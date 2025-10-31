import { Mastra } from "@mastra/core/mastra";
import { weatherAgent } from "./agent/weather-agent";
import { evolutionWorkflow } from "./workflow/evolution-workflow";

export const mastra = new Mastra({
	agents: { weatherAgent },
	workflows: { evolutionWorkflow },
});
