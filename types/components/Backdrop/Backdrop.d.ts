/// <reference types="react" />
declare type TZIndex = string;
interface IBackdrop {
    children?: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
    open?: boolean;
    duration?: number;
    base?: boolean;
    key?: string;
    transparent?: boolean;
    zindex?: TZIndex;
}
export declare const BackdropRoot: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLDivElement, import("framer-motion").HTMLMotionProps<"div">>, import("styled-components").DefaultTheme, {
    color: string;
    zindex?: string | undefined;
}, never>;
declare const Backdrop: ({ key, children, onClick, open, duration, zindex, transparent, }: IBackdrop) => JSX.Element;
export default Backdrop;
