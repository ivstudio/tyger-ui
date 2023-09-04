'use client';
import { AppBarBase } from './AppBar.styles';
import { AppBarRootProps } from './AppBar.types';

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
