import styled, { css } from 'styled-components';

import { spacing } from '../../../../system';
import Box from '../Box';
import Typography from '../Typography';
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

export const InputComponent = styled.input.attrs({
    novalidate: true,
})<InputComponentProps>`
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

    &:focus {
        outline: ${({ theme: { input } }) =>
            `1px solid ${input.focus.borderColor}`};
        border-color: ${({ theme: { input } }) => `${input.focus.borderColor}`};
    }

    /* Set styles for inputs with errors */
    ${({ error, theme: { input } }) => {
        if (error) {
            return css`
                border-color: ${input.error.color};

                &:focus {
                    outline: 1px solid ${input.error.color};
                    border-color: ${input.error.color};
                }
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

// Define the Input Label
export const Label = styled.label<{ required?: boolean; disabled?: boolean }>`
    display: block;
    font-size: ${({ theme: { fontSize } }) => `${fontSize[-1]}`};
    margin: ${({ theme: { spacing } }) => `0 0 ${spacing[4]}`};

    &::after {
        content: ${({ required }) => (required ? "'*'" : "''")};
        padding-left: ${({ theme: { spacing } }) => spacing[4]};
    }

    ${({ disabled, theme: { input } }) => {
        if (disabled) {
            return css`
                color: ${input.disabled.color};
            `;
        }
    }}
`;

// Define the Input HelperText
export const HelperText = styled(Typography)`
    color: ${({ theme: { input } }) => `${input.error.color}`};
    font-size: ${({ theme: { fontSize } }) => `${fontSize[-1]}`};
`;

// Define the fieldset
export const Fieldset = styled(Box)`
    border: none;
    padding: 0;
    margin: 0;
`;

InputComponent.defaultProps = {
    sizeInput: 'md',
    readOnly: false,
    disabled: false,
    error: false,
};
