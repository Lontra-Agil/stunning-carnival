"use client";

import "./floating-label-input.css";

import { ErrorIndicatorIcon } from "@/components/icons/error-indicator-icon";
import type { InputProps } from "@/types/input-props-type";
import debounce from "lodash/debounce";
import type React from "react";
import { type JSX, useCallback, useRef, useState } from "react";
import type {
	UseFormClearErrors,
	UseFormRegisterReturn,
} from "react-hook-form";
import zod, { type ZodObject, type ZodRawShape } from "zod";

interface FloatingLabelInputProps extends Partial<InputProps> {
	errorMessage?: string;
	label: JSX.Element | string;
	test?: string;
	register?: UseFormRegisterReturn;
	containerStyle?: React.CSSProperties;
	clearErrors?: UseFormClearErrors<Record<string, unknown>>;
	schema?: ZodObject<ZodRawShape>;
	leftIcon?: JSX.Element;
	onClickLeft?: () => void;
}

function FloatingLabelInput({
	leftIcon,
	onClickLeft,
	label,
	errorMessage,
	containerStyle,
	register,
	name,
	schema,
	clearErrors,
	...rest
}: FloatingLabelInputProps) {
	const [filled, setFilled] = useState(false);
	const [focused, setFocused] = useState<boolean>(false);
	const [valid, setValid] = useState(false);

	const inputRef = useRef<HTMLInputElement | null>(null);

	const debouncedUpdate = (
		value: string,
		currentErrorMessage: string | undefined,
	) =>
		debounce((value: string, currentErrorMessage: string | undefined) => {
			if (currentErrorMessage) {
				clearErrors?.(register?.name);
			}

			if (schema && register?.name) {
				const inputFieldSchema = schema.pick({ [register?.name]: true });

				const result = inputFieldSchema.safeParse({
					[register?.name]: inputRef.current?.value,
				});

				if (result.success && !valid) {
					setValid(true);
				}

				if (!result.success && valid) {
					setValid(false);
				}
			}

			if (value.length > 0) {
				setFilled(true);
			} else {
				setFilled(false);
			}
		}, 50)(value, currentErrorMessage);

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const value = e.target.value;

		debouncedUpdate(value, errorMessage);

		setFocused(false);

		register?.onBlur?.(e);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		debouncedUpdate(newValue, errorMessage);

		register?.onChange?.(e);
	};

	return (
		<div className="input-container" id="omni-input-container">
			<div
				className={`floating-label-input-container floating-label-input-border ${
					errorMessage ? "error" : ""
				} ${!errorMessage && focused ? "focused" : ""} ${valid ? "valid" : ""}`}
				style={containerStyle}
			>
				<input
					{...rest}
					className={"floating-label-input"}
					style={{ paddingLeft: 16 }}
					{...register}
					onBlur={handleBlur}
					onChange={handleChange}
					onFocus={() => setFocused(true)}
					ref={(e) => {
						register?.ref(e);
						inputRef.current = e;
					}}
				/>
				<label
					className={`floating-label-input-label ${filled ? "filled" : ""}`}
					htmlFor="email-or-phone-input"
				>
					{label}
				</label>
				{onClickLeft && (
					<button
						style={{
							width: 44,
							margin: 0,
							display: "inline-flex",
							alignItems: "center",
							border: 0,
							borderRadius: 0,
							backgroundColor: "transparent",
							flexGrow: 0,
							cursor: "pointer",
						}}
						type="button"
						onClick={() => onClickLeft()}
					>
						{leftIcon}
					</button>
				)}
			</div>

			<div
				className="invalid-input-error"
				style={{ display: errorMessage ? "flex" : "none" }}
			>
				<span style={{ marginRight: 8 }} id="invalid-input-error-icon">
					<ErrorIndicatorIcon />
				</span>
				<span id="invalid-input-error-message-email">{errorMessage}</span>
			</div>
		</div>
	);
}

export { FloatingLabelInput };
