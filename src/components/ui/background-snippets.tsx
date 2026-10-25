import React from "react";

export const Component = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
} = {}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 -z-10 h-full w-full pointer-events-none select-none ${className || ""}`}
      style={{
        background:
          "linear-gradient(180deg, #eddcfc 0%, #f5edfd 25%, #faf5fe 55%, #fbf9ff 80%, rgba(251, 249, 255, 0.5) 100%)",
        ...style,
      }}
    />
  );
};

export const BackgroundSnippets = Component;
export const BackgroundSnipped = Component;
export default Component;
