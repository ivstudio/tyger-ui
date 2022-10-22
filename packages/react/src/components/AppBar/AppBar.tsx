import { device } from '@tyger-ui/system/src/mediaQueries';
import styled from 'styled-components';

import { flexCenterAll } from '../../styles';
import AppBarAnimated from './AppBarAnimated';

export type TAppBarPosition = 'fixed' | 'static' | 'sticky';
export interface IAppBarRoot {
    children: React.ReactNode | React.ReactNode[];
    boxShadow?: boolean;
    position?: TAppBarPosition;
    hideOnScroll?: boolean;
}

const shadow = 'rgba(0, 0, 0, 0.1) 0px 20px 40px 0px';

export const AppBarRoot = styled.header<{
    boxShadow: boolean;
    position: TAppBarPosition;
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
            case 'static':
                return { position: 'static', top: 0 };
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

export const BackButton = styled.div`
    ${flexCenterAll};
    color: ${({ theme: { color } }) => color.grey[0]};
    font-weight: 600;
`;

export const BackButtonText = styled.span`
    display: block;
    padding-left: ${({ theme: { spacing } }) => `0 ${spacing['4']}`};
`;

const AppBar = ({
    children,
    hideOnScroll = false,
    boxShadow = false,
    position = 'static',
}: IAppBarRoot) => {
    if (hideOnScroll) {
        return (
            <AppBarAnimated position={position} boxShadow={boxShadow}>
                {children}
            </AppBarAnimated>
        );
    }

    return (
        <AppBarRoot position={position} boxShadow={boxShadow}>
            {children}
        </AppBarRoot>
    );
};

export default AppBar;
