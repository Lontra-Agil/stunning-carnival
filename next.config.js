/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
	// Enable static generation for blog posts
	output: undefined,

	// Image optimization
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},

	// Experimental features for MDX
	experimental: {
		// Enable server components for MDX
		mdxRs: false,
	},
};

export default config;
