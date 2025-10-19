"use client";

import type React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";
import {
	Bell,
	ChevronLeft,
	ChevronRight,
	CreditCard,
	FolderGit2,
	History,
	LayoutDashboard,
	LogOut,
	Menu,
	MessageSquare,
	Search,
	Settings,
	User,
	UserPlus,
	X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface DashboardLayoutContratanteProps {
	children: React.ReactNode;
}

export function DashboardContractorLayout({
	children,
}: DashboardLayoutContratanteProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
	const [notificationsOpen, setNotificationsOpen] = useState(false);
	const [profileOpen, setProfileOpen] = useState(false);

	const notificationsRef = useRef<HTMLDivElement>(null);
	const profileRef = useRef<HTMLDivElement>(null);

	const { signOut } = useClerk();

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				notificationsRef.current &&
				!notificationsRef.current.contains(event.target as Node)
			) {
				setNotificationsOpen(false);
			}
			if (
				profileRef.current &&
				!profileRef.current.contains(event.target as Node)
			) {
				setProfileOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const navigation = [
		{
			name: "Dashboard",
			href: "/dashboard/contratante",
			icon: LayoutDashboard,
		},
		{
			name: "Meus Projetos",
			href: "/dashboard/contratante/projetos",
			icon: FolderGit2,
		},
		{
			name: "Buscar Desenvolvedores",
			href: "/dashboard/contratante/buscar",
			icon: Search,
		},
		{
			name: "Mensagens",
			href: "/dashboard/contratante/mensagens",
			icon: MessageSquare,
		},
		{
			name: "Pagamentos",
			href: "/dashboard/contratante/pagamentos",
			icon: CreditCard,
		},
		{
			name: "Histórico",
			href: "/dashboard/contratante/historico",
			icon: History,
		},
		{
			name: "Configurações",
			href: "/dashboard/contratante/configuracoes",
			icon: Settings,
		},
	];

	const notifications = [
		{
			id: 1,
			title: "Desenvolvedor aplicou ao projeto",
			message: "Carlos Santos se candidatou para 'Sistema E-commerce'",
			time: "10 min atrás",
			unread: true,
		},
		{
			id: 2,
			title: "Projeto atualizado",
			message: "Maria Silva enviou atualização do projeto 'App Mobile'",
			time: "1 hora atrás",
			unread: true,
		},
		{
			id: 3,
			title: "Pagamento processado",
			message: "Pagamento de R$ 3.500 foi confirmado",
			time: "3 horas atrás",
			unread: false,
		},
		{
			id: 4,
			title: "Projeto concluído",
			message: "Dashboard Analytics foi entregue para revisão",
			time: "1 dia atrás",
			unread: false,
		},
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Mobile sidebar backdrop */}
			{sidebarOpen && (
				<div
					className="fixed inset-0 z-40 bg-almost-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
					onClick={() => setSidebarOpen(false)}
					onKeyDown={(e) => {
						if (e.key === "Escape") {
							setSidebarOpen(false);
						}
					}}
					role="button"
					tabIndex={0}
					aria-label="Close sidebar"
				/>
			)}

			{/* Sidebar */}
			<aside
				className={cn(
					"fixed top-0 left-0 z-50 h-screen border-border/50 border-r bg-card shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:translate-x-0",
					sidebarOpen ? "translate-x-0" : "-translate-x-full",
					sidebarCollapsed ? "lg:w-20" : "lg:w-72",
					!sidebarCollapsed && "w-72",
				)}
			>
				<div className="flex h-full flex-col">
					{/* Logo */}
					<div className="flex items-center justify-between border-border/50 border-b p-6">
						<Link
							href="/"
							className={cn(
								"flex items-center gap-3 transition-all duration-500",
								sidebarCollapsed && "lg:w-0 lg:overflow-hidden lg:opacity-0",
							)}
						>
							<Image
								src="/logo-complete.svg"
								alt="Lontra Ágil"
								width={140}
								height={40}
								className="transition-all"
							/>
						</Link>
						<Button
							variant="ghost"
							size="icon"
							className="transition-colors hover:bg-muted/50 lg:hidden"
							onClick={() => setSidebarOpen(false)}
						>
							<X className="h-5 w-5" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className={cn(
								"hidden transition-all duration-300 hover:scale-110 hover:bg-muted/50 lg:flex",
								sidebarCollapsed && "lg:mx-auto",
							)}
							onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
						>
							{sidebarCollapsed ? (
								<ChevronRight className="h-5 w-5 transition-transform" />
							) : (
								<ChevronLeft className="h-5 w-5 transition-transform" />
							)}
						</Button>
					</div>

					{/* Navigation */}
					<nav className="flex-1 space-y-1 overflow-y-auto p-4">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									"group relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-foreground/70 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-foreground",
									sidebarCollapsed && "lg:justify-center lg:px-2",
								)}
							>
								<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								<item.icon className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
								<span
									className={cn(
										"relative z-10 font-medium transition-all duration-500",
										sidebarCollapsed &&
											"lg:w-0 lg:overflow-hidden lg:opacity-0",
									)}
								>
									{item.name}
								</span>
								{sidebarCollapsed && (
									<div className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-lg bg-foreground px-3 py-2 font-medium text-background text-sm opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 lg:block">
										{item.name}
									</div>
								)}
							</Link>
						))}
					</nav>

					{/* User Profile */}
					<div className="border-border/50 border-t p-4">
						<div
							className={cn(
								"group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl p-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30",
								sidebarCollapsed && "lg:justify-center lg:px-2",
							)}
						>
							<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							<Avatar className="relative z-10 h-10 w-10 ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/40">
								<AvatarImage src="/placeholder.svg?height=40&width=40" />
								<AvatarFallback className="bg-primary text-primary-foreground">
									RC
								</AvatarFallback>
							</Avatar>
							<div
								className={cn(
									"relative z-10 min-w-0 flex-1 transition-all duration-500",
									sidebarCollapsed && "lg:w-0 lg:overflow-hidden lg:opacity-0",
								)}
							>
								<p className="truncate font-semibold text-foreground text-sm">
									Roberto Costa
								</p>
								<p className="truncate text-muted-foreground text-xs">
									roberto@empresa.com
								</p>
							</div>
							<LogOut
								className={cn(
									"relative z-10 h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100",
									sidebarCollapsed && "lg:hidden",
								)}
							/>
						</div>
					</div>
				</div>
			</aside>

			{/* Main Content */}
			<div
				className={cn(
					"transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
					sidebarCollapsed ? "lg:pl-20" : "lg:pl-72",
				)}
			>
				{/* Top Header */}
				<header className="sticky top-0 z-30 border-border/50 border-b bg-card/95 shadow-sm backdrop-blur-xl">
					<div className="flex items-center justify-between px-4 py-4 lg:px-8">
						<div className="flex items-center gap-4">
							<Button
								variant="ghost"
								size="icon"
								className="transition-all hover:scale-110 hover:bg-muted/50 lg:hidden"
								onClick={() => setSidebarOpen(true)}
							>
								<Menu className="h-5 w-5" />
							</Button>

							{/* Search Bar */}
							<div className="hidden w-80 items-center gap-2 rounded-xl bg-muted/50 px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/20 hover:bg-muted/70 md:flex">
								<Search className="h-4 w-4 text-muted-foreground" />
								<input
									type="text"
									placeholder="Buscar desenvolvedores, projetos..."
									className="w-full border-none bg-transparent text-foreground text-sm outline-none placeholder:text-muted-foreground"
								/>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<Button
								className="hidden items-center gap-2 bg-gradient-to-r from-primary to-accent transition-all duration-300 hover:scale-105 hover:shadow-lg sm:flex"
								asChild
							>
								<Link href="/dashboard/contratante/buscar">
									<UserPlus className="h-4 w-4" />
									Contratar Desenvolvedor
								</Link>
							</Button>

							<div className="relative" ref={notificationsRef}>
								<Button
									variant="ghost"
									size="icon"
									className="relative transition-all hover:scale-110 hover:bg-muted/50"
									onClick={() => {
										setNotificationsOpen(!notificationsOpen);
										setProfileOpen(false);
									}}
								>
									<Bell className="h-5 w-5" />
									<span className="absolute top-1 right-1 h-2 w-2 animate-pulse rounded-full bg-accent" />
								</Button>

								{notificationsOpen && (
									<div className="fade-in slide-in-from-top-2 absolute right-0 mt-2 w-80 animate-in overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl duration-300">
										<div className="border-border/50 border-b bg-gradient-to-r from-primary/5 to-accent/5 p-4">
											<h3 className="font-semibold text-foreground">
												Notificações
											</h3>
											<p className="mt-1 text-muted-foreground text-xs">
												Você tem 2 notificações não lidas
											</p>
										</div>
										<div className="max-h-96 overflow-y-auto">
											{notifications.map((notification) => (
												<div
													key={notification.id}
													className={cn(
														"group cursor-pointer border-border/30 border-b p-4 transition-all duration-300 hover:bg-muted/30",
														notification.unread && "bg-primary/5",
													)}
												>
													<div className="flex items-start gap-3">
														{notification.unread && (
															<div className="mt-2 h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
														)}
														<div className="min-w-0 flex-1">
															<p className="truncate font-semibold text-foreground text-sm">
																{notification.title}
															</p>
															<p className="mt-1 line-clamp-2 text-muted-foreground text-xs">
																{notification.message}
															</p>
															<p className="mt-2 text-muted-foreground/70 text-xs">
																{notification.time}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
										<div className="border-border/50 border-t bg-muted/20 p-3">
											<Button
												variant="ghost"
												className="w-full text-sm transition-all hover:bg-muted/50"
												onClick={() => setNotificationsOpen(false)}
											>
												Ver todas as notificações
											</Button>
										</div>
									</div>
								)}
							</div>

							<div className="relative" ref={profileRef}>
								<Button
									variant="ghost"
									size="icon"
									className="transition-all hover:scale-110 hover:bg-muted/50"
									onClick={() => {
										setProfileOpen(!profileOpen);
										setNotificationsOpen(false);
									}}
								>
									<User className="h-5 w-5" />
								</Button>

								{profileOpen && (
									<div className="fade-in slide-in-from-top-2 absolute right-0 mt-2 w-72 animate-in overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl duration-300">
										<div className="border-border/50 border-b bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-6">
											<div className="flex items-center gap-4">
												<Avatar className="h-16 w-16 ring-4 ring-primary/20">
													<AvatarImage src="/placeholder.svg?height=64&width=64" />
													<AvatarFallback className="bg-primary text-lg text-primary-foreground">
														RC
													</AvatarFallback>
												</Avatar>
												<div className="min-w-0 flex-1">
													<p className="font-semibold text-foreground">
														Roberto Costa
													</p>
													<p className="truncate text-muted-foreground text-sm">
														roberto@empresa.com
													</p>
													<div className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1 font-medium text-accent text-xs">
														<div className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
														Contratante
													</div>
												</div>
											</div>
										</div>
										<div className="p-2">
											<Link
												href="/dashboard/contratante/perfil"
												className="group flex items-center gap-3 rounded-xl px-4 py-3 text-foreground/70 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-foreground"
												onClick={() => setProfileOpen(false)}
											>
												<User className="h-4 w-4 transition-transform group-hover:scale-110" />
												<span className="font-medium text-sm">Meu Perfil</span>
											</Link>
											<Link
												href="/dashboard/contratante/configuracoes"
												className="group flex items-center gap-3 rounded-xl px-4 py-3 text-foreground/70 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-foreground"
												onClick={() => setProfileOpen(false)}
											>
												<Settings className="h-4 w-4 transition-transform group-hover:scale-110" />
												<span className="font-medium text-sm">
													Configurações
												</span>
											</Link>
											<div className="my-2 border-border/50 border-t" />
											<button
												type="button"
												style={{ cursor: "pointer" }}
												className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-destructive/70 transition-all duration-300 hover:bg-destructive/10 hover:text-destructive"
												onClick={async () => {
													setProfileOpen(false);

													await signOut({ redirectUrl: "/" });
												}}
											>
												<LogOut className="h-4 w-4 transition-transform group-hover:scale-110" />
												<span className="font-medium text-sm">Sair</span>
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</header>

				{/* Page Content */}
				<main className="p-4 lg:p-8">{children}</main>
			</div>
		</div>
	);
}
