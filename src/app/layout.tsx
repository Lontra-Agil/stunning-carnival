import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lontra Ágil - Conectando Desenvolvedores e Projetos",
  description:
    "A menor taxa do mercado. Desenvolvedores verificados. Consultoria gratuita. Transforme sua ideia em realidade digital.",
  icons: {
    icon: "/lontra-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <style>{`
            html {
              font-family: ${inter.style.fontFamily};
              --font-sans: ${inter.style.fontFamily};
            }
        `}</style>
      </head>
      <body className="dark">{children}</body>
    </html>
  );
}
