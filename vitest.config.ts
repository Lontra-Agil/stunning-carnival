import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Resolve __dirname em ambientes ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		silent: "passed-only",
	},
	resolve: {
		alias: {
			// Remova a barra final e use apenas "@"
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
