import styled, { css } from 'styled-components';

import { spacing } from '../../../../system';
import { InputComponentProps } from './Input.types';

const inputSpacing = {
    sm: {
        padding: `${spacing[4]} ${spacing[12]}`,
    },

    md: {
        padding: `${spacing[8]} ${spacing[12]}`,
    },

    lg: {
        padding: `${spacing[12]} ${spacing[16]}`,
    },
};

const TextFieldBase = css`
    border-radius: 4px;
    letter-spacing: inherit;
    box-sizing: border-box;
    border: none;
    display: block;
    outline: none;
    margin: 0;
    width: 100%;
    background: none;
`;

export const InputComponent = styled.input<InputComponentProps>`
    /* Base styles for all text fields */
    ${TextFieldBase};

    /* Fix for number inputs in Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }

    /* Disable pointer events for read-only inputs */
    ${({ readOnly }) => readOnly && 'pointer-events: none'};

    /* Set padding based on input size */
    ${({ sizeInput }) => inputSpacing[sizeInput]};

    /* Set border color and text color based on theme */
    border: ${({ theme: { input } }) => `1px solid ${input.borderColor}`};
    color: ${({ theme: { input } }) => `${input.color}`};

    /* Set placeholder color based on theme */
    &::placeholder {
        color: ${({ theme: { input } }) => `${input.placeholder}`};
    }

    /* Set styles for inputs with errors */
    ${({ error, theme: { input } }) => {
        if (error) {
            return css`
                border-color: ${input.error.color};
            `;
        }
    }}

    /* Set styles for disabled inputs */
    ${({ disabled, theme: { input } }) => {
        if (disabled) {
            return css`
                border-color: ${input.disabled.backgroundColor};
                color: ${input.disabled.color};
            `;
        }
    }}
`;

InputComponent.defaultProps = {
    sizeInput: 'md',
    readOnly: false,
    disabled: false,
    error: false,
};
