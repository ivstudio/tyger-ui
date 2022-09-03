import { TSpacing } from '../utils/spacing';
import { darkTheme, lightTheme } from './theme';

export type Theme = typeof lightTheme | typeof darkTheme;

export type ThemeProps = { theme?: Theme };

export type TColorType = keyof Theme['color'];

export type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type { TSpacing };

export type FontSizeIndex =
    | -3
    | -2
    | -1
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9;

export type LineHeight = keyof Theme['lineHeight'];

export type TBoxElem =
    | 'div'
    | 'section'
    | 'span'
    | 'article'
    | 'main'
    | 'ul'
    | 'ol'
    | 'li'
    | 'aside';

export type TBox = {
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

// type Keys = keyof typeof theme;
// type Values = typeof theme[Keys];
// interface IBaseTheme {
//     [key: string]: Values;
// }

// export interface ITheme extends IBaseTheme {
//     spacing: TSpacing;
// }
