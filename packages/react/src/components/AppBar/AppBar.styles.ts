import { device } from '@tyger-ui/system/src/mediaQueries';
import styled from 'styled-components';

const shadow = 'rgba(0, 0, 0, 0.1) 0px 20px 40px 0px';

export const AppBarBase = styled.header<{
    boxShadow: boolean;
    position: 'fixed' | 'static' | 'sticky';
}>`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    background-color: ${({ theme: { appBar } }) => appBar.backgroundColor};
    padding: ${({ theme: { spacing } }) => `0 ${spacing['16']}`};
    box-shadow: ${({ boxShadow }) => (boxShadow ? shadow : 'none')};
    ${({ position }) => {
        switch (position) {
            case 'fixed':
                return {
                    position: 'fixed',
                    top: 0,
                    flexShrink: 0,
                    zIndex: 1100,
                    left: 'auto',
                    right: 0,
                };
            case 'sticky':
                return { position: 'sticky', top: 0 };
            default:
                return {
                    position: 'static',
                };
        }
    }};

    > * {
        margin: 0;
    }

    @media ${device.md} {
        padding: ${({ theme: { spacing } }) => `0 ${spacing['32']}`};
    }
`;
