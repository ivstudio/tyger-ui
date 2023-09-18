'use client';

import { forwardRef } from 'react';

import Label from '../Label';
import { Fieldset, HelperText, InputComponent } from './Input.styles';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, forwardedRef) => {
        const {
            size = 'md',
            id,
            error,
            helperText,
            label,
            required = false,
            disabled = false,
            ...baseProps
        } = props;

        return (
            <Fieldset tag="fieldset" border={false}>
                {label && (
                    <Label htmlFor={id} required={required} disabled={disabled}>
                        {label}
                    </Label>
                )}
                <InputComponent
                    {...baseProps}
                    ref={forwardedRef}
                    id={id}
                    error={error}
                    aria-required={required}
                    aria-invalid={error}
                    sizeInput={size}
                    disabled={disabled}
                />
                {error && (
                    <HelperText mt="4" mb="0">
                        {helperText}
                    </HelperText>
                )}
            </Fieldset>
        );
    }
);

Input.displayName = 'Input';
export default Input;
