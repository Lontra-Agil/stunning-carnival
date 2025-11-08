import { describe, expect, it } from "vitest";
import z from "zod";
import { parseAgentResponse } from "./parse-agent-response";

describe("parse agent response", () => {
	it("sample 1", () => {
		const foo = parseAgentResponse(
			'```json\n{\n  "useCaseId": "UC1",\n  "reason": "The user explicitly states \'I want an ecommerce with stripe for the next 3 months\', which directly aligns with the description of \'UC1: Receives project from contractor\'. This use case is designed to gather software project descriptions and create a project plan, which is precisely what the user\'s message implies."\n}\n```',
			z.object({ useCaseId: z.enum(["UC1"]), reason: z.string() }),
		);

		expect(foo?.useCaseId).toBe("UC1");
		expect(foo?.reason).toBeDefined();
	});
});
