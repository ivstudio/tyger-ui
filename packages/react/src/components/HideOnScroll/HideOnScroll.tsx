import styled from 'styled-components';

import { IAppBarRoot } from '../AppBar/AppBar';
import useHideOnScroll from './useHideOnScroll';

interface IHideOnScrollRoot {
    isVisible: boolean;
}

export const HideOnScrollRoot = styled.div<IHideOnScrollRoot>`
    will-change: top;
    position: sticky;
    top: ${({ isVisible }) => (isVisible ? '0' : '-150px')};
    transition: top 0.75s linear;
`;

const HideOnScroll = ({ children }: IAppBarRoot) => {
    const { isVisible } = useHideOnScroll();
    return (
        <HideOnScrollRoot isVisible={isVisible}>{children}</HideOnScrollRoot>
    );
};

export default HideOnScroll;
