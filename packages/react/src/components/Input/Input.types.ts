export type InputSizes = 'sm' | 'md' | 'lg';

export interface InputBase {
    error?: boolean;
    className?: string;
    size?: InputSizes;
    readOnly?: boolean;
    disabled?: boolean;
    label?: string;
    required?: boolean;
}

export interface InputProps
    extends InputBase,
        Omit<React.ComponentProps<'input'>, 'size'> {
    size?: InputSizes;
    helperText?: string;
}

export interface InputComponentProps extends InputBase {
    sizeInput: InputSizes;
}
