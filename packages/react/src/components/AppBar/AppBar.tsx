import { AppBarBase } from './AppBar.styles';

export type TAppBarPosition = 'fixed' | 'static' | 'sticky';
export interface IAppBarRoot {
    children: React.ReactNode | React.ReactNode[];
    boxShadow?: boolean;
    position?: TAppBarPosition;
}

const AppBar = ({
    children,
    boxShadow = false,
    position = 'static',
}: IAppBarRoot) => {
    return (
        <AppBarBase position={position} boxShadow={boxShadow}>
            {children}
        </AppBarBase>
    );
};

export default AppBar;
