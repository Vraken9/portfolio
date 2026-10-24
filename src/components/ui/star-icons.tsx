import React from "react";

interface StarProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export function Star12({ size = 28, color = "currentColor", className, ...props }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        fill={color}
        d="m100 5 3.635 86.223 63.54-58.398-58.398 63.54L195 100l-86.223 3.635 58.398 63.54-63.54-58.398L100 195l-3.635-86.223-63.54 58.398 58.398-63.54L5 100l86.223-3.635-58.398-63.54 63.54 58.398z"
      />
    </svg>
  );
}

export function Star15({ size = 28, color = "currentColor", className, ...props }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        fill={color}
        d="M95.713 9.378a6 6 0 0 1 8.574 0l9.515 9.717a6 6 0 0 0 6.496 1.381l12.645-5.007a6 6 0 0 1 7.833 3.487l4.74 12.748a6 6 0 0 0 5.372 3.903l13.589.57a6 6 0 0 1 5.737 6.371l-.855 13.573a6 6 0 0 0 3.321 5.752l12.182 6.046a6 6 0 0 1 2.649 8.154l-6.301 12.053a6 6 0 0 0 .694 6.604l8.67 10.479a6 6 0 0 1-.897 8.527l-10.658 8.447a6 6 0 0 0-2.052 6.316l3.657 13.099a6 6 0 0 1-4.287 7.426l-13.173 3.381a6 6 0 0 0-4.443 4.936l-1.987 13.454a6 6 0 0 1-6.936 5.04l-13.41-2.269a6 6 0 0 0-6.066 2.701l-7.287 11.483a6 6 0 0 1-8.387 1.783l-11.327-7.527a6 6 0 0 0-6.641 0l-11.328 7.527a6 6 0 0 1-8.387-1.783l-7.287-11.483a6 6 0 0 0-6.066-2.701l-13.41 2.269a6 6 0 0 1-6.936-5.04l-1.987-13.454a6 6 0 0 0-4.443-4.936l-13.173-3.381a6 6 0 0 1-4.287-7.426l3.657-13.099a6 6 0 0 0-2.052-6.316l-10.658-8.447a6 6 0 0 1-.897-8.527l8.67-10.479a6 6 0 0 0 .694-6.604l-6.301-12.053a6 6 0 0 1 2.65-8.154l12.181-6.046a6 6 0 0 0 3.32-5.752l-.854-13.573a6 6 0 0 1 5.737-6.372l13.588-.569a6 6 0 0 0 5.373-3.903l4.74-12.748a6 6 0 0 1 7.833-3.487l12.645 5.007a6 6 0 0 0 6.496-1.38z"
      />
    </svg>
  );
}

export function Star28({ size = 28, color = "currentColor", className, ...props }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M121 5C96.7 5 77 24.7 77 49v29H5c0 24.301 19.7 44 44 44h28v73c24.301 0 44-19.699 44-44v-29h74c0-24.3-19.699-44-44-44h-30z"
      />
    </svg>
  );
}

export function Star3({ size = 28, color = "currentColor", className, ...props }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        fill={color}
        d="m100 5 3.277 63.822 16.475-61.746-10.064 63.108 28.952-56.97-22.965 59.636 40.165-49.707-34.863 53.56 49.622-40.27-45.236 45.14L182.272 52.5 128.64 87.249l61.71-16.606-59.685 22.839 63.815-3.412-63.13 9.93 63.13 9.93-63.815-3.412 59.685 22.839-61.71-16.606 53.632 34.749-56.909-29.073 45.236 45.14-49.622-40.269 34.863 53.559-40.165-49.707 22.965 59.637-28.952-56.971 10.064 63.108-16.475-61.746L100 195l-3.277-63.822-16.475 61.746 10.064-63.108-28.952 56.971 22.965-59.637-40.165 49.707 34.863-53.559L29.4 163.567l45.236-45.14-56.91 29.073 53.633-34.749-61.71 16.606 59.685-22.839L5.52 109.93 68.65 100 5.52 90.07l63.815 3.412L9.65 70.643 71.36 87.25 17.728 52.5l56.91 29.073L29.4 36.433l49.622 40.27-34.863-53.56L84.325 72.85 61.36 13.213l28.952 56.971L80.248 7.076l16.475 61.746z"
      />
    </svg>
  );
}

export function Star40({ size = 28, color = "currentColor", className, ...props }: StarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.5 5h19v78.546l68.022-39.273 9.5 16.454L119 100l68.022 39.273-9.5 16.454-68.022-39.273V195h-19v-78.546l-68.023 39.273-9.5-16.454L81 100 12.977 60.727l9.5-16.454L90.5 83.546z"
      />
    </svg>
  );
}
