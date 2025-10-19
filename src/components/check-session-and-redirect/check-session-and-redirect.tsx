"use client";

import { exec } from "node:child_process";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function CheckSessionAndRedirect({ userType }: { userType?: string }) {
	const router = useRouter();
	const { isSignedIn, sessionId, userId } = useAuth();
	const { user } = useUser();
	const executedOnce = useRef(false);
	//TODO: Ajustar o tratamento de todos os processos que envolvem uso de serviços externos e que são passíveis de falha

	useEffect(() => {
		if (executedOnce.current) return;

		if (isSignedIn && sessionId && userId && user) {
			executedOnce.current = true;

			if ("unsafeMetadata" in user && !user?.unsafeMetadata?.onboardingDone) {
				console.log("Updating user metadata for developer onboarding...");

				user
					.update({
						unsafeMetadata: {
							loggedInAt: Date.now(),
							userType: userType,
							onbordingDone: true,
						},
					})
					.then(() => {
						console.log("User metadata updated successfully.");
						router.replace(`/app/dashboard/${userType}`);
					});
			} else {
				const userType = user?.unsafeMetadata?.userType;

				router.replace(`/app/dashboard/${userType}`);
			}
		}
	}, [isSignedIn, sessionId, userId, user, userType, router]);

	return <></>;
}
