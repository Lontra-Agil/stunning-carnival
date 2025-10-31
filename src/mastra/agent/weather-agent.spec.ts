import { describe, expect, it } from "vitest";
import { weatherAgent } from "./weather-agent";

describe("weather agent", () => {
	it("should answer hi there", async () => {
		const response = await weatherAgent.generate(["hi there"]);

		if (response.error) {
			throw new Error("Expected error not to be thrown");
		}

		console.log("answer:", response.text);
		console.log("totalUsage", response.totalUsage);

		expect(response.text).toBeDefined();
	});
});
