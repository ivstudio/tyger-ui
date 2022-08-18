/// <reference types="react" />
import { TSpacing } from '../../utils/spacing';
export declare type TBoxElem = 'div' | 'section' | 'span' | 'article' | 'main' | 'ul' | 'ol' | 'li' | 'aside';
export declare type TBox = {
    pt?: TSpacing;
    pr?: TSpacing;
    pb?: TSpacing;
    pl?: TSpacing;
    py?: TSpacing;
    px?: TSpacing;
    mt?: TSpacing;
    mr?: TSpacing;
    mb?: TSpacing;
    ml?: TSpacing;
    my?: TSpacing;
    mx?: TSpacing;
    p?: TSpacing;
    m?: TSpacing;
    border?: boolean;
    borderRadius?: boolean;
};
export interface IBox extends TBox {
    children: React.ReactNode | React.ReactNode[];
    tag?: TBoxElem;
    flexCenterAll?: boolean;
    flexCenterInline?: boolean;
    flex?: boolean;
    styles?: React.CSSProperties;
}
export declare const BoxRoot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IBox, never>;
declare const Box: ({ tag, children, styles, ...props }: IBox) => JSX.Element;
export default Box;
