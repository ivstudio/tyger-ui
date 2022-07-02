export type TButtonVariant = 'primary' | 'outlined' | 'text';

export interface IButton {
    id?: string;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    size?: TSize;
    fullWidth?: boolean;
    children: React.ReactNode | React.ReactNode[];
    variant?: TButtonVariant;
    rounded?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export type TSize = 'sm' | 'md' | 'lg';
