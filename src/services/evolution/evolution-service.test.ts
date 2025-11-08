import { describe, expect, it } from "vitest";
import { EvolutionService } from "./evolution-service";

const REMOTE_JIT = "120363403732510888@g.us";

describe("Evolution Service", () => {
	it("Should list messages", async () => {
		const evolutionService = new EvolutionService();

		const response = await evolutionService.getPreviousMessages({
			remoteJid: REMOTE_JIT,
		});

		expect(response.currentPage).toBe(1);
		expect(response.pages).toBeDefined();
		expect(response.total).toBeDefined();
	});

	it("sendMessage", async () => {
		const evolutionService = new EvolutionService();

		const response = await evolutionService.sendMessage({
			remoteJid: REMOTE_JIT,
			text: "hello from lontra",
		});

		expect(response.message.conversation).toBe("hello from lontra");
	});
});
