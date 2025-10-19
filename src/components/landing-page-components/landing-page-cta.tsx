"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FilledButton } from "../filled-button/filled-button";
import { OutlinedButton } from "../outlined-button/outlined-button";

export function LandingPageCTA() {
	return (
		<section className="bg-background py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Card className="mx-auto max-w-4xl border-border/50 bg-card shadow-xl">
					<div className="p-12 text-center sm:p-16">
						<h2 className="text-balance font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
							Pronto para começar?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-pretty text-foreground/60 text-lg leading-relaxed">
							Junte-se a milhares de desenvolvedores e empresas que já estão
							transformando ideias em realidade.
						</p>
						<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<Link href="/signup/contratante">
								<FilledButton
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										position: "relative",
										height: 52,
										width: "100%",
										padding: "4px 16px",
										borderWidth: 0,
										cursor: "pointer",
										font: "inherit",
									}}
									label={"Contratar Desenvolvedores"}
									rightIcon={
										<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
									}
								/>
							</Link>
							<Link href="/signup/desenvolvedor">
								<OutlinedButton
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										position: "relative",
										height: 52,
										width: "100%",
										padding: "4px 16px",
										cursor: "pointer",
										font: "inherit",
									}}
									label={"Oferer Serviços"}
								/>
							</Link>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
}
