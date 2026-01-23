"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const isLandingPage = pathname === "/";

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToElement = (elementId: string) => {
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
	};

	const handleNavClick = (elementId: string) => {
		if (isLandingPage) {
			scrollToElement(elementId);
		} else {
			window.location.href = `/#${elementId}`;
		}
	};

	const handleMobileNavClick = (elementId: string) => {
		setIsMobileMenuOpen(false);
		if (isLandingPage) {
			setTimeout(() => {
				scrollToElement(elementId);
			}, 100);
		} else {
			window.location.href = `/#${elementId}`;
		}
	};

	return (
		<>
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
						alt="Lontra Agil"
						width={140}
						height={40}
						className="h-10 w-auto"
					/>
				</a>

				<div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 font-medium text-muted-foreground text-sm transition duration-200 hover:text-foreground md:flex md:space-x-2">
					<button
						type="button"
						className="relative cursor-pointer px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
						onClick={() => handleNavClick("features")}
					>
						<span className="relative z-20">Recursos</span>
					</button>
					<button
						type="button"
						className="relative cursor-pointer px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
						onClick={() => handleNavClick("how-it-works")}
					>
						<span className="relative z-20">Como Funciona</span>
					</button>
					<button
						type="button"
						className="relative cursor-pointer px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
						onClick={() => handleNavClick("stats")}
					>
						<span className="relative z-20">Estatisticas</span>
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
						Comecar Agora
					</a>
				</div>
			</header>

			{/* Mobile Header */}
			<header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full border border-border bg-card/80 px-4 py-3 shadow-lg backdrop-blur-sm md:hidden">
				<a className="flex items-center justify-center gap-2" href="/">
					<Image
						src="/logo-complete.svg"
						alt="Lontra Agil"
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
								Estatisticas
							</button>
							<div className="mt-4 flex flex-col space-y-3 border-border border-t pt-4">
								<a
									href="/app/capture"
									className="hover:-translate-y-0.5 rounded-lg bg-primary px-4 py-3 text-center font-bold text-lg text-primary-foreground shadow-lg transition-all duration-200"
								>
									Comecar Agora
								</a>
							</div>
						</nav>
					</div>
				</div>
			)}
		</>
	);
}
