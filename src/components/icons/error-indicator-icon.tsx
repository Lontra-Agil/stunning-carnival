import type { Icon } from "@/types/icon-props-type";

const ErrorIndicatorIcon = ({ style }: Icon) => {
	return (
		<svg
			style={{ ...style }}
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="none"
			viewBox="0 0 16 16"
			aria-label="Error indicator"
			role="img"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334z"
				fill="#D00E17"
				stroke="#D00E17"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 4.583a.75.75 0 0 1 .75.75V8a.75.75 0 0 1-1.5 0V5.333a.75.75 0 0 1 .75-.75z"
				fill="#fff"
			/>
			<path
				d="M8.667 10.667a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0z"
				fill="#fff"
			/>
		</svg>
	);
};

export { ErrorIndicatorIcon };
