"use client";
import { LandingPageCTA } from "@/components/landing-page-components/landing-page-cta";
import { LandingPageFeatures } from "@/components/landing-page-components/landing-page-features";
import { LandingPageHero } from "@/components/landing-page-components/landing-page-hero";
import { LandingPageHowItWorks } from "@/components/landing-page-components/landing-page-how-it-works";
import { LandingPageStats } from "@/components/landing-page-components/landing-page-stats";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Image from "next/image";
import { useEffect } from "react";

export default function LandingPage() {
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "system");
		root.classList.add("dark");
	}, []);

	return (
		<div className="relative min-h-screen w-full bg-background">
			<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-5">
				<Image
					src="/lontra-icon.svg"
					alt=""
					width={300}
					height={300}
					className="-top-20 -right-20 absolute rotate-12"
				/>
				<Image
					src="/lontra-icon.svg"
					alt=""
					width={200}
					height={200}
					className="-left-16 -rotate-12 absolute top-1/3"
				/>
				<Image
					src="/lontra-icon.svg"
					alt=""
					width={250}
					height={250}
					className="absolute right-1/4 bottom-20 rotate-45"
				/>
			</div>

			<Header />

			<LandingPageHero />

			<div id="features">
				<LandingPageFeatures />
			</div>

			<div id="how-it-works">
				<LandingPageHowItWorks />
			</div>

			<div id="stats">
				<LandingPageStats />
			</div>

			<LandingPageCTA />

			<Footer />
		</div>
	);
}
