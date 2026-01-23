import { cn } from "@/lib/utils";
import { CheckSquare, Square } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		input: ({ type, checked, className, ...props }) => {
			if (type === "checkbox") {
				return checked ? (
					<CheckSquare className="mr-2 inline-block h-5 w-5 align-text-bottom text-primary" />
				) : (
					<Square className="mr-2 inline-block h-5 w-5 align-text-bottom text-muted-foreground" />
				);
			}
			return (
				<input type={type} checked={checked} className={className} {...props} />
			);
		},
		h1: ({ className, ...props }) => (
			<h1
				className={cn(
					"mt-10 scroll-m-20 font-bold text-3xl tracking-tight first:mt-0",
					className,
				)}
				{...props}
			/>
		),
		h2: ({ className, ...props }) => (
			<h2
				className={cn(
					"mt-10 scroll-m-20 border-b pb-2 font-semibold text-2xl tracking-tight first:mt-0",
					className,
				)}
				{...props}
			/>
		),
		h3: ({ className, ...props }) => (
			<h3
				className={cn(
					"mt-8 scroll-m-20 font-semibold text-xl tracking-tight",
					className,
				)}
				{...props}
			/>
		),
		h4: ({ className, ...props }) => (
			<h4
				className={cn(
					"mt-8 scroll-m-20 font-semibold text-lg tracking-tight",
					className,
				)}
				{...props}
			/>
		),
		p: ({ className, ...props }) => (
			<p
				className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
				{...props}
			/>
		),
		ul: ({ className, children, ...props }) => {
			// Check if this is a task list (contains checkbox inputs)
			const isTaskList = className?.includes("contains-task-list");
			return (
				<ul
					className={cn(
						"my-6",
						isTaskList ? "ml-0 list-none" : "ml-6 list-disc",
						className,
					)}
					{...props}
				>
					{children}
				</ul>
			);
		},
		ol: ({ className, ...props }) => (
			<ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
		),
		li: ({ className, children, ...props }) => {
			// Check if this is a task list item
			const isTaskListItem = className?.includes("task-list-item");
			return (
				<li
					className={cn(
						"mt-2",
						isTaskListItem && "flex list-none items-start",
						className,
					)}
					{...props}
				>
					{children}
				</li>
			);
		},
		blockquote: ({ className, ...props }) => (
			<blockquote
				className={cn(
					"mt-6 border-primary border-l-4 pl-6 text-muted-foreground italic",
					className,
				)}
				{...props}
			/>
		),
		img: ({ className, alt, src, ...props }) => {
			if (!src) return null;
			return (
				<Image
					className={cn("my-6 rounded-lg", className)}
					alt={alt ?? ""}
					src={src}
					width={800}
					height={450}
					{...props}
				/>
			);
		},
		hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,
		table: ({ className, ...props }) => (
			<div className="my-6 w-full overflow-y-auto">
				<table className={cn("w-full", className)} {...props} />
			</div>
		),
		tr: ({ className, ...props }) => (
			<tr
				className={cn("m-0 border-t p-0 even:bg-muted/50", className)}
				{...props}
			/>
		),
		th: ({ className, ...props }) => (
			<th
				className={cn(
					"border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
					className,
				)}
				{...props}
			/>
		),
		td: ({ className, ...props }) => (
			<td
				className={cn(
					"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
					className,
				)}
				{...props}
			/>
		),
		pre: ({ className, ...props }) => (
			<pre
				className={cn(
					"mt-6 mb-4 overflow-x-auto rounded-lg border bg-muted p-4",
					className,
				)}
				{...props}
			/>
		),
		code: ({ className, ...props }) => (
			<code
				className={cn(
					"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
					className,
				)}
				{...props}
			/>
		),
		a: ({ className, href, ...props }) => {
			if (href?.startsWith("/")) {
				return (
					<Link
						href={href}
						className={cn(
							"font-medium text-primary underline underline-offset-4 hover:text-primary/80",
							className,
						)}
						{...props}
					/>
				);
			}
			return (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						"font-medium text-primary underline underline-offset-4 hover:text-primary/80",
						className,
					)}
					{...props}
				/>
			);
		},
		...components,
	};
}

export const mdxComponents = useMDXComponents({});
