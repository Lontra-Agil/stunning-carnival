import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
	Activity,
	AlertCircle,
	ArrowUpRight,
	Award,
	BarChart3,
	Calendar,
	CheckCircle2,
	Clock,
	FolderGit2,
	Target,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { DashboardDeveloperLayout } from "./components/dashboard-developer-layout";

export default function DashboardPage() {
	return (
		<DashboardDeveloperLayout>
			<div className="space-y-8">
				{/* Welcome Section with decorative elements */}
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
							Bem-vindo de volta, João! 👋
						</h1>
						<p className="text-lg text-muted-foreground">
							Aqui está um resumo das suas atividades e métricas de performance
						</p>
					</div>
				</div>

				{/* Stats Cards Data */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
					{[
						{
							id: "projetos-ativos",
							title: "Projetos Ativos",
							value: "8",
							change: "+12%",
							icon: FolderGit2,
							color: "bg-warm-intermediate",
							trend: "up",
						},
						{
							id: "colaboradores",
							title: "Colaboradores",
							value: "24",
							change: "+5 novos",
							icon: Users,
							color: "bg-warm-intermediate",
							trend: "up",
						},
						{
							id: "performance-media",
							title: "Performance Média",
							value: "94%",
							change: "+8%",
							icon: TrendingUp,
							color: "bg-warm-intermediate",
							trend: "up",
						},
						{
							id: "horas-mes",
							title: "Horas Este Mês",
							value: "156h",
							change: "-2h",
							icon: Clock,
							color: "bg-warm-intermediate",
							trend: "down",
						},
					].map((stat) => (
						<Card
							key={stat.id}
							className="group relative cursor-pointer overflow-hidden border-0 bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
						>
							{/* Decorative gradient */}
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
										className={cn(
											"border-0 font-semibold",
											stat.trend === "up"
												? "bg-green-100 text-green-700"
												: "bg-orange-100 text-orange-700",
										)}
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
						{/* Active Projects with enhanced design */}
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
										href="/dashboard/projetos"
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
										id: "ecommerce-techstore",
										name: "Sistema de E-commerce",
										client: "TechStore Brasil",
										progress: 75,
										status: "Em progresso",
										statusColor: "bg-blue-100 text-blue-700",
										dueDate: "15 dias",
										metrics: { commits: 142, performance: 92 },
										avatar: "TS",
									},
									{
										id: "app-fitlife",
										name: "App Mobile Fitness",
										client: "FitLife Academy",
										progress: 45,
										status: "Em progresso",
										statusColor: "bg-blue-100 text-blue-700",
										dueDate: "28 dias",
										metrics: { commits: 89, performance: 88 },
										avatar: "FL",
									},
									{
										id: "dashboard-dataviz",
										name: "Dashboard Analytics",
										client: "DataViz Solutions",
										progress: 90,
										status: "Revisão",
										statusColor: "bg-yellow-100 text-yellow-700",
										dueDate: "5 dias",
										metrics: { commits: 203, performance: 95 },
										avatar: "DV",
									},
								].map((project) => (
									<div
										key={project.id}
										className="group cursor-pointer rounded-2xl border border-border bg-gradient-to-br from-transparent to-muted/5 p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
									>
										<div className="mb-4 flex items-start justify-between">
											<div className="flex items-start gap-3">
												<Avatar className="h-12 w-12 ring-2 ring-primary/10">
													<AvatarFallback className="bg-primary/10 font-bold text-primary">
														{project.avatar}
													</AvatarFallback>
												</Avatar>
												<div>
													<h3 className="mb-1 font-bold text-foreground transition-colors group-hover:text-primary">
														{project.name}
													</h3>
													<p className="text-muted-foreground text-sm">
														{project.client}
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
												<span className="flex items-center gap-1.5 font-medium text-muted-foreground text-sm">
													<Calendar className="h-4 w-4" />
													{project.dueDate}
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</Card>

						{/* Performance Chart with enhanced design */}
						<Card className="border-0 bg-card p-6 shadow-lg lg:p-8">
							<div className="mb-6">
								<h2 className="mb-1 font-bold text-2xl text-foreground">
									Métricas de Performance
								</h2>
								<p className="text-muted-foreground text-sm">
									Evolução mensal da sua produtividade
								</p>
							</div>

							<div className="flex h-72 items-end justify-between gap-2">
								{[
									{ id: "jan", value: 65, label: "Jan" },
									{ id: "fev", value: 78, label: "Fev" },
									{ id: "mar", value: 82, label: "Mar" },
									{ id: "abr", value: 75, label: "Abr" },
									{ id: "mai", value: 88, label: "Mai" },
									{ id: "jun", value: 92, label: "Jun" },
									{ id: "jul", value: 85, label: "Jul" },
									{ id: "ago", value: 90, label: "Ago" },
									{ id: "set", value: 94, label: "Set" },
									{ id: "out", value: 89, label: "Out" },
									{ id: "nov", value: 95, label: "Nov" },
									{ id: "dez", value: 92, label: "Dez" },
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
											<div className="-top-10 -translate-x-1/2 absolute left-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 font-bold text-background text-xs opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
												{item.value}% performance
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
						{/* Quick Actions with enhanced design */}
						<Card className="border-0 bg-gradient-to-br from-card to-muted/10 p-6 shadow-lg">
							<h2 className="mb-4 flex items-center gap-2 font-bold text-foreground text-xl">
								<Target className="h-5 w-5 text-primary" />
								Ações Rápidas
							</h2>
							<div className="space-y-2">
								{[
									{
										id: "novo-projeto",
										icon: FolderGit2,
										label: "Novo Projeto",
										color: "text-primary",
									},
									{
										id: "buscar-devs",
										icon: Users,
										label: "Buscar Desenvolvedores",
										color: "text-accent",
									},
									{
										id: "ver-relatorios",
										icon: BarChart3,
										label: "Ver Relatórios",
										color: "text-secondary",
									},
								].map((action) => (
									<Button
										key={action.id}
										className="group w-full justify-start border border-border bg-card text-foreground transition-all hover:border-primary/30 hover:bg-muted/50"
										variant="outline"
									>
										<action.icon
											className={`mr-3 h-4 w-4 ${action.color} transition-transform group-hover:scale-110`}
										/>
										{action.label}
									</Button>
								))}
							</div>
						</Card>

						{/* Recent Activity with enhanced design */}
						<Card className="border-0 bg-card p-6 shadow-lg">
							<h2 className="mb-4 flex items-center gap-2 font-bold text-foreground text-xl">
								<Activity className="h-5 w-5 text-primary" />
								Atividades Recentes
							</h2>
							<div className="space-y-4">
								{[
									{
										id: "projeto-aprovado",
										icon: CheckCircle2,
										text: 'Projeto "Dashboard Analytics" aprovado',
										time: "2h atrás",
										color: "text-green-600",
										bg: "bg-green-100",
									},
									{
										id: "dev-adicionado",
										icon: Users,
										text: "Novo desenvolvedor adicionado ao time",
										time: "5h atrás",
										color: "text-blue-600",
										bg: "bg-blue-100",
									},
									{
										id: "prazo-aproximando",
										icon: AlertCircle,
										text: "Prazo do projeto se aproximando",
										time: "1d atrás",
										color: "text-orange-600",
										bg: "bg-orange-100",
									},
									{
										id: "performance-aumentou",
										icon: TrendingUp,
										text: "Performance aumentou 8% este mês",
										time: "2d atrás",
										color: "text-purple-600",
										bg: "bg-purple-100",
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

						{/* Top Performers with enhanced design */}
						<Card className="border-0 bg-gradient-to-br from-card to-primary/5 p-6 shadow-lg">
							<h2 className="mb-4 flex items-center gap-2 font-bold text-foreground text-xl">
								<Award className="h-5 w-5 text-primary" />
								Top Desenvolvedores
							</h2>
							<div className="space-y-4">
								{[
									{
										id: "maria-silva",
										name: "Maria Silva",
										performance: 98,
										avatar: "MS",
										rank: 1,
									},
									{
										id: "carlos-santos",
										name: "Carlos Santos",
										performance: 95,
										avatar: "CS",
										rank: 2,
									},
									{
										id: "ana-costa",
										name: "Ana Costa",
										performance: 93,
										avatar: "AC",
										rank: 3,
									},
								].map((dev) => (
									<div
										key={dev.id}
										className="group flex cursor-pointer items-center gap-3"
									>
										<div className="relative">
											<Avatar className="h-12 w-12 ring-2 ring-primary/20 transition-all group-hover:ring-primary/40">
												<AvatarFallback className="bg-primary font-bold text-primary-foreground text-sm">
													{dev.avatar}
												</AvatarFallback>
											</Avatar>
											<div className="-bottom-1 -right-1 absolute flex h-5 w-5 items-center justify-center rounded-full bg-accent font-bold text-white text-xs shadow-lg">
												{dev.rank}
											</div>
										</div>
										<div className="min-w-0 flex-1">
											<p className="font-bold text-foreground text-sm transition-colors group-hover:text-primary">
												{dev.name}
											</p>
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
		</DashboardDeveloperLayout>
	);
}
