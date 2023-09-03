export type ButtonVariant = 'filled' | 'outlined' | 'text';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonProps {
    id?: string;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    size?: ButtonSizes;
    fullWidth?: boolean;
    children?: React.ReactNode;
    variant?: ButtonVariant;
    rounded?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonRootProps = {
    size: ButtonSizes;
    fullWidth: boolean;
    variant: ButtonVariant;
    rounded: boolean;
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
};
