import { CheckSessionAndRedirect } from "@/components/check-session-and-redirect/check-session-and-redirect";
import { LoadingScreen } from "@/components/loading-screen/loading-screen";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { AuthDeveloperForm } from "./components/auth-developer-form";

export default function AuthDeveloperPage() {
	return (
		<>
			<CheckSessionAndRedirect userType="developer" />
			<SignedIn>
				<LoadingScreen />
			</SignedIn>
			<SignedOut>
				<div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
					<div className="pointer-events-none absolute top-20 left-10 hidden opacity-5 lg:block">
						<Image src="/lontra-icon.svg" alt="" width={250} height={250} />
					</div>
					<AuthDeveloperForm />
					<div id="clerk-captcha" />
				</div>
			</SignedOut>
		</>
	);
}
