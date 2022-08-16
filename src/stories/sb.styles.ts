import styled from 'styled-components';
import Box from '../components/Box';

export const SBContainer = styled.div`
    margin: 0;
    padding: 0;

    li {
        list-style: none;
        margin-bottom: 12px;
        button:not(:last-child) {
            margin-right: 8px;
        }
    }
`;

export const SBContainerInline = styled(Box)`
    > * {
        margin-right: 8px;
    }

    &:not(:last-child) {
        margin-right: 8px;
    }
`;
