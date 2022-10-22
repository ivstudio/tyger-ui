import { IAppBarRoot, AppBarRoot } from '..';
import useScrollDirection from './useScrollDirection';

import styled from 'styled-components';

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
