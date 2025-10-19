"use client"

export interface LoadingIndicatorProps {
    color?: string;
    size?: number;
}

const LoadingIndicator = ({ color, size }: LoadingIndicatorProps) => {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
            className="ld ld-ring ld-spin"
        ></div>
    );
};

export { LoadingIndicator };
