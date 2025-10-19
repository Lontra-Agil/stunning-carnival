"use client";
import { LoadingScreen } from "@/components/loading-screen/loading-screen";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export function SSOCallback() {
  // Esse componente finaliza o fluxo e cria/ativa a sessão
  return (
    <>
      <LoadingScreen />
      <div id="clerk-captcha" />
      <AuthenticateWithRedirectCallback />
    </>
  );
}
