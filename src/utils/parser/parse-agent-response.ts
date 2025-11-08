import { LoggerService } from "@/services/logger/LoggerService";
import type z from "zod";

/**
 * Parses a string response that might be enclosed in markdown code blocks
 * (like ```json...```) and validates it against a Zod schema.
 * * @param response The raw string response, potentially containing markdown.
 * @param schema The Zod schema to validate the parsed JSON data.
 * @returns The parsed and validated data if successful, otherwise null.
 */
export const parseAgentResponse = <T extends z.ZodSchema>(
	response: string,
	schema: T,
	loggerService: LoggerService = new LoggerService(),
): z.infer<T> | null => {
	// 1. Strip outer formatting and get only inner JSON string
	// This regex matches the optional language identifier (json, ts, etc.)
	const regex = /```(?:json|ts|javascript)?\s*([\s\S]*?)\s*```/;
	const match = response.match(regex);

	// Use optional chaining (`?.`) and nullish coalescing (`??`) to extract
	// the content or fall back to the entire response string.
	const jsonString = match?.[1]?.trim() ?? response.trim();

	let parsedObject: unknown;

	try {
		// Attempt to parse the stripped string into a JavaScript object
		parsedObject = JSON.parse(jsonString);
	} catch (e) {
		// If JSON parsing fails, the response is not valid JSON
		console.error("Agent Response Parser: Failed to parse string as JSON:", e);
		return null;
	}

	// 2. Apply Zod schema and validate parsing with safe parse
	const validationResult = schema.safeParse(parsedObject);

	// 3. If not successful, return null
	if (!validationResult.success) {
		loggerService.error(
			"[IDENTIFY USE CASE WORKFLOW]: Failed to parse response",
			{ input: response, zodErrors: validationResult.error.issues },
		);
		return null;
	}

	// 4. Return parsed data with Zod schema
	// Since validationResult.success is true, TypeScript correctly infers
	// validationResult.data as z.infer<T>
	return validationResult.data;
};
