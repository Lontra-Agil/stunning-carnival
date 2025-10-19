import type { Icon } from "@/types/icon-props-type";

const MonitorIcon = ({ style }: Icon) => {
  return (
    <svg
      style={{ ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M5 4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2h3a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm9 14v1h-4v-1h4Zm5-2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export { MonitorIcon };
