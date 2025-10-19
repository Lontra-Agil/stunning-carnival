"use client";

import type React from "react";
import type { JSX } from "react";
import {
	type Control,
	Controller,
	type FieldPath,
	type FieldValues,
} from "react-hook-form";
import _Select, { type ActionMeta, type SingleValue } from "react-select";

export interface SelectProps<TFieldValues extends FieldValues = FieldValues> {
	style?: React.CSSProperties;
	isLoading?: boolean;
	options?: Array<{ label: string; value: string }>;
	onChange?: (
		newValue: SingleValue<{
			label: string;
			value: string;
		}>,
		actionMeta: ActionMeta<{
			label: string;
			value: string;
		}>,
	) => void;
	defaultValue?: {
		label: string;
		value: string;
	} | null;
	control?: Control<TFieldValues>;
	name?: FieldPath<TFieldValues> | string;
	isClearable?: boolean;
	onClear?: () => void;
	placeholderStyle?: React.CSSProperties;
	valueContainerStyle?: React.CSSProperties;
	placeholder?: JSX.Element | string;
	menuPortalTarget?: HTMLElement | null | undefined;
}

const Select = <TFieldValues extends FieldValues = FieldValues>({
	defaultValue,
	onChange,
	options,
	style,
	isLoading,
	control,
	name,
	isClearable,
	onClear,
	placeholderStyle,
	valueContainerStyle,
	placeholder,
	menuPortalTarget,
}: SelectProps) => {
	return control ? (
		<Controller
			control={control}
			name={String(name)}
			render={({ field, fieldState }) => (
				<div style={{ zIndex: 999 }}>
					<_Select
						placeholder={placeholder}
						menuPortalTarget={menuPortalTarget}
						isClearable={isClearable}
						value={defaultValue}
						onChange={(newValue, actionMeta) => {
							if (newValue === null) {
								onClear?.();
							}

							onChange?.(newValue, actionMeta);

							field.onChange(newValue?.value);
						}}
						options={options}
						isLoading={isLoading}
						classNamePrefix={"atual"}
						noOptionsMessage={() => <>Nenhuma opção</>}
						styles={{
							option: (base, state) => ({
								...base,
								backgroundColor: state.isSelected
									? "var(--color-primary)" // background for selected
									: state.isFocused
										? "var(--color-warm-intermediate)" // hover color
										: "white",
								cursor: "pointer",
							}),
							menuPortal: (baseStyles, state) => ({
								...baseStyles,
								zIndex: 999,
							}),
							control: (baseStyles, state) => ({
								...baseStyles,
								verticalAlign: "top",
								margin: 0,
								height: 31.59,
								width: style?.width ?? 200,
								fontWeight: 400,
								lineHeight: 1.4,
								color: "var(--gray-800)",
								backgroundColor: "transparent",
								backgroundClip: "padding-box",
								boxSizing: "border-box",
								transition:
									"border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
								borderRadius: 8,
								borderWidth: 1,
								borderStyle: "solid",
								borderColor: state.isFocused
									? "var(--primary-600)"
									: "var(--gray-200)",
								boxShadow: state.isFocused
									? "0px 0px 0px 1px var(--green-600)"
									: undefined,
								outline: state.isFocused ? 0 : undefined,
								...style,
							}),
							placeholder: (baseStyles, props) => ({
								...baseStyles,
								fontSize: placeholderStyle?.fontSize ?? 14,
								marginLeft: placeholderStyle?.marginLeft,
							}),
							container: (baseStyles, props) => ({
								...baseStyles,
								width: style?.width ?? 200,
							}),
							indicatorsContainer: (baseStyles, props) => ({
								...baseStyles,
								marginTop: -1.8,
							}),
							valueContainer: (baseStyles, props) => ({
								...baseStyles,
								marginTop: valueContainerStyle?.marginTop ?? -4.3,
								marginLeft: valueContainerStyle?.marginLeft,
							}),
						}}
					/>
				</div>
			)}
		/>
	) : (
		<div style={{ zIndex: 999 }}>
			<_Select
				placeholder={placeholder}
				menuPortalTarget={menuPortalTarget}
				isClearable={isClearable}
				value={defaultValue}
				onChange={(newValue, actionMeta) => {
					if (newValue === null) {
						onClear?.();
					}

					onChange?.(newValue, actionMeta);
				}}
				options={options}
				isLoading={isLoading}
				classNamePrefix={"atual"}
				noOptionsMessage={() => <>Nenhuma opção</>}
				styles={{
					option: (base, state) => ({
						...base,
						backgroundColor: state.isSelected
							? "var(--color-primary)" // background for selected
							: state.isFocused
								? "var(--color-warm-intermediate)" // hover color
								: "white",
						cursor: "pointer",
					}),
					menuPortal: (baseStyles, state) => ({
						...baseStyles,
						zIndex: 999,
					}),
					control: (baseStyles, state) => ({
						...baseStyles,
						verticalAlign: "top",
						margin: 0,
						height: 31.59,
						width: style?.width ?? 200,
						fontWeight: 400,
						lineHeight: 1.4,
						color: "var(--gray-800)",
						backgroundColor: "transparent",
						backgroundClip: "padding-box",
						boxSizing: "border-box",
						transition:
							"border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
						borderRadius: 8,
						borderWidth: 1,
						borderStyle: "solid",
						borderColor: state.isFocused
							? "var(--primary-600)"
							: "var(--gray-200)",
						boxShadow: state.isFocused
							? "0px 0px 0px 1px var(--green-600)"
							: undefined,
						outline: state.isFocused ? 0 : undefined,
						...style,
					}),
					placeholder: (baseStyles, props) => ({
						...baseStyles,
						fontSize: placeholderStyle?.fontSize ?? 14,
						marginLeft: placeholderStyle?.marginLeft,
					}),
					container: (baseStyles, props) => ({
						...baseStyles,
						width: style?.width ?? 200,
					}),
					indicatorsContainer: (baseStyles, props) => ({
						...baseStyles,
						marginTop: -1.8,
					}),
					valueContainer: (baseStyles, props) => ({
						...baseStyles,
						marginTop: valueContainerStyle?.marginTop ?? -4.3,
						marginLeft: valueContainerStyle?.marginLeft,
					}),
				}}
			/>
		</div>
	);
};

export { Select };
