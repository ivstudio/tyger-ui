/// <reference types="react" />
import { TBreakpointKey } from '../../styles';
export declare type TScroll = 'body' | 'paper';
interface IModal {
    children?: JSX.Element | JSX.Element[];
    parent?: HTMLElement;
    open: boolean;
    maxWidth?: TBreakpointKey;
    fullWidth?: boolean;
    onClose: () => void;
    onBackdropClick?: () => void;
    disableBackdropClick?: boolean;
    scroll?: TScroll;
    headerBorder?: boolean;
    footerBorder?: boolean;
}
interface IModalHeader {
    title?: string;
    onClose?: () => void;
}
declare const Modal: {
    ({ children, open, maxWidth, fullWidth, onBackdropClick, disableBackdropClick, scroll, headerBorder, footerBorder, }: IModal): import("react").ReactPortal | null;
    Header: ({ title, onClose }: IModalHeader) => JSX.Element;
    Body: import("styled-components").StyledComponent<"main", import("styled-components").DefaultTheme, {
        borderBottom?: boolean | undefined;
        borderTop?: boolean | undefined;
    }, never>;
    Footer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
};
export default Modal;
