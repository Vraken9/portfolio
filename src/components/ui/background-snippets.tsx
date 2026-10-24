import React from "react";

export const Component = ({ className }: { className?: string } = {}) => {
  return (
    <div
      className={`absolute inset-0 -z-10 h-full w-full pointer-events-none select-none bg-white ${className || ""}`}
      style={{
        background:
          "radial-gradient(135% 100% at 50% 100%, #ebdffc 0%, #f7f3fe 42%, #ffffff 82%)",
      }}
    />
  );
};

export const BackgroundSnippets = Component;
export const BackgroundSnipped = Component;
export default Component;
