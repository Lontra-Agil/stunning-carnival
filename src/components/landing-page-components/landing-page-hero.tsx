"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FilledButton } from "../filled-button/filled-button"
import { OutlinedButton } from "../outlined-button/outlined-button"

export function LandingPageHero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32 sm:py-40">
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Image src="/lontra-icon.svg" alt="" width={300} height={300} />
      </div>

      <div className="absolute top-40 left-10 opacity-10 pointer-events-none hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 30L15 60L35 90" stroke="#3B0F0F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M85 30L105 60L85 90" stroke="#3B0F0F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M65 20L55 100" stroke="#3B0F0F" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-20 opacity-10 pointer-events-none hidden lg:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" stroke="#4D2626" strokeWidth="3" fill="none" />
          <circle cx="80" cy="80" r="12" stroke="#4D2626" strokeWidth="3" fill="none" />
          <circle cx="80" cy="20" r="12" stroke="#4D2626" strokeWidth="3" fill="none" />
          <line x1="28" y1="25" x2="72" y2="75" stroke="#4D2626" strokeWidth="2" />
          <line x1="28" y1="20" x2="68" y2="20" stroke="#4D2626" strokeWidth="2" />
        </svg>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <h1 style={{ fontWeight: 700 }} className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl text-balance leading-tight">
            Conecte-se com os melhores desenvolvedores
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl text-pretty">
            A plataforma completa para encontrar prestadores de serviços de desenvolvimento de software ou oferecer suas
            habilidades para projetos incríveis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/app/auth/contractor">
              <FilledButton style={{
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
              }} label={"Sou Contratante"} rightIcon={<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />} />

            </Link>
            <Link href="/app/auth/developer">
              <OutlinedButton style={{
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
              }} label={"Sou Desenvolvedor"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
