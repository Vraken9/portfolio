export const Component = ({ className }: { className?: string } = {}) => {
  return (
    <div
      className={`absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] ${className || ""}`}
      style={{
        background:
          "radial-gradient(125% 100% at 50% 0%, #ffffff 30%, #ebdffc 55%, #b794f6 80%, #6333ee 100%)",
      }}
    />
  );
};

export const BackgroundSnippets = Component;
export const BackgroundSnipped = Component;
export default Component;
