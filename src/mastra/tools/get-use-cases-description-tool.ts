import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const getUseCaseDescriptionsTool = createTool({
	id: "get-use-case-descriptions",
	description: "Get use case descriptions.",
	inputSchema: undefined,
	outputSchema: z.array(
		z.object({
			id: z.enum(["UC1", "NONE"]).describe("Use case identifier"),
			userType: z.enum(["contractor", "developer", "unknown"]),
			name: z.string().describe("Use case name"),
			description: z.string().describe("Use case description"),
		}),
	),
	execute: async () => {
		return [
			{
				id: "UC1" as const,
				userType: "contractor" as const,
				name: "Receives project from contractor",
				description:
					"This use case happens when the user is a contractor. In this use case we will talk to the contractor and get a software project description. The goal of this use case is to come up with a complete softwre project plan with functionalities, costs, pain points, benefits, expected implementation time.",
			},
			{
				id: "NONE" as const,
				userType: "unknown" as const,
				name: "None",
				description: "No other use case matches the description",
			},
		];
	},
});
