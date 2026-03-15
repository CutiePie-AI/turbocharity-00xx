import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export default function Card({
  children,
  className = "",
  hover = false,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={[
        "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm",
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
