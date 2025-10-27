import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className = '', ...props }: SectionProps) {
  return (
    <section 
      className={className}
      {...props}
    >
      {children}
    </section>
  );
}

