"use client";

import Image from "next/image";
import Link from "next/link";
import { OutlinedButton } from "../outlined-button/outlined-button";
import { FilledButton } from "../filled-button/filled-button";
import { Globe } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LandingPageUpdateLanguageDialog } from "./landing-page-update-language-dialog";
import { useState } from "react";

export function LandingPageHeader() {
  const [
    showLandingPageUpdateLanguageDialog,
    setShowLandingPageUpdateLanguageDialog,
  ] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-complete.svg"
                alt="Lontra Ágil"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#recursos"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Recursos
              </a>
              <a
                href="#como-funciona"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Como Funciona
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/app/auth/developer">
                <OutlinedButton label="Sou Desenvolvedor" />
              </Link>
              <Link href="/app/auth/contractor">
                <FilledButton label={"Quero Contratar"} />
              </Link>
              {/* 
                TODO: Reativar seleção de língua
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "hidden lg:flex hover:bg-muted/50 transition-all duration-300 hover:scale-110 ",
                )}
                aria-label="Selecionar Línguagem"
                onClick={() => {
                  setShowLandingPageUpdateLanguageDialog(true);
                }}
              >
                <Globe
                  style={{ color: "var(--color-primary" }}
                  className="h-12 w-12"
                />
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      {/* <LandingPageUpdateLanguageDialog
        show={showLandingPageUpdateLanguageDialog}
        showStateSetter={setShowLandingPageUpdateLanguageDialog}
        isFetchingLanguages={false}
        isLoading={false}
        onSubmitUpdateLanguageForm={() => {}}
      /> */}
    </>
  );
}
