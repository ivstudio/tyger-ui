import { forwardRef } from 'react';

import HelperText from '../HelperText/HelperText';
import Label from '../Label';
import { Fieldset } from '../Textarea/Textarea.styles';
import { TextAreaAutosizeProps } from '../Textarea/Textarea.types';
import { TextareaComponentAutosize } from './TextareaAutosize.styles';

const TextareaAutosize = forwardRef<HTMLTextAreaElement, TextAreaAutosizeProps>(
    (props, forwardedRef) => {
        const {
            size = 'lg',
            id,
            error,
            helperText,
            required = false,
            disabled = false,
            className,
            label,
            ...baseProps
        } = props;
        return (
            <Fieldset>
                {label != null && label !== '' && (
                    <Label
                        htmlFor={id}
                        required={required}
                        disabled={disabled}
                        size={size}
                    >
                        {label}
                    </Label>
                )}
                <TextareaComponentAutosize
                    {...baseProps}
                    ref={forwardedRef}
                    id={id}
                    error={error}
                    aria-required={required}
                    aria-invalid={error}
                    size={size}
                    disabled={disabled}
                    className={className}
                />
                {error && <HelperText error>{helperText}</HelperText>}
            </Fieldset>
        );
    }
);
TextareaAutosize.displayName = 'TextareaAutosize';
export default TextareaAutosize;
