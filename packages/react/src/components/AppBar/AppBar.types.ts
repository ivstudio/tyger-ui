export type TAppBarPosition = 'fixed' | 'static' | 'sticky';
export interface IAppBarRoot {
    children: React.ReactNode | React.ReactNode[];
    boxShadow?: boolean;
    position?: TAppBarPosition;
}
export interface IAppBar extends IAppBarRoot {
    hideOnScroll?: boolean;
}
