/// <reference types="react" />
export interface IAppBarRoot {
    children: React.ReactNode | React.ReactNode[];
    boxShadow?: boolean;
}
export interface IAppBar extends IAppBarRoot {
    hideOnScroll?: boolean;
}
