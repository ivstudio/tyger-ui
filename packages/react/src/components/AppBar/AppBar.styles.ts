import { device } from '@tyger-ui/system';
import styled from 'styled-components';

const shadow = 'rgba(0, 0, 0, 0.1) 0px 20px 40px 0px';

export const AppBarBase = styled.header<{
    boxShadow: boolean;
    position: 'fixed' | 'static' | 'sticky';
    dense: boolean;
}>`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    z-index: ${({ theme: { zIndex } }) => zIndex.appBar};
    background-color: ${({ theme: { paper } }) => paper};
    color: ${({ theme: { text } }) => text.primary};
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
        padding: ${({ theme: { spacing }, dense }) =>
            `0 ${dense ? spacing['16'] : spacing['32']}`};
    }
`;
