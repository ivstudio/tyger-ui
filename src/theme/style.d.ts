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

type TChipTheme = {
    color: string;
    backgroundColor: string;
    border?: string;
    disabled: {
        color?: string;
        backgroundColor?: string;
        border?: string;
    };
};

type TIconButtonTheme = {
    color: string;
    backgroundColor: string;
    hover: {
        color?: string;
        backgroundColor: string;
    };
    disabled: {
        color?: string;
    };
};

type TSwitchTheme = {
    on: {
        backgroundColor: string;
    };
    off: {
        backgroundColor: string;
    };
    disabled: {
        backgroundColor: string;
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
        primary: string;
        border: string;
        paper: string;
        warning: string;
        error: string;
        success: string;
        button: {
            filled: TButtonTheme;
            outlined: TButtonTheme;
            text: TButtonTheme;
        };
        iconButton: TIconButtonTheme;
        chip: {
            filled: TChipTheme;
            outlined: TChipTheme;
        };
        switch: TSwitchTheme;
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            quarternary: string;
            placeholder: string;
        };
        ui: {
            primary: string;
            secondary: string;
            tertiary: string;
        };

        bg: {
            primary: string;
            secondary: string;
            inset: string;
            input: string;
            appBar: string;
        };
    }
}
