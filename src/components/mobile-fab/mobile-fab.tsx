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
      aria-label={ariaLabel}
      onClick={handleClick}
      style={{ backgroundColor: "#f2eceb", color: "var(--color-primary)" }}
      className="
        md:hidden
        fixed z-50
        right-4 
        /* respect iOS safe area: */
        bottom-[calc(env(safe-area-inset-bottom,0px)+1rem)]
        h-14 w-14 rounded-full
        shadow-lg
        flex items-center justify-center
        active:scale-95 transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black
      "
    >
      {icon}
    </button>
  );
}
