import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LandingPageCTA() {
  const router = useRouter();

  return (
    <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 rounded-2xl p-12 md:p-16 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Pronto para tirar sua ideia do papel?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Agende uma consulta gratuita com nossos especialistas e descubra
            como podemos transformar sua visão em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              onClick={() => router.push("/app/capture/contractor")}
            >
              Sou Contratante
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border hover:bg-accent text-foreground font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-200 bg-transparent"
              onClick={() => router.push("/app/capture/developer")}
            >
              Sou Desenvolvedor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
