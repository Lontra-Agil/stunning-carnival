import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function LandingPageHero() {
	const router = useRouter();

	return (
		<section className="container relative z-10 mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
			<div className="pointer-events-none absolute top-10 right-10 hidden opacity-10 lg:block">
				<Image
					src="/lontra-icon.svg"
					alt=""
					width={180}
					height={180}
					className="animate-pulse"
				/>
			</div>

			<div className="mx-auto max-w-5xl space-y-8 text-center">
				<div className="inline-block">
					<div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-medium text-foreground text-sm">
						A menor taxa do mercado
					</div>
				</div>

				<h1 className="text-balance font-bold text-5xl text-foreground leading-tight md:text-7xl">
					Transforme sua ideia em{" "}
					<span className="text-primary">realidade digital</span>
				</h1>

				<p className="mx-auto max-w-3xl text-pretty text-muted-foreground text-xl leading-relaxed md:text-2xl">
					Conectamos você com desenvolvedores verificados e especialistas em
					arquitetura de software para tirar seu projeto do papel.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
					<Button
						size="lg"
						className="hover:-translate-y-0.5 rounded-lg bg-primary px-8 py-6 font-bold text-lg text-primary-foreground shadow-lg transition-all duration-200 hover:bg-primary/90"
						onClick={() => router.push("/app/capture/contractor")}
					>
						Sou Contratante
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="rounded-lg border-2 border-border bg-transparent px-8 py-6 font-semibold text-foreground text-lg transition-all duration-200 hover:bg-accent"
						onClick={() => router.push("/app/capture/developer")}
					>
						Sou Desenvolvedor
					</Button>
				</div>

				<div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 pt-12 md:grid-cols-4">
					<div className="space-y-2">
						<div className="font-bold text-3xl text-primary md:text-4xl">
							15%
						</div>
						<div className="text-muted-foreground text-sm">
							Menor taxa do mercado
						</div>
					</div>
					<div className="space-y-2">
						<div className="font-bold text-3xl text-primary md:text-4xl">
							100%
						</div>
						<div className="text-muted-foreground text-sm">
							Portfólios verificados
						</div>
					</div>
					<div className="space-y-2">
						<div className="font-bold text-3xl text-primary md:text-4xl">
							24/7
						</div>
						<div className="text-muted-foreground text-sm">
							Relatórios detalhados
						</div>
					</div>
					<div className="space-y-2">
						<div className="font-bold text-3xl text-primary md:text-4xl">
							Grátis
						</div>
						<div className="text-muted-foreground text-sm">
							Consultas com especialistas
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
