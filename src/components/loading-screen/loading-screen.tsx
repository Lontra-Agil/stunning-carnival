"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + 2;
			});
		}, 30);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#BDA09D]">
			{/* Main loading content */}
			<div className="relative z-10 flex flex-col items-center gap-6">
				{/* Main icon container */}
				<div className="relative animate-float rounded-full bg-white p-8 shadow-lg">
					<Image
						src="/lontra-icon.svg"
						alt="Lontra Ágil"
						width={100}
						height={100}
						className="animate-breathe"
					/>
				</div>

				{/* Loading text */}
				<p className="animate-pulse font-medium text-[#3B0F0F] text-lg">
					Carregando...
				</p>
			</div>

			<style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.9;
          }
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 2s ease-in-out infinite;
        }
      `}</style>
		</div>
	);
}
