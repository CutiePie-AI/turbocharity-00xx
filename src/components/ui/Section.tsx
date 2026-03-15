import { ReactNode } from "react";
import Container from "@/components/Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  "aria-label"?: string;
}

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
