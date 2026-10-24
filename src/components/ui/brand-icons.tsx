import React from "react";

interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const BrandIcons = {
  // Python
  Python: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M11.914 2c-5.042 0-4.73 2.186-4.73 2.186l.005 2.266h4.785v.68H5.196s-3.196.363-3.196 4.717c0 4.355 2.784 4.54 2.784 4.54h1.662v-2.33s-.09-2.783 2.723-2.783h4.697s2.632.042 2.632-2.553V4.553S16.956 2 11.914 2zm-2.58 1.488a.86.86 0 11.002 1.72.86.86 0 01-.002-1.72z"
        fill="currentColor"
      />
      <path
        d="M12.086 22c5.042 0 4.73-2.186 4.73-2.186l-.005-2.266h-4.785v-.68h6.778s3.196-.363 3.196-4.717c0-4.355-2.784-4.54-2.784-4.54h-1.662v2.33s.09 2.783-2.723 2.783H10.14s-2.632-.042-2.632 2.553v4.168S7.044 22 12.086 22zm2.58-1.488a.86.86 0 11-.002-1.72.86.86 0 01.002 1.72z"
        fill="currentColor"
      />
    </svg>
  ),

  // LangChain
  LangChain: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="6.5" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M10 12h4m-2-2v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 5.5v3M17.5 5.5v3M6.5 15.5v3M17.5 15.5v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  // OpenAI
  OpenAI: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0010.596 0 6.03 6.03 0 005.4 3.376a5.992 5.992 0 00-3.815 2.79A6.045 6.045 0 001.09 11.23a6.07 6.07 0 00.516 4.911 6.047 6.047 0 006.51 2.9A6.067 6.067 0 0013.404 24a6.03 6.03 0 005.196-3.376 5.994 5.994 0 003.815-2.79 6.046 6.046 0 00-.133-8.013zm-8.878 12.637a4.53 4.53 0 01-2.877-1.037l.156-.089 4.779-2.758a.776.776 0 00.392-.676v-6.736l2.02 1.168a.07.07 0 01.038.052v5.583a4.554 4.554 0 01-4.508 4.493zm-9.742-4.135a4.52 4.52 0 01-.543-3.003l.156.091 4.779 2.76a.792.792 0 00.785 0l5.833-3.369v2.332a.08.08 0 01-.033.065l-4.836 2.791a4.556 4.556 0 01-6.141-1.667zm-1.89-9.52a4.523 4.523 0 012.335-1.966v5.698a.78.78 0 00.392.677l5.834 3.369-2.02 1.168a.078.078 0 01-.072 0L3.483 14.65a4.554 4.554 0 01-1.711-5.848zm16.599 3.013l-5.834-3.37 2.02-1.167a.078.078 0 01.072 0l4.837 2.791a4.553 4.553 0 01-.676 8.243v-5.82a.78.78 0 00-.419-.677zm2.02-3.197a4.527 4.527 0 01-.543 3.004l-.156-.091-4.779-2.76a.79.79 0 00-.784 0L8.14 12.138V9.806a.08.08 0 01.033-.065l4.836-2.792a4.554 4.554 0 016.14 1.668zm-9.39-4.837a4.53 4.53 0 012.877 1.037l-.156.089-4.779 2.759a.777.777 0 00-.392.676v6.736L6.5 15.011a.07.07 0 01-.038-.052V9.376a4.554 4.554 0 014.508-4.494zM12 14.07l-3.585-2.07 3.585-2.07 3.585 2.07L12 14.07z" />
    </svg>
  ),

  // Claude / Anthropic
  Claude: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M17.472 14.382l4.243-2.45-4.243-2.45v4.9zm-4.743 2.738l-4.243 2.45 4.243 2.45v-4.9zm-6.215-3.589L2.27 12l4.243-2.45v4.9zm4.743-2.738l4.243-2.45-4.243-2.45v4.9z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  ),

  // FastAPI
  FastAPI: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.372-12-12-12zm-.586 4.343l5.093 7.029h-4.32l.707 8.285-5.347-7.228h4.08l-.213-8.086z" />
    </svg>
  ),

  // Next.js
  Nextjs: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.632 17.525L9.61 7.2h2.247l5.65 7.472v2.853zm-3.036-6.66l-2.02-2.673H7.8v9.6h2.246v-5.263l2.55 3.336z" />
    </svg>
  ),

  // TypeScript
  TypeScript: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm11.2 12.083H7.553v9.062H5.068v-9.062H.3V9.757h12.025v2.326zm4.845 9.215c-1.5 0-2.76-.374-3.782-1.122l1.199-1.95c.78.539 1.696.81 2.583.81 1.259 0 1.95-.54 1.95-1.32 0-.84-.72-1.17-2.04-1.68-2.04-.78-3.33-1.8-3.33-3.6 0-2.19 1.77-3.81 4.38-3.81 1.35 0 2.52.33 3.42.87l-1.08 1.98c-.69-.45-1.53-.66-2.34-.66-1.14 0-1.74.51-1.74 1.23 0 .75.69 1.08 1.98 1.56 2.19.81 3.39 1.89 3.39 3.75 0 2.4-1.89 3.882-4.59 3.882z" />
    </svg>
  ),

  // React
  React: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),

  // Tailwind CSS
  Tailwind: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C9.536 13.382 8.175 12 5.201 12h.8z" />
    </svg>
  ),

  // PostgreSQL
  PostgreSQL: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M11.968 0A11.97 11.97 0 000 11.968C0 18.579 5.358 23.937 11.968 23.937c6.61 0 11.969-5.358 11.969-11.969A11.97 11.97 0 0011.968 0zm6.059 8.283c-.024.168-.112.551-.239.992a7.198 7.198 0 01-.672 1.56c-.328.536-.728.983-1.127 1.303-.4.32-.784.48-1.127.48a1.2 1.2 0 01-.736-.248c-.208-.16-.36-.376-.464-.632-.104-.256-.168-.536-.184-.816a4.57 4.57 0 01.072-1.072c.072-.36.2-.728.368-1.08.168-.352.368-.68.6-.968.232-.288.488-.528.76-.712.272-.184.552-.304.832-.36.28-.056.552-.048.808.024.256.072.472.208.64.408.168.2.28.456.336.768a3.14 3.14 0 01-.067.853zM6.671 9.77c.216-.48.496-.904.84-1.248.344-.344.728-.592 1.152-.728.424-.136.872-.152 1.32-.048.448.104.872.328 1.248.656.376.328.672.744.88 1.232.208.488.312 1.04.304 1.632a4.4 4.4 0 01-.32 1.656c-.208.512-.512.96-.896 1.328-.384.368-.832.624-1.328.752a3.84 3.84 0 01-1.616-.016c-.52-.144-.976-.416-1.344-.8a4.25 4.25 0 01-.896-1.36 4.96 4.96 0 01-.336-1.696c0-.464.08-.92.24-1.368h.752z" />
    </svg>
  ),

  // Docker
  Docker: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186zm-2.93 0h2.12a.185.185 0 00.184-.186V6.29a.185.185 0 00-.185-.185H5.17a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186zm5.86 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.185-.186H5.17a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.185-.186H2.24a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zM23.987 11.7c-.198-.444-.816-.62-1.572-.444-.198.046-.576.223-.787.352-.397-.733-1.07-1.121-1.782-1.121-1.42 0-2.392 1.31-2.392 3.197 0 .285.026.564.077.834H.185A.186.186 0 000 14.704c.18 1.488.75 2.87 1.636 3.987 1.258 1.585 3.125 2.509 5.258 2.598 4.293.18 8.167-.78 11.517-2.857 2.766-1.71 4.508-4.382 5.576-6.732z" />
    </svg>
  ),

  // Figma
  Figma: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zM4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4zm0-8c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4zm8 0c0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4h-4V0zm0 8h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V8z" />
    </svg>
  ),

  // Framer
  Framer: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  ),

  // LottieFiles
  LottieFiles: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12.012 0C5.378 0 0 5.378 0 12.012c0 6.634 5.378 12.012 12.012 12.012 6.634 0 12.012-5.378 12.012-12.012C24.024 5.378 18.646 0 12.012 0zm5.176 13.916c-.504 1.83-2.02 3.167-3.924 3.328-2.616.22-4.9-1.638-5.18-4.22-.047-.43-.035-.87.035-1.298.504-1.83 2.02-3.167 3.924-3.328 2.616-.22 4.9 1.638 5.18 4.22.047.43.035.87-.035 1.298z" />
    </svg>
  ),

  // Vector DB / Embeddings
  VectorDB: ({ size = 32, className, ...props }: BrandIconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
};
