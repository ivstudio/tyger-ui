import styled from 'styled-components';
import Box from '../components/Box';

export const SBContainer = styled(Box)`
    margin: 0;
    padding: 0;
`;

export const SBContainerInline = styled(Box)`
    background: ${({ theme }) => theme.paper};
    /* > * {
        margin-right: 8px;
    } */

    &:not(:last-child) {
        margin-right: 8px;
    }

    border-radius: 12px;

    /* li {
        list-style: none;
        margin-bottom: 12px;
        button:not(:last-child) {
            margin-right: 8px;
        }
    } */
`;
