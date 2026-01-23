import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { BlogPostMeta } from "@/lib/blog/types";
import { cn } from "@/lib/utils";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
	post: BlogPostMeta;
	className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
	const { slug, frontmatter, readingTime } = post;
	const locale = frontmatter.locale;

	return (
		<Link href={`/blog/${slug}`} className="group">
			<Card
				className={cn(
					"h-full overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-lg",
					className,
				)}
			>
				{frontmatter.image && (
					<div className="relative aspect-video overflow-hidden">
						<Image
							src={frontmatter.image}
							alt={frontmatter.imageAlt ?? frontmatter.title}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				)}
				<CardHeader>
					{frontmatter.category && (
						<Badge variant="secondary" className="mb-2 w-fit">
							{frontmatter.category}
						</Badge>
					)}
					<CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">
						{frontmatter.title}
					</CardTitle>
					<CardDescription className="line-clamp-3">
						{frontmatter.description}
					</CardDescription>
				</CardHeader>
				<CardContent className="flex-grow">
					{frontmatter.tags && frontmatter.tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{frontmatter.tags.slice(0, 3).map((tag) => (
								<Badge key={tag} variant="outline" className="text-xs">
									{tag}
								</Badge>
							))}
						</div>
					)}
				</CardContent>
				<CardFooter className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
					<div className="flex items-center gap-1">
						<Calendar className="h-4 w-4" />
						<time dateTime={frontmatter.date}>
							{new Date(frontmatter.date).toLocaleDateString(
								locale === "pt-br" ? "pt-BR" : "en-US",
								{
									year: "numeric",
									month: "short",
									day: "numeric",
								},
							)}
						</time>
					</div>
					<div className="flex items-center gap-1">
						<Clock className="h-4 w-4" />
						<span>{readingTime}</span>
					</div>
					{frontmatter.author && (
						<div className="flex items-center gap-1">
							<User className="h-4 w-4" />
							<span>{frontmatter.author}</span>
						</div>
					)}
				</CardFooter>
			</Card>
		</Link>
	);
}
