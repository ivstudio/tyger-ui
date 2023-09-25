'use client';

import { forwardRef } from 'react';

import HelperText from '../HelperText/HelperText';
import Label from '../Label';
import { Fieldset, InputComponent } from './Input.styles';
import { InputProps } from './Input.types';
import InputContainer from './InputContainer';

const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, forwardedRef) => {
        const {
            size = 'lg',
            id,
            error,
            helperText,
            label,
            required = false,
            disabled = false,
            startAdornment = undefined,
            endAdornment = undefined,
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
                <InputContainer
                    size={size}
                    hasAdornment={!!startAdornment || !!endAdornment}
                    startAdornment={startAdornment}
                    endAdornment={endAdornment}
                >
                    <InputComponent
                        {...baseProps}
                        ref={forwardedRef}
                        id={id}
                        error={error}
                        aria-required={required}
                        aria-invalid={error}
                        sizeInput={size}
                        disabled={disabled}
                        startAdornment={!!startAdornment}
                        endAdornment={!!endAdornment}
                    />
                </InputContainer>
                {helperText != null && helperText !== '' && (
                    <HelperText error={error}>{helperText}</HelperText>
                )}
            </Fieldset>
        );
    }
);

Input.displayName = 'Input';
export default Input;
