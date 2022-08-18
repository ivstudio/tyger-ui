/// <reference types="react" />
interface IDrawerHeader {
    children?: React.ReactNode | React.ReactNode[];
    onClose?: () => void;
}
declare const DrawerHeader: ({ children, onClose }: IDrawerHeader) => JSX.Element;
export default DrawerHeader;
