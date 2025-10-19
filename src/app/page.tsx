import { LandingPageCTA } from "@/components/landing-page-components/landing-page-cta";
import { LandingPageFeatures } from "@/components/landing-page-components/landing-page-features";
import { LandingPageFooter } from "@/components/landing-page-components/landing-page-footer";
import { LandingPageHeader } from "@/components/landing-page-components/landing-page-header";
import { LandingPageHero } from "@/components/landing-page-components/landing-page-hero";
import { LandingPageHowItWorks } from "@/components/landing-page-components/landing-page-how-it-works";
import { LandingPageStats } from "@/components/landing-page-components/landing-page-stats";
import { LandingPageFAQ } from "@/components/landing-page-components/lannding-page-faq";
import MobileFAB from "@/components/mobile-fab/mobile-fab";
import { Globe } from "lucide-react";

export default async function LandingPage() {
	return (
		<>
			<LandingPageHeader />
			<main className="min-h-screen pt-16">
				{/* <MobileFAB
          icon={
            <Globe
              style={{ color: "var(--color-primary" }}
              className="h-8 w-8"
            />
          }
          ariaLabel={"Selecionar Línguagem"}
        /> */}
				<LandingPageHero />
				<LandingPageStats />
				<LandingPageFeatures />
				<LandingPageHowItWorks />
				<LandingPageFAQ />
				<LandingPageCTA />
			</main>
			<LandingPageFooter />
		</>
	);
}
