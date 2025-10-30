"use client";
import { LandingPageCTA } from "@/components/landing-page-components/landing-page-cta";
import { LandingPageFeatures } from "@/components/landing-page-components/landing-page-features";
import { LandingPageHero } from "@/components/landing-page-components/landing-page-hero";
import { LandingPageHowItWorks } from "@/components/landing-page-components/landing-page-how-it-works";
import { LandingPageStats } from "@/components/landing-page-components/landing-page-stats";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LandingPage() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("light", "system");
		root.classList.add("dark");
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleMobileNavClick = (elementId: string) => {
		setIsMobileMenuOpen(false);
		setTimeout(() => {
			const element = document.getElementById(elementId);
			if (element) {
				const headerOffset = 120;
				const elementPosition =
					element.getBoundingClientRect().top + window.pageYOffset;
				const offsetPosition = elementPosition - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		}, 100);
	};

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

			{/* Desktop Header */}
			<header
				className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full border border-border bg-card/80 shadow-lg backdrop-blur-sm transition-all duration-300 md:flex ${
					isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
				} py-2`}
			>
				<a
					className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
						isScrolled ? "ml-4" : ""
					}`}
					href="/"
				>
					<Image
						src="/logo-complete.svg"
						alt="Lontra Ágil"
						width={140}
						height={40}
						className="h-10 w-auto"
					/>
				</a>

				<div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 font-medium text-muted-foreground text-sm transition duration-200 hover:text-foreground md:flex md:space-x-2">
					<button
						type="button"
						className="relative cursor-pointer px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
						onClick={(e) => {
							e.preventDefault();
							const element = document.getElementById("features");
							if (element) {
								const headerOffset = 120;
								const elementPosition =
									element.getBoundingClientRect().top + window.pageYOffset;
								const offsetPosition = elementPosition - headerOffset;

								window.scrollTo({
									top: offsetPosition,
									behavior: "smooth",
								});
							}
						}}
					>
						<span className="relative z-20">Recursos</span>
					</button>
					<button
						type="button"
						className="relative cursor-pointer px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
						onClick={(e) => {
							e.preventDefault();
							const element = document.getElementById("how-it-works");
							if (element) {
								const headerOffset = 120;
								const elementPosition =
									element.getBoundingClientRect().top + window.pageYOffset;
								const offsetPosition = elementPosition - headerOffset;

								window.scrollTo({
									top: offsetPosition,
									behavior: "smooth",
								});
							}
						}}
					>
						<span className="relative z-20">Como Funciona</span>
					</button>
					<button
						type="button"
						className="relative cursor-pointer px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
						onClick={(e) => {
							e.preventDefault();
							const element = document.getElementById("stats");
							if (element) {
								const headerOffset = 120;
								const elementPosition =
									element.getBoundingClientRect().top + window.pageYOffset;
								const offsetPosition = elementPosition - headerOffset;

								window.scrollTo({
									top: offsetPosition,
									behavior: "smooth",
								});
							}
						}}
					>
						<span className="relative z-20">Estatísticas</span>
					</button>
				</div>

				<div
					style={{ transform: isScrolled ? "translateX(-8px)" : "none" }}
					className="flex items-center gap-4"
				>
					<a
						href="/app/capture"
						className="hover:-translate-y-0.5 relative inline-block cursor-pointer rounded-md bg-primary px-4 py-2 text-center font-bold text-primary-foreground text-sm shadow-lg transition duration-200"
					>
						Começar Agora
					</a>
				</div>
			</header>

			{/* Mobile Header */}
			<header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full border border-border bg-card/80 px-4 py-3 shadow-lg backdrop-blur-sm md:hidden">
				<a className="flex items-center justify-center gap-2" href="/">
					<Image
						src="/logo-complete.svg"
						alt="Lontra Ágil"
						width={120}
						height={32}
						className="h-8 w-auto"
					/>
				</a>

				<button
					type="button"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-accent"
					aria-label="Toggle menu"
				>
					<div className="flex h-5 w-5 flex-col items-center justify-center space-y-1">
						<span
							className={`block h-0.5 w-4 bg-foreground transition-all duration-300 ${
								isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
							}`}
						/>
						<span
							className={`block h-0.5 w-4 bg-foreground transition-all duration-300 ${
								isMobileMenuOpen ? "opacity-0" : ""
							}`}
						/>
						<span
							className={`block h-0.5 w-4 bg-foreground transition-all duration-300 ${
								isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
							}`}
						/>
					</div>
				</button>
			</header>

			{/* Mobile Menu Overlay */}
			{isMobileMenuOpen && (
				<div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
					<div className="absolute top-20 right-4 left-4 rounded-2xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-md">
						<nav className="flex flex-col space-y-4">
							<button
								type="button"
								onClick={() => handleMobileNavClick("features")}
								className="rounded-lg px-4 py-3 text-left font-medium text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
							>
								Recursos
							</button>
							<button
								type="button"
								onClick={() => handleMobileNavClick("how-it-works")}
								className="rounded-lg px-4 py-3 text-left font-medium text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
							>
								Como Funciona
							</button>
							<button
								type="button"
								onClick={() => handleMobileNavClick("stats")}
								className="rounded-lg px-4 py-3 text-left font-medium text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
							>
								Estatísticas
							</button>
							<div className="mt-4 flex flex-col space-y-3 border-border border-t pt-4">
								<a
									href="/app/capture"
									className="hover:-translate-y-0.5 rounded-lg bg-primary px-4 py-3 text-center font-bold text-lg text-primary-foreground shadow-lg transition-all duration-200"
								>
									Começar Agora
								</a>
							</div>
						</nav>
					</div>
				</div>
			)}

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

			<footer className="border-border border-t bg-card">
				<div className="container mx-auto px-4 py-12">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
						<div className="space-y-4">
							<Image
								src="/logo-complete.svg"
								alt="Lontra Ágil"
								width={140}
								height={40}
								className="h-10 w-auto"
							/>
							<p className="text-muted-foreground text-sm leading-relaxed">
								Conectando desenvolvedores talentosos com projetos inovadores.
							</p>
						</div>

						<div>
							<h3 className="mb-4 font-semibold text-foreground">Produto</h3>
							<ul className="space-y-2 text-muted-foreground text-sm">
								<li>
									<a
										href="#features"
										className="transition-colors hover:text-foreground"
									>
										Recursos
									</a>
								</li>
								<li>
									<a
										href="#how-it-works"
										className="transition-colors hover:text-foreground"
									>
										Como Funciona
									</a>
								</li>
								<li>
									<a
										href="#stats"
										className="transition-colors hover:text-foreground"
									>
										Estatísticas
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="mb-4 font-semibold text-foreground">Empresa</h3>
							<ul className="space-y-2 text-muted-foreground text-sm">
								<li>
									<a
										href="/about"
										className="transition-colors hover:text-foreground"
									>
										Sobre
									</a>
								</li>
								<li>
									<a
										href="/contact"
										className="transition-colors hover:text-foreground"
									>
										Contato
									</a>
								</li>
								<li>
									<a
										href="/careers"
										className="transition-colors hover:text-foreground"
									>
										Carreiras
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="mb-4 font-semibold text-foreground">Legal</h3>
							<ul className="space-y-2 text-muted-foreground text-sm">
								<li>
									<a
										href="/privacy"
										className="transition-colors hover:text-foreground"
									>
										Privacidade
									</a>
								</li>
								<li>
									<a
										href="/terms"
										className="transition-colors hover:text-foreground"
									>
										Termos
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-8 border-border border-t pt-8 text-center text-muted-foreground text-sm">
						<p>&copy; 2025 Lontra Ágil. Todos os direitos reservados.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
