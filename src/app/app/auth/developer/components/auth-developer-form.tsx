"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSignIn, useUser } from "@clerk/nextjs";
import { ArrowLeft, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export function AuthDeveloperForm() {
	const { isLoaded, signIn } = useSignIn();

	async function handleGitHubAuth() {
		if (!isLoaded) return;

		await signIn.authenticateWithRedirect({
			strategy: "oauth_github",
			redirectUrl: "/app/sso", // rota que inicia (pode ser a própria)
			redirectUrlComplete: "/app/dashboard/developer", // para onde ir após sucesso
		});
	}

	return (
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

				<div className="mb-8 text-center">
					<p className="text-foreground/60">
						Ofereça suas habilidades e encontre projetos incríveis
					</p>
				</div>

				<div className="space-y-4">
					<Button
						onClick={handleGitHubAuth}
						type="button"
						className="flex h-14 w-full items-center justify-center gap-3 bg-[#24292e] text-base text-white shadow-lg hover:bg-[#1b1f23]"
					>
						<Github className="h-5 w-5" />
						Continuar com GitHub
					</Button>

					<p className="px-4 text-center text-foreground/50 text-xs">
						Ao continuar, você concorda com nossos Termos de Serviço e Política
						de Privacidade
					</p>
				</div>

				<div className="mt-8 space-y-4 text-center">
					<p className="text-foreground/60 text-sm">
						É contratante?{" "}
						<Link
							href="/app/auth/contractor"
							className="font-medium text-primary hover:text-accent"
						>
							Continuar como contratante
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
	);
}
