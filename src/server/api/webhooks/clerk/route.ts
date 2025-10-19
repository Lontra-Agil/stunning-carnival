export const runtime = "nodejs"; // importante: não usar edge
import { clerkClient } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";

type ClerkEvent = {
	id: string;
	object: "event";
	type: string;
	data: {
		id: string;
		[key: string]: unknown;
	};
};

export async function POST(req: Request) {
	const body = await req.text(); // RAW body
	const h = await headers();
	const svixId = h.get("svix-id");
	const svixTimestamp = h.get("svix-timestamp");
	const svixSignature = h.get("svix-signature");

	if (!svixId || !svixTimestamp || !svixSignature)
		return new Response("Missing Svix headers", { status: 400 });

	const secret = process.env.CLERK_WEBHOOK_SECRET;
	if (!secret) return new Response("Missing secret", { status: 500 });

	let evt: ClerkEvent;
	try {
		const wh = new Webhook(secret);
		evt = wh.verify(body, {
			"svix-id": svixId,
			"svix-timestamp": svixTimestamp,
			"svix-signature": svixSignature,
		}) as ClerkEvent;
	} catch {
		return new Response("Invalid signature", { status: 400 });
	}

	try {
		switch (evt.type) {
			case "user.created": {
				const userId = evt.data.id as string;

				clerkClient().then(async (client) => {
					client.users.updateUser(userId, {
						publicMetadata: { user_type: "" },
						privateMetadata: { flags: { firstLogin: true } },
					});
				});

				break;
			}
			// trate outros eventos conforme necessário
		}
		return new Response("ok", { status: 200 });
	} catch (e) {
		console.error("Webhook error:", e);
		return new Response("handler error", { status: 500 });
	}
}
