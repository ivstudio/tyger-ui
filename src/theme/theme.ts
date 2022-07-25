import { fontSize, lineHeight } from '../utils/font';
import { spacing } from '../utils/spacing';
import { zIndex } from '../utils/zIndex';
import { color, darkPalette as dark, lightPalette as light } from './colors';
import { DefaultTheme } from 'styled-components';

export interface ICommonTokens {
    spacing: typeof spacing;
    color: typeof color;
    fontSize: typeof fontSize;
    lineHeight: typeof lineHeight;
    zIndex: typeof zIndex;
}
const commonTokens: ICommonTokens = {
    color,
    spacing,
    fontSize,
    lineHeight,
    zIndex,
};

export const lightPalette = {
    ...commonTokens,
    ...light,
};

export const darkPalette = {
    ...commonTokens,
    ...dark,
};

export const lightTheme: DefaultTheme = lightPalette;
export const darkTheme: DefaultTheme = darkPalette;
export type TTheme = typeof lightTheme | typeof darkTheme;
export type ThemeProps = { theme?: TTheme };
