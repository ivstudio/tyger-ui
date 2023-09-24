import { forwardRef } from 'react';

import HelperText from '../HelperText/HelperText';
import Label from '../Label';
import { Fieldset, TextareaComponent } from './Textarea.styles';
import { TextareaProps } from './Textarea.types';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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

                <TextareaComponent
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

Textarea.displayName = 'Textarea';
export default Textarea;
