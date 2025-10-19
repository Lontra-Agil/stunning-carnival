import { NextResponse } from "next/server";
import { locales } from "./lib/i18n";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/app/auth(.*)", "/", "/app/sso(.*)"]);

const SUPPORTED = locales;
type Locale = typeof SUPPORTED[number];

function pick(langHeader?: string): Locale {
  if (!langHeader) return "pt-br";
  const lc = langHeader.toLowerCase();
  if (lc.startsWith("pt-br")) return "pt-br";
  return "en";
}

export default clerkMiddleware(async (auth, req) => {
  // const { userId } = await auth();

  // if (!userId && req.nextUrl.pathname.startsWith("/app/dashboard")) {
  //   const defaultFallbackToSignedOutState = new URL("/", req.url);
  //   defaultFallbackToSignedOutState.searchParams.set("redirect_url", req.url);
  //   return NextResponse.redirect(defaultFallbackToSignedOutState);
  // }

  // // Protege rotas privadas
  // if (!isPublicRoute(req)) {
  //   await auth.protect();
  // }

  // const res = NextResponse.next();
  // if (!req.cookies.get("systemLanguage")) {
  //   const fromHeader = pick(req.headers.get("accept-language") || undefined);
  //   res.cookies.set("systemLanguage", fromHeader, {
  //     path: "/",
  //     sameSite: "lax",
  //     maxAge: 60 * 60 * 24 * 365,
  //   });
  // }

  // return res; // IMPORTANTE: retornar a resposta

  const res = NextResponse.next();
  return res;
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};