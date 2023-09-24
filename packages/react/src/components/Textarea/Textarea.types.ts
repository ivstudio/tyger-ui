import type { TextareaAutosizeProps } from 'react-textarea-autosize';

import {
    TextFieldBaseProps,
    TextFieldSizes,
} from '../TextField/TextField.types';

export interface TextareaProps
    extends TextFieldBaseProps,
        Omit<React.ComponentProps<'textarea'>, 'size'> {
    size?: TextFieldSizes;
    helperText?: string;
}

export interface TextAreaAutosizeProps
    extends Omit<TextareaAutosizeProps, 'size'>,
        TextFieldBaseProps {
    size?: TextFieldSizes;
    helperText?: string;
}
