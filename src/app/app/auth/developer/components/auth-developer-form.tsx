"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSignIn, useUser } from "@clerk/nextjs";
import { Github, ArrowLeft } from "lucide-react";
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
        <div className="flex justify-center mb-8">
          <Image
            src="/logo-complete.svg"
            alt="Lontra Ágil"
            width={180}
            height={60}
          />
        </div>

        <div className="text-center mb-8">
          <p className="text-foreground/60">
            Ofereça suas habilidades e encontre projetos incríveis
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleGitHubAuth}
            type="button"
            className="w-full h-14 bg-[#24292e] hover:bg-[#1b1f23] text-white text-base shadow-lg flex items-center justify-center gap-3"
          >
            <Github className="h-5 w-5" />
            Continuar com GitHub
          </Button>

          <p className="text-xs text-center text-foreground/50 px-4">
            Ao continuar, você concorda com nossos Termos de Serviço e Política
            de Privacidade
          </p>
        </div>

        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-foreground/60">
            É contratante?{" "}
            <Link
              href="/app/auth/contractor"
              className="text-primary hover:text-accent font-medium"
            >
              Continuar como contratante
            </Link>
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 mt-8 text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para home
        </Link>
      </div>
    </Card>
  );
}
