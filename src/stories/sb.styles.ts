import styled from 'styled-components';

export const SBList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        margin-bottom: 12px;
        button:not(:last-child) {
            margin-right: 8px;
        }
    }
`;
