"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LandingPageCTA() {
	const router = useRouter();

	return (
		<section className="container relative z-10 mx-auto px-4 py-20 md:py-32">
			<div className="mx-auto max-w-4xl">
				<div className="space-y-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-12 text-center md:p-16">
					<h2 className="text-balance font-bold text-4xl text-foreground md:text-5xl">
						Pronto para tirar sua ideia do papel?
					</h2>
					<p className="mx-auto max-w-2xl text-pretty text-muted-foreground text-xl leading-relaxed">
						Agende uma consulta gratuita com nossos especialistas e descubra
						como podemos transformar sua visão em realidade.
					</p>
					<div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
						<Button
							size="lg"
							className="hover:-translate-y-0.5 rounded-lg bg-primary px-8 py-6 font-bold text-lg text-primary-foreground shadow-lg transition-all duration-200 hover:bg-primary/90"
							onClick={() => router.push("/app/capture/contractor")}
						>
							Sou Contratante
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="rounded-lg border-2 border-border bg-transparent px-8 py-6 font-semibold text-foreground text-lg transition-all duration-200 hover:bg-accent"
							onClick={() => router.push("/app/capture/developer")}
						>
							Sou Desenvolvedor
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
