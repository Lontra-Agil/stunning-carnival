"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Como funciona a verificação de portfólio dos desenvolvedores?",
        answer:
            "Cada desenvolvedor conecta seus repositórios de código à plataforma. Analisamos automaticamente o histórico de trabalho real, extraindo métricas de qualidade, consistência e complexidade dos projetos. Isso garante que você veja apenas portfólios verificados e autênticos.",
    },
    {
        question: "Como são calculadas as métricas de performance?",
        answer:
            "Utilizamos algoritmos avançados que analisam dados reais de produtividade: frequência de atualizações, qualidade do código, resolução de problemas e padrões de trabalho. Essas métricas são atualizadas continuamente e fornecem uma visão objetiva da capacidade de cada desenvolvedor.",
    },
    {
        question: "Posso acompanhar o progresso do meu projeto em tempo real?",
        answer:
            "Sim! Nossa plataforma oferece dashboards interativos com gráficos e métricas atualizadas automaticamente. Você visualiza o andamento do projeto, velocidade de desenvolvimento, qualidade do código e muito mais, tudo em tempo real.",
    },
    {
        question: "Como funciona o pagamento na plataforma?",
        answer:
            "Oferecemos um sistema de pagamento seguro com múltiplas opções. Você pode definir marcos do projeto e liberar pagamentos conforme as entregas são concluídas. A plataforma retém os valores até a aprovação de cada etapa, garantindo segurança para ambas as partes.",
    },
    {
        question: "Quanto custa usar a Lontra Ágil?",
        answer:
            "Para desenvolvedores, o cadastro é gratuito. Cobramos uma pequena taxa apenas sobre projetos concluídos. Para contratantes, não há custo de cadastro ou mensalidade - você paga apenas pelos serviços contratados, com total transparência de valores.",
    },
    {
        question: "Como garanto a qualidade do desenvolvedor contratado?",
        answer:
            "Além das métricas de performance verificadas, você tem acesso ao histórico completo de projetos, avaliações de outros clientes e pode visualizar amostras reais de código. Durante o projeto, as métricas em tempo real permitem identificar qualquer problema rapidamente.",
    },
    {
        question: "Posso cancelar um projeto em andamento?",
        answer:
            "Sim. Temos políticas claras de cancelamento que protegem ambas as partes. Pagamentos são proporcionais ao trabalho já realizado, baseados nos marcos concluídos. Recomendamos sempre comunicação clara antes de qualquer cancelamento.",
    },
    {
        question: "Os desenvolvedores passam por algum processo de seleção?",
        answer:
            "Todos os desenvolvedores precisam conectar seus repositórios reais de código. Nossa plataforma analisa automaticamente a qualidade e autenticidade do trabalho. Desenvolvedores com métricas inconsistentes ou portfólios não verificáveis não são aprovados.",
    },
]

export function LandingPageFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="py-24 px-4 bg-[#BDA09D]/20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3B0F0F] mb-4">Perguntas Frequentes</h2>
                    <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
                        Tire suas dúvidas sobre como funciona a plataforma
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-[#BDA09D]/10"
                            >
                                <span className="text-lg font-semibold text-[#3B0F0F] pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-[#4D2626] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="px-6 pb-5 text-[#1A1A1A]/80 leading-relaxed">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[#1A1A1A]/70 mb-4">Ainda tem dúvidas?</p>
                    <a
                        href="mailto:contato@lontraagil.com"
                        className="inline-flex items-center gap-2 text-[#4D2626] font-semibold hover:text-[#3B0F0F] transition-colors"
                    >
                        Entre em contato conosco
                    </a>
                </div>
            </div>
        </section>
    )
}
