import styled from 'styled-components';

import { AppBarRoot } from '../AppBar';

interface IAppBarAnimatedRoot {
    isVisible: boolean;
}

export const AppBarAnimatedRoot = styled(AppBarRoot)<IAppBarAnimatedRoot>`
    will-change: top;
    position: sticky;
    top: ${({ isVisible }) => (isVisible ? '0' : '-150px')};
    transition: top 0.75s linear;
`;
