import styled from 'styled-components';

import { device, flexCenterAll } from '../../styles';

const shadow = 'rgba(0, 0, 0, 0.1) 0px 20px 40px 0px';

export const AppBarRoot = styled.header<{
    boxShadow: boolean;
}>`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    background-color: ${({ theme: { bg } }) => bg.appBar};
    padding: ${({ theme: { spacing } }) => `0 ${spacing['16']}`};
    box-shadow: ${({ boxShadow }) => (boxShadow ? shadow : 'none')};

    > * {
        margin: 0;
    }

    @media ${device.md} {
        padding: ${({ theme: { spacing } }) => `0 ${spacing['32']}`};
    }
`;

export const BackButton = styled.div`
    ${flexCenterAll};
    color: ${({ theme: { color } }) => color.grey[0]};
    font-weight: 600;
`;

export const BackButtonText = styled.span`
    display: block;
    padding-left: ${({ theme: { spacing } }) => `0 ${spacing['4']}`};
`;
