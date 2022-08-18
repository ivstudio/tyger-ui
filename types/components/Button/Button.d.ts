import * as React from 'react';
export declare type TButtonVariant = 'filled' | 'outlined' | 'text';
export declare type TSize = 'sm' | 'md' | 'lg';
export interface IButton {
    id?: string;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    size?: TSize;
    fullWidth?: boolean;
    children?: React.ReactNode;
    variant?: TButtonVariant;
    rounded?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}
declare const Button: ({ id, children, type, disabled, size, className, fullWidth, rounded, variant, startIcon, endIcon, ...baseProps }: IButton) => JSX.Element;
export default Button;
