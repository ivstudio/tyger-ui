'use client';

import { forwardRef } from 'react';

import { InputComponent } from './Input.styles';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
    (props, forwardedRef) => {
        const { size = 'md', ...baseProps } = props;

        return (
            <InputComponent
                {...baseProps}
                ref={forwardedRef}
                sizeInput={size}
            />
        );
    }
);

Input.displayName = 'Input';
export default Input;
