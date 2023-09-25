import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import { TextareaProps } from '../Textarea/Textarea.types';
import { textFieldBase, textFieldSpacing } from '../TextField/TextField.styles';

export const TextareaComponentAutosize = styled(
    TextareaAutosize
)<TextareaProps>`
    ${textFieldBase};
    resize: none;
    padding: ${({ size = 'lg' }) => textFieldSpacing[size]};
`;
