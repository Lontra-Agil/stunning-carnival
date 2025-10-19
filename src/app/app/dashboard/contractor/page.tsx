import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Activity,
	AlertCircle,
	ArrowUpRight,
	Calendar,
	CheckCircle2,
	DollarSign,
	FileText,
	FolderGit2,
	MessageSquare,
	Star,
	Target,
	TrendingUp,
	UserPlus,
	Users,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { DashboardContractorLayout } from "./components/dashboard-contractor-layout";

export default function DashboardContratantePage() {
	return (
		<DashboardContractorLayout>
			<div className="space-y-8">
				{/* Welcome Section */}
				<div className="relative">
					<div className="-top-4 -right-4 pointer-events-none absolute hidden opacity-5 lg:block">
						<svg
							width="200"
							height="200"
							viewBox="0 0 200 200"
							fill="none"
							aria-hidden="true"
						>
							<circle
								cx="100"
								cy="100"
								r="80"
								stroke="#3B0F0F"
								strokeWidth="2"
							/>
							<circle
								cx="100"
								cy="100"
								r="60"
								stroke="#4D2626"
								strokeWidth="2"
							/>
							<circle
								cx="100"
								cy="100"
								r="40"
								stroke="#7E5B5A"
								strokeWidth="2"
							/>
						</svg>
					</div>

					<div className="space-y-2">
						<h1 className="font-bold text-4xl text-foreground">
							Olá, Roberto! 👋
						</h1>
						<p className="text-lg text-muted-foreground">
							Gerencie seus projetos e acompanhe o progresso dos desenvolvedores
						</p>
					</div>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
					{[
						{
							id: "stat-active-projects",
							title: "Projetos Ativos",
							value: "5",
							change: "+2 este mês",
							icon: FolderGit2,
							color: "bg-primary",
							trend: "up",
						},
						{
							id: "stat-developers",
							title: "Desenvolvedores",
							value: "12",
							change: "+3 novos",
							icon: Users,
							color: "bg-accent",
							trend: "up",
						},
						{
							id: "stat-total-investment",
							title: "Investimento Total",
							value: "R$ 45k",
							change: "+R$ 12k",
							icon: DollarSign,
							color: "bg-secondary",
							trend: "up",
						},
						{
							id: "stat-completion-rate",
							title: "Taxa de Conclusão",
							value: "92%",
							change: "+5%",
							icon: TrendingUp,
							color: "bg-warm-intermediate",
							trend: "up",
						},
					].map((stat) => (
						<Card
							key={stat.id}
							className="group relative cursor-pointer overflow-hidden border-0 bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/20 opacity-0 transition-opacity group-hover:opacity-100" />

							<div className="relative space-y-4">
								<div className="flex items-center justify-between">
									<div className={`p-3 ${stat.color} rounded-xl bg-opacity-10`}>
										<stat.icon
											className="h-6 w-6"
											style={{ color: stat.color.replace("bg-", "#") }}
										/>
									</div>
									<Badge
										variant="secondary"
										className="border-0 bg-green-100 font-semibold text-green-700"
									>
										{stat.change}
									</Badge>
								</div>

								<div>
									<h3 className="mb-1 font-bold text-3xl text-foreground">
										{stat.value}
									</h3>
									<p className="font-medium text-muted-foreground text-sm">
										{stat.title}
									</p>
								</div>
							</div>
						</Card>
					))}
				</div>

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					{/* Main Content - 2 columns */}
					<div className="space-y-6 lg:col-span-2">
						{/* Active Projects */}
						<Card className="border-0 bg-card p-6 shadow-lg lg:p-8">
							<div className="mb-6 flex items-center justify-between">
								<div>
									<h2 className="mb-1 font-bold text-2xl text-foreground">
										Projetos em Andamento
									</h2>
									<p className="text-muted-foreground text-sm">
										Acompanhe o progresso em tempo real
									</p>
								</div>
								<Button variant="ghost" size="sm" asChild className="group">
									<Link
										href="/dashboard/contratante/projetos"
										className="flex items-center gap-2"
									>
										Ver todos
										<ArrowUpRight className="group-hover:-translate-y-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Link>
								</Button>
							</div>

							<div className="space-y-4">
								{[
									{
										id: "project-ecommerce",
										name: "Sistema de E-commerce",
										developer: "Maria Silva",
										progress: 75,
										status: "Em progresso",
										statusColor: "bg-blue-100 text-blue-700",
										dueDate: "15 dias",
										metrics: { commits: 142, performance: 92 },
										avatar: "MS",
										budget: "R$ 12.000",
									},
									{
										id: "project-fitness-app",
										name: "App Mobile Fitness",
										developer: "Carlos Santos",
										progress: 45,
										status: "Em progresso",
										statusColor: "bg-blue-100 text-blue-700",
										dueDate: "28 dias",
										metrics: { commits: 89, performance: 88 },
										avatar: "CS",
										budget: "R$ 8.500",
									},
									{
										id: "project-dashboard-analytics",
										name: "Dashboard Analytics",
										developer: "Ana Costa",
										progress: 90,
										status: "Revisão",
										statusColor: "bg-yellow-100 text-yellow-700",
										dueDate: "5 dias",
										metrics: { commits: 203, performance: 95 },
										avatar: "AC",
										budget: "R$ 15.000",
									},
								].map((project) => (
									<div
										key={project.id}
										className="group cursor-pointer rounded-2xl border border-border bg-gradient-to-br from-transparent to-muted/5 p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
									>
										<div className="mb-4 flex items-start justify-between">
											<div className="flex items-start gap-3">
												<Avatar className="h-12 w-12 ring-2 ring-primary/10">
													<AvatarImage
														src={
															"/generic-placeholder-icon.png?height=48&width=48"
														}
													/>
													<AvatarFallback className="bg-primary/10 font-bold text-primary">
														{project.avatar}
													</AvatarFallback>
												</Avatar>
												<div>
													<h3 className="mb-1 font-bold text-foreground transition-colors group-hover:text-primary">
														{project.name}
													</h3>
													<p className="flex items-center gap-1.5 text-muted-foreground text-sm">
														<Users className="h-3.5 w-3.5" />
														{project.developer}
													</p>
												</div>
											</div>
											<Badge
												variant="secondary"
												className={`${project.statusColor} border-0 font-semibold`}
											>
												{project.status}
											</Badge>
										</div>

										<div className="space-y-3">
											<div className="flex items-center justify-between text-sm">
												<span className="font-medium text-muted-foreground">
													Progresso do Projeto
												</span>
												<span className="font-bold text-foreground">
													{project.progress}%
												</span>
											</div>
											<div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted">
												<div
													className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg transition-all duration-500"
													style={{ width: `${project.progress}%` }}
												/>
											</div>

											<div className="flex flex-wrap items-center justify-between gap-2 pt-2">
												<div className="flex items-center gap-4 text-muted-foreground text-sm">
													<span className="flex items-center gap-1.5 font-medium">
														<Activity className="h-4 w-4 text-primary" />
														{project.metrics.commits} commits
													</span>
													<span className="flex items-center gap-1.5 font-medium">
														<Zap className="h-4 w-4 text-accent" />
														{project.metrics.performance}% performance
													</span>
												</div>
												<div className="flex items-center gap-3 text-sm">
													<span className="flex items-center gap-1.5 font-medium text-muted-foreground">
														<Calendar className="h-4 w-4" />
														{project.dueDate}
													</span>
													<span className="font-bold text-foreground">
														{project.budget}
													</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</Card>

						{/* Developer Performance Chart */}
						<Card className="border-0 bg-card p-6 shadow-lg lg:p-8">
							<div className="mb-6">
								<h2 className="mb-1 font-bold text-2xl text-foreground">
									Performance dos Desenvolvedores
								</h2>
								<p className="text-muted-foreground text-sm">
									Métricas de produtividade dos últimos 6 meses
								</p>
							</div>

							<div className="flex h-72 items-end justify-between gap-2">
								{[
									{ id: "jul", value: 85, label: "Jul", dev: "Maria" },
									{ id: "ago", value: 78, label: "Ago", dev: "Carlos" },
									{ id: "set", value: 92, label: "Set", dev: "Ana" },
									{ id: "out", value: 88, label: "Out", dev: "Pedro" },
									{ id: "nov", value: 95, label: "Nov", dev: "Julia" },
									{ id: "dez", value: 90, label: "Dez", dev: "Lucas" },
								].map((item) => (
									<div
										key={item.id}
										className="group flex flex-1 flex-col items-center gap-3"
									>
										<div
											className="relative w-full cursor-pointer rounded-t-xl transition-all duration-300"
											style={{ height: `${item.value}%` }}
										>
											<div className="absolute inset-0 rounded-t-xl bg-gradient-to-t from-primary via-accent to-secondary opacity-80 shadow-lg transition-opacity group-hover:opacity-100" />
											<div className="-top-12 -translate-x-1/2 absolute left-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 font-bold text-background text-xs opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
												{item.dev}: {item.value}%
											</div>
										</div>
										<span className="font-semibold text-muted-foreground text-xs transition-colors group-hover:text-foreground">
											{item.label}
										</span>
									</div>
								))}
							</div>
						</Card>
					</div>

					{/* Sidebar - 1 column */}
					<div className="space-y-6">
						{/* Quick Actions */}
						<Card className="border-0 bg-gradient-to-br from-card to-muted/10 p-6 shadow-lg">
							<h2 className="mb-4 flex items-center gap-2 font-bold text-foreground text-xl">
								<Target className="h-5 w-5 text-primary" />
								Ações Rápidas
							</h2>
							<div className="space-y-2">
								{[
									{
										id: "action-hire-developer",
										icon: UserPlus,
										label: "Contratar Desenvolvedor",
										color: "text-primary",
										href: "/dashboard/contratante/buscar",
									},
									{
										id: "action-new-project",
										icon: FolderGit2,
										label: "Criar Novo Projeto",
										color: "text-accent",
										href: "/dashboard/contratante/projetos/novo",
									},
									{
										id: "action-view-reports",
										icon: FileText,
										label: "Ver Relatórios",
										color: "text-secondary",
										href: "/dashboard/contratante/relatorios",
									},
								].map((action) => (
									<Button
										key={action.id}
										className="group w-full justify-start border border-border bg-card text-foreground transition-all hover:border-primary/30 hover:bg-muted/50"
										variant="outline"
										asChild
									>
										<Link href={action.href}>
											<action.icon
												className={`mr-3 h-4 w-4 ${action.color} transition-transform group-hover:scale-110`}
											/>
											{action.label}
										</Link>
									</Button>
								))}
							</div>
						</Card>

						{/* Recent Activity */}
						<Card className="border-0 bg-card p-6 shadow-lg">
							<h2 className="mb-4 flex items-center gap-2 font-bold text-foreground text-xl">
								<Activity className="h-5 w-5 text-primary" />
								Atividades Recentes
							</h2>
							<div className="space-y-4">
								{[
									{
										id: "activity-dashboard-delivered",
										icon: CheckCircle2,
										text: 'Projeto "Dashboard Analytics" entregue',
										time: "1h atrás",
										color: "text-green-600",
										bg: "bg-green-100",
									},
									{
										id: "activity-message-maria",
										icon: MessageSquare,
										text: "Nova mensagem de Maria Silva",
										time: "3h atrás",
										color: "text-blue-600",
										bg: "bg-blue-100",
									},
									{
										id: "activity-carlos-applied",
										icon: Users,
										text: "Carlos Santos aplicou ao projeto",
										time: "5h atrás",
										color: "text-purple-600",
										bg: "bg-purple-100",
									},
									{
										id: "activity-deadline-approaching",
										icon: AlertCircle,
										text: "Prazo do projeto se aproximando",
										time: "1d atrás",
										color: "text-orange-600",
										bg: "bg-orange-100",
									},
								].map((activity) => (
									<div
										key={activity.id}
										className="group flex cursor-pointer items-start gap-3"
									>
										<div
											className={`rounded-xl p-2.5 ${activity.bg} ${activity.color} transition-transform group-hover:scale-110`}
										>
											<activity.icon className="h-4 w-4" />
										</div>
										<div className="min-w-0 flex-1">
											<p className="font-medium text-foreground text-sm transition-colors group-hover:text-primary">
												{activity.text}
											</p>
											<p className="mt-1 text-muted-foreground text-xs">
												{activity.time}
											</p>
										</div>
									</div>
								))}
							</div>
						</Card>

						{/* Top Developers */}
						<Card className="border-0 bg-gradient-to-br from-card to-primary/5 p-6 shadow-lg">
							<h2 className="mb-4 flex items-center gap-2 font-bold text-foreground text-xl">
								<Star className="h-5 w-5 text-primary" />
								Melhores Desenvolvedores
							</h2>
							<div className="space-y-4">
								{[
									{
										id: "dev-maria-silva",
										name: "Maria Silva",
										performance: 98,
										avatar: "MS",
										rating: 5.0,
										projects: 12,
									},
									{
										id: "dev-carlos-santos",
										name: "Carlos Santos",
										performance: 95,
										avatar: "CS",
										rating: 4.9,
										projects: 10,
									},
									{
										id: "dev-ana-costa",
										name: "Ana Costa",
										performance: 93,
										avatar: "AC",
										rating: 4.8,
										projects: 8,
									},
								].map((dev) => (
									<div
										key={dev.id}
										className="group flex cursor-pointer items-center gap-3"
									>
										<Avatar className="h-12 w-12 ring-2 ring-primary/20 transition-all group-hover:ring-primary/40">
											<AvatarImage
												src={"/generic-placeholder-icon.png?height=48&width=48"}
											/>
											<AvatarFallback className="bg-primary font-bold text-primary-foreground text-sm">
												{dev.avatar}
											</AvatarFallback>
										</Avatar>
										<div className="min-w-0 flex-1">
											<p className="font-bold text-foreground text-sm transition-colors group-hover:text-primary">
												{dev.name}
											</p>
											<div className="mt-1 flex items-center gap-2">
												<div className="flex items-center gap-1">
													<Star className="h-3 w-3 fill-accent text-accent" />
													<span className="font-semibold text-foreground text-xs">
														{dev.rating}
													</span>
												</div>
												<span className="text-muted-foreground text-xs">
													• {dev.projects} projetos
												</span>
											</div>
											<div className="mt-1.5 flex items-center gap-2">
												<div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
													<div
														className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
														style={{ width: `${dev.performance}%` }}
													/>
												</div>
												<span className="font-bold text-foreground text-xs">
													{dev.performance}%
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</DashboardContractorLayout>
	);
}
