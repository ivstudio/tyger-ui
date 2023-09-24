export type TextFieldSizes = 'sm' | 'md' | 'lg';

export interface TextFieldBaseProps {
    error?: boolean;
    className?: string;
    size?: TextFieldSizes;
    readOnly?: boolean;
    disabled?: boolean;
    label?: string;
    required?: boolean;
}
