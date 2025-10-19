"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  FolderGit2,
  Search,
  MessageSquare,
  CreditCard,
  History,
  Settings,
  Bell,
  Menu,
  X,
  LogOut,
  User,
  ChevronLeft,
  ChevronRight,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";

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
          className="fixed inset-0 bg-almost-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen bg-card border-r border-border/50 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          sidebarCollapsed ? "lg:w-20" : "lg:w-72",
          !sidebarCollapsed && "w-72",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 transition-all duration-500",
                sidebarCollapsed && "lg:opacity-0 lg:w-0 lg:overflow-hidden",
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
              className="lg:hidden hover:bg-muted/50 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "hidden lg:flex hover:bg-muted/50 transition-all duration-300 hover:scale-110",
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
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all duration-300 group relative overflow-hidden",
                  sidebarCollapsed && "lg:justify-center lg:px-2",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span
                  className={cn(
                    "font-medium relative z-10 transition-all duration-500",
                    sidebarCollapsed &&
                      "lg:opacity-0 lg:w-0 lg:overflow-hidden",
                  )}
                >
                  {item.name}
                </span>
                {sidebarCollapsed && (
                  <div className="hidden lg:block absolute left-full ml-2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
                    {item.name}
                  </div>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-border/50">
            <div
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30 transition-all duration-300 cursor-pointer group relative overflow-hidden",
                sidebarCollapsed && "lg:justify-center lg:px-2",
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <Avatar className="h-10 w-10 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 relative z-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  RC
                </AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  "flex-1 min-w-0 relative z-10 transition-all duration-500",
                  sidebarCollapsed && "lg:opacity-0 lg:w-0 lg:overflow-hidden",
                )}
              >
                <p className="text-sm font-semibold text-foreground truncate">
                  Roberto Costa
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  roberto@empresa.com
                </p>
              </div>
              <LogOut
                className={cn(
                  "h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10",
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
        <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-muted/50 transition-all hover:scale-110"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>

              {/* Search Bar */}
              <div className="hidden md:flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-2 w-80 hover:bg-muted/70 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/20">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar desenvolvedores, projetos..."
                  className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground w-full"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:scale-105"
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
                  className="relative hover:bg-muted/50 transition-all hover:scale-110"
                  onClick={() => {
                    setNotificationsOpen(!notificationsOpen);
                    setProfileOpen(false);
                  }}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full animate-pulse" />
                </Button>

                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-4 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
                      <h3 className="font-semibold text-foreground">
                        Notificações
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Você tem 2 notificações não lidas
                      </p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={cn(
                            "p-4 border-b border-border/30 hover:bg-muted/30 transition-all duration-300 cursor-pointer group",
                            notification.unread && "bg-primary/5",
                          )}
                        >
                          <div className="flex items-start gap-3">
                            {notification.unread && (
                              <div className="h-2 w-2 bg-accent rounded-full mt-2 group-hover:scale-125 transition-transform" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-foreground truncate">
                                {notification.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {notification.message}
                              </p>
                              <p className="text-xs text-muted-foreground/70 mt-2">
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-border/50 bg-muted/20">
                      <Button
                        variant="ghost"
                        className="w-full text-sm hover:bg-muted/50 transition-all"
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
                  className="hover:bg-muted/50 transition-all hover:scale-110"
                  onClick={() => {
                    setProfileOpen(!profileOpen);
                    setNotificationsOpen(false);
                  }}
                >
                  <User className="h-5 w-5" />
                </Button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-6 border-b border-border/50 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16 ring-4 ring-primary/20">
                          <AvatarImage src="/placeholder.svg?height=64&width=64" />
                          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                            RC
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground">
                            Roberto Costa
                          </p>
                          <p className="text-sm text-muted-foreground truncate">
                            roberto@empresa.com
                          </p>
                          <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                            <div className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse" />
                            Contratante
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <Link
                        href="/dashboard/contratante/perfil"
                        className="flex items-center gap-3 px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all duration-300 group"
                        onClick={() => setProfileOpen(false)}
                      >
                        <User className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Meu Perfil</span>
                      </Link>
                      <Link
                        href="/dashboard/contratante/configuracoes"
                        className="flex items-center gap-3 px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all duration-300 group"
                        onClick={() => setProfileOpen(false)}
                      >
                        <Settings className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">
                          Configurações
                        </span>
                      </Link>
                      <div className="my-2 border-t border-border/50" />
                      <button
                        style={{ cursor: "pointer" }}
                        className="flex items-center gap-3 px-4 py-3 text-destructive/70 hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all duration-300 group w-full"
                        onClick={async () => {
                          setProfileOpen(false);

                          await signOut({ redirectUrl: "/" });
                        }}
                      >
                        <LogOut className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Sair</span>
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
