import 'styled-components';

import { TSpacing } from '../utils/spacing';
import {
    colorScale,
    fontSizeScale,
    lineHeightScale,
    TThemeNames,
    zindexScale,
} from './theme';

type TButtonTheme = {
    color: string;
    backgroundColor: string;
    border?: string;
    hover: {
        color?: string;
        backgroundColor: string;
        border?: string;
    };
    disabled: {
        color?: string;
        backgroundColor?: string;
        border?: string;
    };
};

declare module 'styled-components' {
    export interface DefaultTheme {
        name: TThemeNames;
        color: typeof colorScale;
        spacing: TSpacing;
        fontSize: typeof fontSizeScale;
        lineHeight: typeof lineHeightScale;
        zindex: typeof zindexScale;
        body: string;
        backgroundColor: string;
        palette: {
            primary: string;
            border: string;
            warning: string;
            error: string;
            success: string;
            button: {
                primary: TButtonTheme;
                outlined: TButtonTheme;
                text: TButtonTheme;
            };
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
            ui: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
        };
        bg: {
            primary: string;
            secondary: string;
            inset: string;
            input: string;
            appBar: string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            quarternary: string;
            placeholder: string;
            onPrimary: string;
        };
    }
}
