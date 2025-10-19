"use client";

type MobileFABProps = {
	onClick?: () => void;
	ariaLabel?: string;
	icon: React.ReactNode;
};

export default function MobileFAB({
	onClick,
	ariaLabel,
	icon,
}: MobileFABProps) {
	function handleClick() {
		if (onClick) return onClick();
	}

	return (
		<button
			type="button"
			aria-label={ariaLabel}
			onClick={handleClick}
			style={{ backgroundColor: "#f2eceb", color: "var(--color-primary)" }}
			className="/* respect iOS safe area: */ fixed right-4 bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)] z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 active:scale-95 md:hidden "
		>
			{icon}
		</button>
	);
}
