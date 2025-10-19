import { CheckSessionAndRedirect } from "@/components/check-session-and-redirect/check-session-and-redirect";
import { LoadingScreen } from "@/components/loading-screen/loading-screen";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Apple, ArrowLeft, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AuthConctractorForm } from "./components/auth-contractor-form";

export default function AuthContractorPage() {
	return (
		<>
			<CheckSessionAndRedirect />
			<SignedIn>
				<LoadingScreen />
			</SignedIn>
			<SignedOut>
				<div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
					<div className="pointer-events-none absolute top-20 right-10 hidden opacity-5 lg:block">
						<Image src="/lontra-icon.svg" alt="" width={250} height={250} />
					</div>

					<Card className="w-full max-w-md border-border/50 bg-card shadow-xl">
						<div className="p-8 sm:p-12">
							<div className="mb-8 flex justify-center">
								<Image
									src="/logo-complete.svg"
									alt="Lontra Ágil"
									width={180}
									height={60}
								/>
							</div>

							<AuthConctractorForm />

							<div className="relative my-6">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-border/50 border-t" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-card px-2 text-foreground/50">
										Ou continue com
									</span>
								</div>
							</div>

							<div className="space-y-3">
								<Button
									type="button"
									variant="outline"
									className="flex h-12 w-full items-center justify-center gap-3 border-border/50 bg-transparent text-foreground hover:bg-background/50"
								>
									<Github className="h-5 w-5" />
									GitHub
								</Button>

								<Button
									type="button"
									variant="outline"
									className="flex h-12 w-full items-center justify-center gap-3 border-border/50 bg-transparent text-foreground hover:bg-background/50"
								>
									<svg
										className="h-5 w-5"
										viewBox="0 0 24 24"
										aria-label="Google logo"
										role="img"
									>
										<path
											fill="#4285F4"
											d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										/>
										<path
											fill="#34A853"
											d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										/>
										<path
											fill="#FBBC05"
											d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										/>
										<path
											fill="#EA4335"
											d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										/>
									</svg>
									Google
								</Button>

								<Button
									type="button"
									variant="outline"
									className="flex h-12 w-full items-center justify-center gap-3 border-border/50 bg-transparent text-foreground hover:bg-background/50"
								>
									<Apple className="h-5 w-5" />
									Apple
								</Button>
							</div>

							<p className="mt-6 px-4 text-center text-foreground/50 text-xs">
								Ao continuar, você concorda com nossos Termos de Serviço e
								Política de Privacidade
							</p>

							<div className="mt-6 space-y-4 text-center">
								<p className="text-foreground/60 text-sm">
									É desenvolvedor?{" "}
									<Link
										href="/app/auth/developer"
										className="font-medium text-primary hover:text-accent"
									>
										Continuar como desenvolvedor
									</Link>
								</p>
							</div>

							<Link
								href="/"
								className="mt-8 flex items-center justify-center gap-2 text-foreground/60 text-sm transition-colors hover:text-foreground"
							>
								<ArrowLeft className="h-4 w-4" />
								Voltar para home
							</Link>
						</div>
					</Card>
				</div>
			</SignedOut>
		</>
	);
}
