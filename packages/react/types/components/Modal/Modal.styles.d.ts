import { TBreakpointKey } from '../../styles';
import { TScroll } from './Modal';
export declare const framerProps: {
    initial: {
        opacity: number;
        scale: number;
    };
    animate: {
        opacity: number;
        scale: number;
    };
    exit: {
        opacity: number;
        scale: number;
    };
    transition: {
        duration: number;
        delay: number;
    };
};
export declare const modalElem: {
    body: string;
};
export declare const ModalRoot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    scroll: TScroll;
}, never>;
export declare const ModalPaper: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLDivElement, import("framer-motion").HTMLMotionProps<"div">>, import("styled-components").DefaultTheme, {
    fullWidth: boolean;
    maxWidth: TBreakpointKey;
    scroll: TScroll;
}, never>;
export declare const ModalHeaderRoot: import("styled-components").StyledComponent<"header", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"main", import("styled-components").DefaultTheme, {
    borderBottom?: boolean | undefined;
    borderTop?: boolean | undefined;
}, never>;
export declare const ModalFooter: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
