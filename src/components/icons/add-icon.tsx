import type { Icon } from "@/types/icon-props-type";

const AddIcon = ({ style }: Icon) => {
	return (
		<svg
			style={{ ...style }}
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			fill="currentColor"
			viewBox="0 0 24 24"
			className="ml-[-3px]"
			aria-label="Add icon"
			role="img"
		>
			<path
				fillRule="evenodd"
				d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export { AddIcon };
