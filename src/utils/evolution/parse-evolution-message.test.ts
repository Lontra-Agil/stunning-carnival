import { evolutionMessageUpsert } from "@/payloads/evolution/message-upsert";
import { evolutionSelfMessageUpsert } from "@/payloads/evolution/self-message-upsert";
import { describe, expect, it } from "vitest";
import { parseEvolutionMessage } from "./parse-evolution-message";

describe("parse evolution message", () => {
	it("Should parse someone else message", () => {
		const parsedMessage = parseEvolutionMessage(evolutionMessageUpsert);

		expect(parsedMessage?.fromMe).toBe(false);
	});

	it("Should parse self message", () => {
		const parsedMessage = parseEvolutionMessage(evolutionSelfMessageUpsert);

		expect(parsedMessage?.fromMe).toBe(true);
	});
});
