import { evolutionMessageUpsert } from "@/payloads/evolution/message-upsert";
import { evolutionSelfMessageUpsert } from "@/payloads/evolution/self-message-upsert";
import { describe, expect, it } from "vitest";
import { evolutionMessageUpsertBodySchema } from "./evolution-message-upsert-body";

describe("evolution message upsert body schema", () => {
	it("validate self message", () => {
		const message = evolutionMessageUpsertBodySchema.parse(
			evolutionMessageUpsert,
		);

		expect(message.event === "messages.upsert").toBeTruthy();
	});

	it("validate someone else message", () => {
		const message = evolutionMessageUpsertBodySchema.parse(
			evolutionSelfMessageUpsert,
		);

		expect(message.event === "messages.upsert").toBeTruthy();
	});
});
