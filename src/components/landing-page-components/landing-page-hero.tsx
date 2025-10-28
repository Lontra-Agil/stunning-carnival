import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function LandingPageHero() {
  const router = useRouter();

  return (
    <section className="relative z-10 container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block">
        <Image
          src="/lontra-icon.svg"
          alt=""
          width={180}
          height={180}
          className="animate-pulse"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block">
          <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-foreground">
            A menor taxa do mercado
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
          Transforme sua ideia em{" "}
          <span className="text-primary">realidade digital</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          Conectamos você com desenvolvedores verificados e especialistas em
          arquitetura de software para tirar seu projeto do papel.
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

        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              15%
            </div>
            <div className="text-sm text-muted-foreground">
              Menor taxa do mercado
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              100%
            </div>
            <div className="text-sm text-muted-foreground">
              Portfólios verificados
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              Relatórios detalhados
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              Grátis
            </div>
            <div className="text-sm text-muted-foreground">
              Consultas com especialistas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
