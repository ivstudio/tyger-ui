import styled from 'styled-components';

import { textFieldBase, textFieldSpacing } from '../TextField/TextField.styles';
import { InputComponentProps } from './Input.types';

export const textFieldHeight = {
    sm: 32,
    md: 40,
    lg: 48,
};

export const InputComponent = styled.input.attrs({
    novalidate: true,
})<InputComponentProps>`
    /* Base styles for all text fields */
    ${textFieldBase};

    /* Fix for number inputs in Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }

    /* Set spacing based on input size */
    padding: ${({ sizeInput, startAdornment, endAdornment }) => {
        // if (startAdornment) {
        //     return `0 ${textFieldSpacing[sizeInput]} 0 ${textFieldSpacing[sizeInput]}`;
        // }

        // if (endAdornment) {
        //     return `0 ${textFieldSpacing[sizeInput]} 0 ${textFieldSpacing[sizeInput]}`;
        // }

        return textFieldSpacing[sizeInput];
    }};
    height: ${({ sizeInput }) => textFieldHeight[sizeInput]};
`;

// Define the fieldset
export const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;
`;

export const InputContainerComponent = styled.div`
    position: relative;
    height: 100%;
`;

export const Adornment = styled.div<{ start?: boolean; end?: boolean }>`
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;

    ${({ start }) =>
        start && {
            left: 0,
        }};

    ${({ end }) =>
        end && {
            right: 0,
        }};
`;
