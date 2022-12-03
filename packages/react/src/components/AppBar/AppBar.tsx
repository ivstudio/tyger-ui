import { AppBarBase } from './AppBar.styles';

export type TAppBarPosition = 'fixed' | 'static' | 'sticky';
export interface IAppBarRoot {
    children: React.ReactNode | React.ReactNode[];
    boxShadow?: boolean;
    position?: TAppBarPosition;
    dense?: boolean;
}

const AppBar = ({
    children,
    boxShadow = false,
    position = 'static',
    dense = false,
}: IAppBarRoot) => {
    return (
        <AppBarBase position={position} boxShadow={boxShadow} dense={dense}>
            {children}
        </AppBarBase>
    );
};

export default AppBar;
