import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div 
      className={`container-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

