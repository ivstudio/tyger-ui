'use client';
import styled from 'styled-components';

import { AppBarRootProps } from '../AppBar/AppBar.types';
import useHideOnScroll from './useHideOnScroll';

interface HideOnScrollRootProps {
    isVisible: boolean;
}

const HideOnScrollRoot = styled.div<HideOnScrollRootProps>`
    will-change: top;
    position: sticky;
    top: ${({ isVisible }) => (isVisible ? '0' : '-150px')};
    transition: top 0.75s linear;
`;

const HideOnScroll = ({ children }: AppBarRootProps) => {
    const { isVisible } = useHideOnScroll();
    return (
        <HideOnScrollRoot isVisible={isVisible}>{children}</HideOnScrollRoot>
    );
};

export default HideOnScroll;
