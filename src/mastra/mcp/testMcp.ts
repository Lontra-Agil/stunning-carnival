import { MCPServer } from "@mastra/mcp";
import { weatherAgent } from "../agent/weather-agent";
import { weatherTool } from "../tools/weather-tool";

export const testMcpServer = new MCPServer({
	id: "test-mcp-server",
	name: "Test Server",
	version: "1.0.0",
	agents: { weatherAgent },
	tools: { weatherTool },
});
