interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${className}`.trim()}
    >
      {children}
    </div>
  );
}
