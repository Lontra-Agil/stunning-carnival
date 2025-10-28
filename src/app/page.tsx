"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LandingPageHero } from "@/components/landing-page-components/landing-page-hero";
import { LandingPageStats } from "@/components/landing-page-components/landing-page-stats";
import { LandingPageCTA } from "@/components/landing-page-components/landing-page-cta";
import { LandingPageFeatures } from "@/components/landing-page-components/landing-page-features";
import { LandingPageHowItWorks } from "@/components/landing-page-components/landing-page-how-it-works";

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
    <div className="min-h-screen w-full relative bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-5">
        <Image
          src="/lontra-icon.svg"
          alt=""
          width={300}
          height={300}
          className="absolute -top-20 -right-20 rotate-12"
        />
        <Image
          src="/lontra-icon.svg"
          alt=""
          width={200}
          height={200}
          className="absolute top-1/3 -left-16 -rotate-12"
        />
        <Image
          src="/lontra-icon.svg"
          alt=""
          width={250}
          height={250}
          className="absolute bottom-20 right-1/4 rotate-45"
        />
      </div>

      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-card/80 md:flex backdrop-blur-sm border border-border shadow-lg transition-all duration-300 ${
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

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
          </a>
        </div>

        <div
          style={{ transform: isScrolled ? "translateX(-8px)" : "none" }}
          className="flex items-center gap-4"
        >
          <a
            href="/app/capture"
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-primary text-primary-foreground shadow-lg px-4 py-2 text-sm"
          >
            Começar Agora
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg md:hidden px-4 py-3">
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary border border-border transition-colors hover:bg-accent"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                Recursos
              </button>
              <button
                onClick={() => handleMobileNavClick("how-it-works")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                Como Funciona
              </button>
              <button
                onClick={() => handleMobileNavClick("stats")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
              >
                Estatísticas
              </button>
              <div className="border-t border-border pt-4 mt-4 flex flex-col space-y-3">
                <a
                  href="/app/capture"
                  className="px-4 py-3 text-lg font-bold text-center bg-primary text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
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

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/logo-complete.svg"
                alt="Lontra Ágil"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conectando desenvolvedores talentosos com projetos inovadores.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Recursos
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-foreground transition-colors"
                  >
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#stats"
                    className="hover:text-foreground transition-colors"
                  >
                    Estatísticas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-foreground transition-colors"
                  >
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-foreground transition-colors"
                  >
                    Termos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Lontra Ágil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
