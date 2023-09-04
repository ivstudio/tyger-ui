import type { TBreakpointKey } from '@tyger-ui/system';

export type ModalScroll = 'body' | 'paper';

export interface ModalProps {
    children?: JSX.Element | JSX.Element[];
    parent?: HTMLElement;
    open: boolean;
    maxWidth?: TBreakpointKey;
    fullWidth?: boolean;
    onClose?: () => void;
    onBackdropClick?: () => void;
    scroll?: ModalScroll;
    headerBorder?: boolean;
    footerBorder?: boolean;
}

export interface ModalPropsHeader {
    title?: string;
    onClose?: () => void;
}
