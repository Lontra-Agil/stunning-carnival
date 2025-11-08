import { evolutionWorkflow } from "@/mastra/workflow/evolution-workflow";
import { parseEvolutionMessage } from "@/utils/evolution/parse-evolution-message";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest): Promise<NextResponse> {
	const body = await _req.json();

	const parsedEvolutionMessage = parseEvolutionMessage(body);

	if (parsedEvolutionMessage === null) {
		return NextResponse.json(
			{ message: "Failed to parse evolution message" },
			{ status: 400 },
		);
	}

	const workflow = await evolutionWorkflow.createRunAsync();

	await workflow.start({
		inputData: parsedEvolutionMessage,
	});

	return NextResponse.json({ message: "Messages upserted successfully" });
}
