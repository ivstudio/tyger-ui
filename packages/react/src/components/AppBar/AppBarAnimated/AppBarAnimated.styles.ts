import styled from 'styled-components';

import { AppBarRoot } from '../AppBar.styles';

export const AppBarAnimatedRoot = styled(AppBarRoot)<{
    isVisible: boolean;
}>`
    will-change: top;
    position: sticky;
    top: ${({ isVisible }) => (isVisible ? '0' : '-150px')};
    transition: top 0.75s linear;
`;
