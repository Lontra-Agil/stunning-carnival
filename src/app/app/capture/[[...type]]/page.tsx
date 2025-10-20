"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, User, Briefcase } from "lucide-react";
import { useParams } from "next/navigation";

type UserType = "developer" | "contractor" | null;

interface FormData {
  userType: UserType;
  fullName: string;
  email: string;
  phone: string;
  position: string;
}

export default function CapturePage() {
  const params = useParams<{ type?: Array<string> }>();

  useEffect(() => {
    if (!params.type) return;

    if (params.type[0] === "developer") {
      setFormData((prev) => ({ ...prev, userType: "developer" }));
      setStep(2);
    } else if (params.type[0] === "contractor") {
      setFormData((prev) => ({ ...prev, userType: "contractor" }));
      setStep(2);
    }
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    userType: null,
    fullName: "",
    email: "",
    phone: "",
    position: "",
  });

  const totalSteps = 5;

  const handleUserTypeSelect = (type: UserType) => {
    setFormData((prev) => ({ ...prev, userType: type }));
    setStep(2);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const generateWhatsAppLink = () => {
    const userTypeText =
      formData.userType === "developer" ? "Desenvolvedor" : "Contratante";
    const message = `Olá! Meu nome é ${formData.fullName}.%0A%0ATipo: ${userTypeText}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0ACargo: ${formData.position}%0A%0AGostaria de saber mais sobre a Lontra Ágil!`;
    return `https://wa.me/5515997296124?text=${message}`;
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.userType !== null;
      case 2:
        return formData.fullName.trim() !== "";
      case 3:
        return formData.email.trim() !== "" && formData.email.includes("@");
      case 4:
        return formData.phone.trim() !== "";
      case 5:
        return formData.position.trim() !== "";
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-5">
        <Image
          src="/lontra-icon.svg"
          alt=""
          width={300}
          height={300}
          className="absolute -top-20 -right-20 rotate-12"
        />
        <Image
          src="/lontra-icon.svg"
          alt=""
          width={200}
          height={200}
          className="absolute top-1/3 -left-16 -rotate-12"
        />
      </div>

      {/* Back to home button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-2"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Voltar</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo-complete.svg"
              alt="Lontra Ágil"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Vamos começar!
          </h1>
          <p className="text-muted-foreground text-lg">
            Preencha as informações para entrarmos em contato via WhatsApp
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Passo {step} de {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((step / totalSteps) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: User Type Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Você é um...
                  </h2>
                  <p className="text-muted-foreground">
                    Selecione a opção que melhor descreve você
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleUserTypeSelect("developer")}
                    className="cursor-pointer group relative p-8 bg-secondary hover:bg-primary/10 border-2 border-border hover:border-primary rounded-xl transition-all duration-300 text-left"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          Desenvolvedor
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Quero trabalhar em projetos incríveis
                        </p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleUserTypeSelect("contractor")}
                    className="cursor-pointer group relative p-8 bg-secondary hover:bg-primary/10 border-2 border-border hover:border-primary rounded-xl transition-all duration-300 text-left"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors">
                        <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          Contratante
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Preciso de desenvolvedores para meu projeto
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Full Name */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Qual é o seu nome completo?
                  </h2>
                  <p className="text-muted-foreground">
                    Queremos saber como te chamar
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground text-lg">
                    Nome completo
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 text-lg py-6"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Email */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Qual é o seu e-mail?
                  </h2>
                  <p className="text-muted-foreground">
                    Para mantermos contato com você
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground text-lg">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 text-lg py-6"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Phone */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Qual é o seu telefone?
                  </h2>
                  <p className="text-muted-foreground">
                    Para entrarmos em contato via WhatsApp
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground text-lg">
                    Telefone (WhatsApp)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 text-lg py-6"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}

            {/* Step 5: Position */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Qual é o seu cargo?
                  </h2>
                  <p className="text-muted-foreground">
                    Nos ajude a entender melhor seu perfil
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-foreground text-lg">
                    Cargo/Função
                  </Label>
                  <Input
                    id="position"
                    type="text"
                    placeholder="Ex: Desenvolvedor Full Stack, CEO, Product Manager"
                    value={formData.position}
                    onChange={(e) =>
                      handleInputChange("position", e.target.value)
                    }
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 text-lg py-6"
                    autoFocus
                  />
                </div>

                {/* Summary */}
                <div className="mt-8 p-6 bg-secondary rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    Resumo das suas informações
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Tipo:</span>{" "}
                      {formData.userType === "developer"
                        ? "Desenvolvedor"
                        : "Contratante"}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Nome:</span>{" "}
                      {formData.fullName}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">
                        E-mail:
                      </span>{" "}
                      {formData.email}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Telefone:
                      </span>{" "}
                      {formData.phone}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">
                        Cargo:
                      </span>{" "}
                      {formData.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
            {step > 1 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="border-border hover:bg-accent text-foreground bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            )}

            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="ml-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Próximo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <a
                href={isStepValid() ? generateWhatsAppLink() : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-auto inline-flex items-center justify-center rounded-md font-semibold px-6 py-3 transition-colors
                  ${
                    !isStepValid()
                      ? "bg-[#8b6a47] text-[#3b2f26] opacity-80 cursor-not-allowed"
                      : "bg-[#d4a574] text-[#2a1d15] hover:bg-[#c8955e]"
                  }`}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Continuar
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
