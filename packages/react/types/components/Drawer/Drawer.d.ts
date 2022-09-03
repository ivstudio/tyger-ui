/// <reference types="react" />
export declare type TAnchor = 'top' | 'right' | 'bottom' | 'left';
interface IDrawerRoot {
    children: React.ReactNode | React.ReactNode[];
    open: boolean;
    onClose: () => void;
    anchor?: TAnchor;
}
interface IDrawer extends IDrawerRoot {
    title?: string;
}
declare const Drawer: ({ children, onClose, anchor, open, title, }: IDrawer) => JSX.Element;
export default Drawer;
