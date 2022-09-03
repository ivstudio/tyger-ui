import { IAppBarRoot } from '../AppBar.types';
import { AppBarAnimatedRoot } from './AppBarAnimated.styles';
import useScrollDirection from './useScrollDirection';

const AppBarAnimated = ({ children, boxShadow = false }: IAppBarRoot) => {
    const { isVisible } = useScrollDirection();
    return (
        <>
            <AppBarAnimatedRoot isVisible={isVisible} boxShadow={boxShadow}>
                {children}
            </AppBarAnimatedRoot>
        </>
    );
};

export default AppBarAnimated;
