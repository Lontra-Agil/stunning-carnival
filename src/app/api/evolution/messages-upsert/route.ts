import { type NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest): Promise<NextResponse> {
	const body = await _req.json(); // you can process the request body if needed

	console.log(body);

	return NextResponse.json({ message: "Messages upserted successfully" });
}
