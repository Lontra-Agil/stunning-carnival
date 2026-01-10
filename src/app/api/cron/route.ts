import axios from "axios";

export async function GET() {
	const now = new Date();
	const minute = now.getMinutes();

	if (minute % 5 === 0) {
		await axios.get("https://evolution-api-w1xj.onrender.com");
	}

	return new Response("Hello from Vercel!");
}
