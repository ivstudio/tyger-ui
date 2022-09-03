import { TSpacing } from '../utils/spacing';
import { darkTheme, lightTheme } from './theme';
export declare type Theme = typeof lightTheme | typeof darkTheme;
export declare type ThemeProps = {
    theme?: Theme;
};
export declare type TColorType = keyof Theme['color'];
export declare type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type { TSpacing };
export declare type FontSizeIndex = -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export declare type LineHeight = keyof Theme['lineHeight'];
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
    tag?: TBoxElem;
};
