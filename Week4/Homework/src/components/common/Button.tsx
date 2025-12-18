import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  `
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-colors duration-200
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)]
    disabled:opacity-50 disabled:pointer-events-none
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-[var(--color-primary)]
          text-white
          hover:bg-[var(--color-primary-hover)]
          active:bg-[var(--color-primary-dark)]
        `,

        secondary: `
          bg-[var(--color-muted)]
          text-[var(--color-foreground)]
          hover:bg-[oklch(95%_0_0)]
          active:bg-[oklch(92%_0_0)]
        `,

        outline: `
          border border-[var(--color-primary)]
          text-[var(--color-primary)]
          hover:bg-[var(--color-primary-light)]
        `,

        danger: `
          bg-[var(--color-danger)]
          text-white
          hover:bg-[var(--color-danger-dark)]
        `,
      },

      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
      },

      fullWidth: {
        true: 'w-full',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  className,
  variant,
  size,
  fullWidth,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  );
};

export { Button };
