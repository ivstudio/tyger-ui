import 'styled-components';

import { tokens } from '@tyger-ui/system';

export enum ThemeMode {
    Dark = 'Dark',
    Light = 'Light',
}

export type TButtonTheme = {
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

export type TChipTheme = {
    color: string;
    backgroundColor: string;
    border?: string;
    disabled: {
        color?: string;
        backgroundColor?: string;
        border?: string;
    };
};

export type TIconButtonTheme = {
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

export type TSwitchTheme = {
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

export type TDrawer = {
    backgroundColor: string;
    border?: string;
};

export interface ISystemTokens {
    spacing: typeof tokens.spacing;
    color: typeof tokens.color;
    fontSize: typeof tokens.fontSize;
    lineHeight: typeof tokens.lineHeight;
    zIndex: typeof tokens.zIndex;
}

export interface ITheme extends ISystemTokens {
    name: ThemeMode;
    primary: string;
    backgroundColor?: string;
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
        button: {
            hover?: {
                backgroundColor: string;
            };
        };
    };
    switch: TSwitchTheme;
    appBar: {
        backgroundColor: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        quarternary: string;
        placeholder: string;
    };
    drawer: TDrawer;
}

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
