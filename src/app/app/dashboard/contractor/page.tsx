import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  FolderGit2,
  Users,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Activity,
  Calendar,
  Zap,
  Target,
  Star,
  UserPlus,
  FileText,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { DashboardContractorLayout } from "./components/dashboard-contractor-layout";

export default function DashboardContratantePage() {
  return (
    <DashboardContractorLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="relative">
          <div className="absolute -top-4 -right-4 opacity-5 pointer-events-none hidden lg:block">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
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
            <h1 className="text-4xl font-bold text-foreground">
              Olá, Roberto! 👋
            </h1>
            <p className="text-lg text-muted-foreground">
              Gerencie seus projetos e acompanhe o progresso dos desenvolvedores
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            {
              title: "Projetos Ativos",
              value: "5",
              change: "+2 este mês",
              icon: FolderGit2,
              color: "bg-primary",
              trend: "up",
            },
            {
              title: "Desenvolvedores",
              value: "12",
              change: "+3 novos",
              icon: Users,
              color: "bg-accent",
              trend: "up",
            },
            {
              title: "Investimento Total",
              value: "R$ 45k",
              change: "+R$ 12k",
              icon: DollarSign,
              color: "bg-secondary",
              trend: "up",
            },
            {
              title: "Taxa de Conclusão",
              value: "92%",
              change: "+5%",
              icon: TrendingUp,
              color: "bg-warm-intermediate",
              trend: "up",
            },
          ].map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden p-6 bg-card shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 ${stat.color} bg-opacity-10 rounded-xl`}>
                    <stat.icon
                      className="h-6 w-6"
                      style={{ color: stat.color.replace("bg-", "#") }}
                    />
                  </div>
                  <Badge
                    variant="secondary"
                    className="border-0 font-semibold bg-green-100 text-green-700"
                  >
                    {stat.change}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Projects */}
            <Card className="p-6 lg:p-8 bg-card shadow-lg border-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-1">
                    Projetos em Andamento
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Acompanhe o progresso em tempo real
                  </p>
                </div>
                <Button variant="ghost" size="sm" asChild className="group">
                  <Link
                    href="/dashboard/contratante/projetos"
                    className="flex items-center gap-2"
                  >
                    Ver todos
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  {
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
                ].map((project, index) => (
                  <div
                    key={index}
                    className="p-5 border border-border rounded-2xl hover:shadow-md hover:border-primary/20 transition-all duration-300 group cursor-pointer bg-gradient-to-br from-transparent to-muted/5"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12 ring-2 ring-primary/10">
                          <AvatarImage
                            src={`/generic-placeholder-icon.png?height=48&width=48`}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">
                            {project.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
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
                        <span className="text-muted-foreground font-medium">
                          Progresso do Projeto
                        </span>
                        <span className="font-bold text-foreground">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="relative w-full bg-muted rounded-full h-2.5 overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 shadow-lg"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between pt-2 flex-wrap gap-2">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                          <span className="text-muted-foreground flex items-center gap-1.5 font-medium">
                            <Calendar className="h-4 w-4" />
                            {project.dueDate}
                          </span>
                          <span className="text-foreground font-bold">
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
            <Card className="p-6 lg:p-8 bg-card shadow-lg border-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Performance dos Desenvolvedores
                </h2>
                <p className="text-sm text-muted-foreground">
                  Métricas de produtividade dos últimos 6 meses
                </p>
              </div>

              <div className="h-72 flex items-end justify-between gap-2">
                {[
                  { value: 85, label: "Jul", dev: "Maria" },
                  { value: 78, label: "Ago", dev: "Carlos" },
                  { value: 92, label: "Set", dev: "Ana" },
                  { value: 88, label: "Out", dev: "Pedro" },
                  { value: 95, label: "Nov", dev: "Julia" },
                  { value: 90, label: "Dez", dev: "Lucas" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center gap-3 group"
                  >
                    <div
                      className="w-full rounded-t-xl relative cursor-pointer transition-all duration-300"
                      style={{ height: `${item.value}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-accent to-secondary rounded-t-xl opacity-80 group-hover:opacity-100 transition-opacity shadow-lg" />
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-foreground text-background text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                        {item.dev}: {item.value}%
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
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
            <Card className="p-6 bg-gradient-to-br from-card to-muted/10 shadow-lg border-0">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Ações Rápidas
              </h2>
              <div className="space-y-2">
                {[
                  {
                    icon: UserPlus,
                    label: "Contratar Desenvolvedor",
                    color: "text-primary",
                    href: "/dashboard/contratante/buscar",
                  },
                  {
                    icon: FolderGit2,
                    label: "Criar Novo Projeto",
                    color: "text-accent",
                    href: "/dashboard/contratante/projetos/novo",
                  },
                  {
                    icon: FileText,
                    label: "Ver Relatórios",
                    color: "text-secondary",
                    href: "/dashboard/contratante/relatorios",
                  },
                ].map((action, index) => (
                  <Button
                    key={index}
                    className="w-full justify-start bg-card hover:bg-muted/50 text-foreground border border-border hover:border-primary/30 transition-all group"
                    variant="outline"
                    asChild
                  >
                    <Link href={action.href}>
                      <action.icon
                        className={`h-4 w-4 mr-3 ${action.color} group-hover:scale-110 transition-transform`}
                      />
                      {action.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 bg-card shadow-lg border-0">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Atividades Recentes
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle2,
                    text: 'Projeto "Dashboard Analytics" entregue',
                    time: "1h atrás",
                    color: "text-green-600",
                    bg: "bg-green-100",
                  },
                  {
                    icon: MessageSquare,
                    text: "Nova mensagem de Maria Silva",
                    time: "3h atrás",
                    color: "text-blue-600",
                    bg: "bg-blue-100",
                  },
                  {
                    icon: Users,
                    text: "Carlos Santos aplicou ao projeto",
                    time: "5h atrás",
                    color: "text-purple-600",
                    bg: "bg-purple-100",
                  },
                  {
                    icon: AlertCircle,
                    text: "Prazo do projeto se aproximando",
                    time: "1d atrás",
                    color: "text-orange-600",
                    bg: "bg-orange-100",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <div
                      className={`p-2.5 rounded-xl ${activity.bg} ${activity.color} group-hover:scale-110 transition-transform`}
                    >
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {activity.text}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Developers */}
            <Card className="p-6 bg-gradient-to-br from-card to-primary/5 shadow-lg border-0">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Melhores Desenvolvedores
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Maria Silva",
                    performance: 98,
                    avatar: "MS",
                    rating: 5.0,
                    projects: 12,
                  },
                  {
                    name: "Carlos Santos",
                    performance: 95,
                    avatar: "CS",
                    rating: 4.9,
                    projects: 10,
                  },
                  {
                    name: "Ana Costa",
                    performance: 93,
                    avatar: "AC",
                    rating: 4.8,
                    projects: 8,
                  },
                ].map((dev, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <AvatarImage
                        src={`/generic-placeholder-icon.png?height=48&width=48`}
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm font-bold">
                        {dev.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {dev.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-accent text-accent" />
                          <span className="text-xs font-semibold text-foreground">
                            {dev.rating}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          • {dev.projects} projetos
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${dev.performance}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-foreground">
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
