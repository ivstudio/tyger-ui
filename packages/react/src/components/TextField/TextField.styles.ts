import styled, { css } from 'styled-components';

import { spacing } from '../../../../system';
import { TextFieldBaseProps } from '../TextField/TextField.types';

// Define the spacing of the textfields
export const textFieldSpacing = {
    sm: `${spacing[4]} ${spacing[12]}`,
    md: `${spacing[8]} ${spacing[12]}`,
    lg: `${spacing[12]} ${spacing[16]}`,
};

// Define the spacing of the textfield adornments
export const adornmentSpacing = {
    start: {
        sm: `${spacing[4]} ${spacing[12]} ${spacing[4]} ${spacing[24]}`,
        md: `${spacing[8]} ${spacing[12]} ${spacing[8]} ${spacing[24]}`,
        lg: `${spacing[12]} ${spacing[16]} ${spacing[12]} ${spacing[40]}`,
    },
    end: {
        sm: `${spacing[4]} ${spacing[24]} ${spacing[4]} ${spacing[12]}`,
        md: `${spacing[8]} ${spacing[24]} ${spacing[8]} ${spacing[12]}`,
        lg: `${spacing[12]} ${spacing[40]} ${spacing[12]} ${spacing[16]}`,
    },
};

// Define the size of the textfield adornments
export const adornmentSize = {
    sm: spacing[24],
    md: spacing[24],
    lg: spacing[32],
};

// Define the base styles for inputs and textareas
export const textFieldBase = css<TextFieldBaseProps>`
    border-radius: 4px;
    letter-spacing: inherit;
    box-sizing: border-box;
    display: block;
    outline: none;
    margin: 0;
    width: 100%;
    background: ${({ theme: { textfield } }) => `${textfield.backgroundColor}`};
    font-size: ${({ theme: { fontSize } }) => `${fontSize[1]}`};
    line-height: ${({ theme }) => theme.lineHeight.lg};

    // Disable pointer events for read-only textfields
    ${({ readOnly }) => readOnly && 'pointer-events: none'};

    // Set border color and text color based on theme
    border-color: ${({ theme: { textfield } }) => `${textfield.borderColor}`};
    border-width: 1px;
    border-style: solid;

    // Set color based on theme
    color: ${({ theme: { text } }) => `${text.primary}`};
    &::placeholder {
        color: ${({ theme: { text } }) => `${text.placeholder}`};
    }

    // Set focus styles
    &:focus {
        outline: ${({ theme: { textfield } }) =>
            `1px solid ${textfield.focus.borderColor}`};
        border-color: ${({ theme: { textfield } }) =>
            `${textfield.focus.borderColor}`};
    }

    // Set styles for textfields with errors
    ${({ error, theme: { text } }) => {
        if (error) {
            return css`
                border-color: ${text.error};

                &:focus {
                    outline: 1px solid ${text.error};
                    border-color: ${text.error};
                }
            `;
        }
    }}

    // Set styles for disabled textfields 
    ${({ disabled, theme: { text } }) => {
        if (disabled) {
            return css`
                border-color: ${text.disabled};
                color: ${text.disabled};
            `;
        }
    }}
`;

// Define the fieldset
export const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;
`;
