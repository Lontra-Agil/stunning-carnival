"use client";

import type { JSX } from "react";
import { LoadingIndicator } from "../loading-indicator/loading-indicator";
import "./outlined-button.css";

export interface OutlinedButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	leftIcon?: JSX.Element;
	buttonType?: "danger" | "secondary" | "primary" | "transparent";
	rightIcon?: JSX.Element;
	label: JSX.Element | string;
	isLoading?: boolean;
}

const OutlinedButton = ({
	label,
	leftIcon,
	rightIcon,
	buttonType = "primary",
	style,
	isLoading,
	...rest
}: OutlinedButtonProps) => {
	const getRestStyles = () => {
		if (style) {
			return { ...style };
		}
		return {};
	};

	return (
		<button
			{...rest}
			className={`${rest.className} outlined-button ${buttonType}`}
			style={{
				borderRadius: style?.borderRadius ?? 6,
				position: style?.position ?? "relative",
				display: style?.display ?? "inline-block",
				cursor: style?.cursor ?? "pointer",
				height: style?.height ?? "32px",
				padding: style?.padding ?? "0 12px",
				lineHeight: style?.lineHeight ?? 1,
				fontSize: style?.fontSize ?? "14px",
				fontWeight: style?.fontWeight ?? 500,
				whiteSpace: style?.whiteSpace ?? "nowrap",
				border: style?.border ?? 0,
				appearance: style?.appearance ?? "button",
				transition: style?.transition ?? "color .15s ease",
				...getRestStyles(),
			}}
		>
			<span>
				<span
					style={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "100%",
						paddingBottom: "1.5px",
						transition: "opacity .15s ease .1s",
						visibility: isLoading ? "hidden" : "visible",
					}}
				>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: "4px",
						}}
					>
						{leftIcon} {label} {rightIcon}
					</span>
				</span>
				{isLoading && <LoadingIndicator />}
			</span>
		</button>
	);
};

export { OutlinedButton };
