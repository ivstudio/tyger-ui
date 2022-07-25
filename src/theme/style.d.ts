import 'styled-components';

import { TSpacing } from '../utils/spacing';
import { ICommonTokens } from './theme';
import { ThemeModes } from './colors';

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
    disabled?: {
        backgroundColor: string;
    };
};

declare module 'styled-components' {
    export interface DefaultTheme extends ICommonTokens {
        name: ThemeModes;
        body?: string;
        backgroundColor?: string;
        primary: string;
        border: string;
        paper: string;
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
        bg: {
            primary: string;
            secondary: string;
            inset: string;
            input: string;
            appBar: string;
        };
    }
}
