/// <reference types="react" />
export declare type TSize = 'sm' | 'md' | 'lg';
interface IIconRoot {
    size?: TSize;
    color?: string;
    background?: string;
    filled?: boolean;
}
interface IIconButton extends IIconRoot {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare const IconButtonRoot: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IIconRoot, never>;
declare const IconButton: ({ children, onClick, size, disabled, background, color, filled, className, ...baseProps }: IIconButton) => JSX.Element;
export default IconButton;
