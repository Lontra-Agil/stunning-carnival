"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, Check, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
		<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4">
			{/* Background decorations */}
			<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-5">
				<Image
					src="/lontra-icon.svg"
					alt=""
					width={300}
					height={300}
					className="-top-20 -right-20 absolute rotate-12"
				/>
				<Image
					src="/lontra-icon.svg"
					alt=""
					width={200}
					height={200}
					className="-left-16 -rotate-12 absolute top-1/3"
				/>
			</div>

			{/* Back to home button */}
			<Link
				href="/"
				className="absolute top-6 left-6 z-20 flex items-center space-x-2 text-muted-foreground transition-colors duration-200 hover:text-primary"
			>
				<ArrowLeft className="h-5 w-5" />
				<span>Voltar</span>
			</Link>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative z-10 w-full max-w-2xl"
			>
				{/* Header */}
				<div className="mb-8 text-center">
					<Link href="/" className="mb-6 inline-block">
						<Image
							src="/logo-complete.svg"
							alt="Lontra Ágil"
							width={180}
							height={50}
							className="h-12 w-auto"
						/>
					</Link>
					<h1 className="mb-2 font-bold text-3xl text-foreground md:text-4xl">
						Vamos começar!
					</h1>
					<p className="text-lg text-muted-foreground">
						Preencha as informações para entrarmos em contato via WhatsApp
					</p>
				</div>

				{/* Progress bar */}
				<div className="mb-8">
					<div className="mb-2 flex items-center justify-between">
						<span className="text-muted-foreground text-sm">
							Passo {step} de {totalSteps}
						</span>
						<span className="text-muted-foreground text-sm">
							{Math.round((step / totalSteps) * 100)}%
						</span>
					</div>
					<div className="h-2 overflow-hidden rounded-full bg-secondary">
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
					className="rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12"
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
								<div className="mb-8 text-center">
									<h2 className="mb-2 font-bold text-2xl text-foreground">
										Você é um...
									</h2>
									<p className="text-muted-foreground">
										Selecione a opção que melhor descreve você
									</p>
								</div>

								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<button
										onClick={() => handleUserTypeSelect("developer")}
										className="group relative cursor-pointer rounded-xl border-2 border-border bg-secondary p-8 text-left transition-all duration-300 hover:border-primary hover:bg-primary/10"
									>
										<div className="flex flex-col items-center space-y-4 text-center">
											<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
												<User className="h-8 w-8 text-primary" />
											</div>
											<div>
												<h3 className="mb-2 font-bold text-foreground text-xl">
													Desenvolvedor
												</h3>
												<p className="text-muted-foreground text-sm">
													Quero trabalhar em projetos incríveis
												</p>
											</div>
										</div>
									</button>

									<button
										onClick={() => handleUserTypeSelect("contractor")}
										className="group relative cursor-pointer rounded-xl border-2 border-border bg-secondary p-8 text-left transition-all duration-300 hover:border-primary hover:bg-primary/10"
									>
										<div className="flex flex-col items-center space-y-4 text-center">
											<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
												<Briefcase className="h-8 w-8 text-primary" />
											</div>
											<div>
												<h3 className="mb-2 font-bold text-foreground text-xl">
													Contratante
												</h3>
												<p className="text-muted-foreground text-sm">
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
								<div className="mb-8 text-center">
									<h2 className="mb-2 font-bold text-2xl text-foreground">
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
										className="border-border bg-secondary py-6 text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
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
								<div className="mb-8 text-center">
									<h2 className="mb-2 font-bold text-2xl text-foreground">
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
										className="border-border bg-secondary py-6 text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
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
								<div className="mb-8 text-center">
									<h2 className="mb-2 font-bold text-2xl text-foreground">
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
										className="border-border bg-secondary py-6 text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
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
								<div className="mb-8 text-center">
									<h2 className="mb-2 font-bold text-2xl text-foreground">
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
										className="border-border bg-secondary py-6 text-foreground text-lg placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
										autoFocus
									/>
								</div>

								{/* Summary */}
								<div className="mt-8 rounded-xl border border-border bg-secondary p-6">
									<h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
										<Check className="h-5 w-5 text-primary" />
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
					<div className="mt-8 flex items-center justify-between border-border border-t pt-6">
						{step > 1 && (
							<Button
								onClick={handleBack}
								variant="outline"
								className="border-border bg-transparent text-foreground hover:bg-accent"
							>
								<ArrowLeft className="mr-2 h-4 w-4" />
								Voltar
							</Button>
						)}

						{step < totalSteps ? (
							<Button
								onClick={handleNext}
								disabled={!isStepValid()}
								className="ml-auto bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
							>
								Próximo
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						) : (
							<a
								href={isStepValid() ? generateWhatsAppLink() : undefined}
								target="_blank"
								rel="noopener noreferrer"
								className={`ml-auto inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold transition-colors ${
									!isStepValid()
										? "cursor-not-allowed bg-[#8b6a47] text-[#3b2f26] opacity-80"
										: "bg-[#d4a574] text-[#2a1d15] hover:bg-[#c8955e]"
								}`}
							>
								<svg
									className="mr-2 h-5 w-5"
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
