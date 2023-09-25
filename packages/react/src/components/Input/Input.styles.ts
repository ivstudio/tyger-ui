import styled from 'styled-components';

import {
    adornmentSize,
    adornmentSpacing,
    textFieldBase,
    textFieldSpacing,
} from '../TextField/TextField.styles';
import { AdornmentProps, InputComponentProps } from './Input.types';

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
        if (startAdornment) {
            return adornmentSpacing.start[sizeInput];
        }

        if (endAdornment) {
            return adornmentSpacing.end[sizeInput];
        }

        return textFieldSpacing[sizeInput];
    }};
    height: ${({ sizeInput }) => textFieldHeight[sizeInput]};
`;

// Define the fieldset
export const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export const InputContainerComponent = styled.div`
    position: relative;
    height: 100%;
`;

export const Adornment = styled.div<AdornmentProps>`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: ${({ size = 'lg' }) => size && adornmentSize[size]};
    left: ${({ start, theme: { spacing } }) => start && spacing['8']};
    right: ${({ end, theme: { spacing } }) => end && spacing['8']};
    > svg {
        color: ${({ theme: { text } }) => `${text.label}`};
    }
`;
