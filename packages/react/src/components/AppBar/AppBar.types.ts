export type TAppBarPosition = 'fixed' | 'static' | 'sticky';

export interface AppBarRootProps {
    children: React.ReactNode | React.ReactNode[];
    boxShadow?: boolean;
    position?: TAppBarPosition;
    dense?: boolean;
}
