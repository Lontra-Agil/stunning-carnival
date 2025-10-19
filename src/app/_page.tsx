import { CheckSessionAndRedirect } from "@/components/check-session-and-redirect/check-session-and-redirect";
import { LandingPageCTA } from "@/components/landing-page-components/landing-page-cta";
import { LandingPageFeatures } from "@/components/landing-page-components/landing-page-features";
import { LandingPageFooter } from "@/components/landing-page-components/landing-page-footer";
import { LandingPageHeader } from "@/components/landing-page-components/landing-page-header";
import { LandingPageHero } from "@/components/landing-page-components/landing-page-hero";
import { LandingPageHowItWorks } from "@/components/landing-page-components/landing-page-how-it-works";
import { LandingPageStats } from "@/components/landing-page-components/landing-page-stats";
import { LandingPageFAQ } from "@/components/landing-page-components/lannding-page-faq";
import { LoadingScreen } from "@/components/loading-screen/loading-screen";
import MobileFAB from "@/components/mobile-fab/mobile-fab";
import { useDict } from "@/hooks/use-dict";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Globe } from "lucide-react";

export default async function LandingPage() {
	const { dict } = await useDict();

	return (
		<>
			<CheckSessionAndRedirect />
			<SignedIn>
				<LoadingScreen />
			</SignedIn>
			<SignedOut>
				<LandingPageHeader />
				<main className="min-h-screen pt-16">
					<MobileFAB
						icon={
							<Globe
								style={{ color: "var(--color-primary" }}
								className="h-8 w-8"
							/>
						}
						ariaLabel={"Selecionar Línguagem"}
					/>
					<LandingPageHero />
					<LandingPageStats />
					<LandingPageFeatures />
					<LandingPageHowItWorks />
					<LandingPageFAQ />
					<LandingPageCTA />
				</main>
				<LandingPageFooter />
			</SignedOut>
		</>
	);
}
