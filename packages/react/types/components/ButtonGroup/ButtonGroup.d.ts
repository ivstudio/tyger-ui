/// <reference types="react" />
export declare const ButtonGroupRoot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IButtonRoot, never>;
interface IButtonRoot {
    orientation?: 'horizontal' | 'vertical';
}
interface IButtonGroup extends IButtonRoot {
    children: React.ReactNode[];
}
declare const ButtonGroup: ({ children, orientation, }: IButtonGroup) => JSX.Element | null;
export default ButtonGroup;
