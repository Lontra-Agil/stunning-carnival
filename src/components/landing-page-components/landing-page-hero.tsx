"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FilledButton } from "../filled-button/filled-button";
import { OutlinedButton } from "../outlined-button/outlined-button";

export function LandingPageHero() {
	return (
		<section className="relative overflow-hidden bg-background px-6 py-32 sm:py-40">
			<div className="pointer-events-none absolute top-20 right-10 hidden opacity-5 lg:block">
				<Image src="/lontra-icon.svg" alt="" width={300} height={300} />
			</div>

			<div className="pointer-events-none absolute top-40 left-10 hidden opacity-10 lg:block">
				<svg
					width="120"
					height="120"
					viewBox="0 0 120 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M35 30L15 60L35 90"
						stroke="#3B0F0F"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M85 30L105 60L85 90"
						stroke="#3B0F0F"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M65 20L55 100"
						stroke="#3B0F0F"
						strokeWidth="4"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			<div className="pointer-events-none absolute right-20 bottom-20 hidden opacity-10 lg:block">
				<svg
					width="100"
					height="100"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<circle
						cx="20"
						cy="20"
						r="12"
						stroke="#4D2626"
						strokeWidth="3"
						fill="none"
					/>
					<circle
						cx="80"
						cy="80"
						r="12"
						stroke="#4D2626"
						strokeWidth="3"
						fill="none"
					/>
					<circle
						cx="80"
						cy="20"
						r="12"
						stroke="#4D2626"
						strokeWidth="3"
						fill="none"
					/>
					<line
						x1="28"
						y1="25"
						x2="72"
						y2="75"
						stroke="#4D2626"
						strokeWidth="2"
					/>
					<line
						x1="28"
						y1="20"
						x2="68"
						y2="20"
						stroke="#4D2626"
						strokeWidth="2"
					/>
				</svg>
			</div>

			<div className="mx-auto max-w-5xl">
				<div className="space-y-8 text-center">
					<h1
						style={{ fontWeight: 700 }}
						className="text-balance font-bold text-5xl text-foreground leading-tight tracking-tight sm:text-7xl"
					>
						Conecte-se com os melhores desenvolvedores
					</h1>

					<p className="mx-auto max-w-2xl text-pretty text-foreground/70 text-lg leading-relaxed sm:text-xl">
						A plataforma completa para encontrar prestadores de serviços de
						desenvolvimento de software ou oferecer suas habilidades para
						projetos incríveis.
					</p>

					<div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
						<Link href="/app/auth/contractor">
							<FilledButton
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
									height: 52,
									width: "100%",
									margin: "24px 0 0 !important",
									padding: "4px 16px",
									borderWidth: 0,
									cursor: "pointer",
									font: "inherit",
								}}
								label={"Sou Contratante"}
								rightIcon={
									<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
								}
							/>
						</Link>
						<Link href="/app/auth/developer">
							<OutlinedButton
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
									height: 52,
									width: "100%",
									margin: "24px 0 0 !important",
									padding: "4px 16px",
									cursor: "pointer",
									font: "inherit",
								}}
								label={"Sou Desenvolvedor"}
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
