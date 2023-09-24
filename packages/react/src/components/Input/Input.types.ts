import {
    TextFieldBaseProps,
    TextFieldSizes,
} from '../TextField/TextField.types';

export interface InputProps
    extends TextFieldBaseProps,
        Omit<React.ComponentProps<'input'>, 'size'> {
    size?: TextFieldSizes;
    helperText?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}

export interface InputComponentProps extends TextFieldBaseProps {
    sizeInput: TextFieldSizes;
    startAdornment: boolean;
    endAdornment: boolean;
}

export type ContainerProps = {
    hasAdornment: boolean;
    children: React.ReactNode;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
};
