import { AppBarRoot } from './AppBar.styles';
import { IAppBar } from './AppBar.types';
import AppBarAnimated from './AppBarAnimated';

const AppBar = ({
    children,
    hideOnScroll = false,
    boxShadow = false,
}: IAppBar) => {
    if (hideOnScroll) {
        return (
            <AppBarAnimated boxShadow={boxShadow}>{children}</AppBarAnimated>
        );
    }

    return <AppBarRoot boxShadow={boxShadow}>{children}</AppBarRoot>;
};

export default AppBar;
