import { AppBarRoot } from './AppBar.styles';
import { IAppBar } from './AppBar.types';
import AppBarAnimated from './AppBarAnimated';

const AppBar = ({
    children,
    hideOnScroll = false,
    boxShadow = false,
    position = 'static',
}: IAppBar) => {
    const props = {
        boxShadow: boxShadow,
        position: position,
    };

    if (hideOnScroll) {
        return <AppBarAnimated {...props}>{children}</AppBarAnimated>;
    }

    return <AppBarRoot {...props}>{children}</AppBarRoot>;
};

export default AppBar;
