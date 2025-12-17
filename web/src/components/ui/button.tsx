import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={twMerge(
                    clsx(
                        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                        {
                            'bg-brand-teal text-white hover:bg-teal-600': variant === 'primary',
                            'bg-brand-navy text-white hover:bg-slate-800': variant === 'secondary',
                            'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/10': variant === 'outline',
                            'text-foreground hover:bg-black/5 dark:hover:bg-white/5': variant === 'ghost',
                            'h-9 px-4 text-sm': size === 'sm',
                            'h-11 px-6 text-base': size === 'md',
                            'h-14 px-8 text-lg': size === 'lg',
                        },
                        className
                    )
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
