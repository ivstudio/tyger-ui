'use client';
import { AppBarRootProps } from './AppBar.d';
import { AppBarBase } from './AppBar.styles';

const AppBar = ({
    children,
    boxShadow = false,
    position = 'static',
    dense = false,
}: AppBarRootProps) => {
    return (
        <AppBarBase position={position} boxShadow={boxShadow} dense={dense}>
            {children}
        </AppBarBase>
    );
};

export default AppBar;
