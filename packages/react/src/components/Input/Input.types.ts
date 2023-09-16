export type InputSizes = 'sm' | 'md' | 'lg';

export interface InputBase {
    error?: boolean;
    className?: string;
    size?: InputSizes;
    readOnly?: boolean;
    disabled?: boolean;
}

export interface InputProps
    extends InputBase,
        Omit<React.ComponentProps<'input'>, 'size'> {
    size?: InputSizes;
}

export interface InputComponentProps extends InputBase {
    sizeInput: InputSizes;
}
