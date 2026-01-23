import { BlogCard } from "@/components/blog";
import { LandingPageCTA } from "@/components/landing-page-components/landing-page-cta";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getAllPosts } from "@/lib/blog/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog | Lontra Agil",
	description:
		"Artigos sobre desenvolvimento de software, contratacao de desenvolvedores, freelancing e tecnologia.",
	openGraph: {
		title: "Blog | Lontra Agil",
		description:
			"Artigos sobre desenvolvimento de software, contratacao de desenvolvedores, freelancing e tecnologia.",
		type: "website",
		locale: "pt_BR",
		alternateLocale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog | Lontra Agil",
		description:
			"Artigos sobre desenvolvimento de software, contratacao de desenvolvedores, freelancing e tecnologia.",
	},
};

export default function BlogPage() {
	const ptBrPosts = getAllPosts("pt-br");
	const enPosts = getAllPosts("en");
	const allPosts = [...ptBrPosts, ...enPosts].sort((a, b) => {
		return (
			new Date(b.frontmatter.date).getTime() -
			new Date(a.frontmatter.date).getTime()
		);
	});

	return (
		<div className="relative min-h-screen w-full bg-background">
			<Header />

			<main className="container mx-auto px-4 py-16">
				<div className="mx-auto max-w-6xl">
					<header className="mb-12 text-center">
						<h1 className="mb-4 font-bold text-4xl tracking-tight md:text-5xl">
							Blog
						</h1>
						<p className="mx-auto max-w-2xl text-muted-foreground text-xl">
							Dicas e insights sobre desenvolvimento de software, contratacao de
							desenvolvedores e o mercado de tecnologia.
						</p>
					</header>

					{allPosts.length === 0 ? (
						<div className="py-12 text-center">
							<p className="text-muted-foreground">
								Nenhum artigo publicado ainda. Volte em breve!
							</p>
						</div>
					) : (
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{allPosts.map((post) => (
								<BlogCard
									key={`${post.frontmatter.locale}-${post.slug}`}
									post={post}
								/>
							))}
						</div>
					)}
				</div>
			</main>

			<LandingPageCTA />

			<Footer />
		</div>
	);
}
