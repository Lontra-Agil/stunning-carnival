import { Mastra } from "@mastra/core/mastra";
import { weatherAgent } from "./agent/weather-agent";

export const mastra = new Mastra({
	agents: { weatherAgent },
});
