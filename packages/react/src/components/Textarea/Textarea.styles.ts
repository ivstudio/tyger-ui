import styled from 'styled-components';

import { textFieldBase, textFieldSpacing } from '../TextField/TextField.styles';
import { TextareaProps } from './Textarea.types';

export const TextareaComponent = styled.textarea.attrs({
    novalidate: true,
})<TextareaProps>`
    /* Base styles for all text fields */
    ${textFieldBase};

    /* Set spacing based on textarea */
    padding: ${({ size = 'lg' }) => textFieldSpacing[size]};

    resize: none;
`;

// Define the fieldset
export const Fieldset = styled.fieldset`
    border: none;
    padding: 0;
    margin: 0;
`;
