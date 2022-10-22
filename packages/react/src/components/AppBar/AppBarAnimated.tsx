import { IAppBarRoot } from './AppBar';
import useScrollDirection from './useScrollDirection';

import styled from 'styled-components';

import { AppBarRoot } from './AppBar';

interface IAppBarAnimatedRoot {
    isVisible: boolean;
}

const AppBarAnimatedRoot = styled(AppBarRoot)<IAppBarAnimatedRoot>`
    will-change: top;
    position: sticky;
    top: ${({ isVisible }) => (isVisible ? '0' : '-150px')};
    transition: top 0.75s linear;
`;

const AppBarAnimated = ({ children, boxShadow = false }: IAppBarRoot) => {
    const { isVisible } = useScrollDirection();
    return (
        <>
            <AppBarAnimatedRoot
                isVisible={isVisible}
                boxShadow={boxShadow}
                position="static"
            >
                {children}
            </AppBarAnimatedRoot>
        </>
    );
};

export default AppBarAnimated;
