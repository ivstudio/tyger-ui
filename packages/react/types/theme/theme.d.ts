import { fontSize, lineHeight } from '../utils/font';
import { spacing } from '../utils/spacing';
import { zIndex } from '../utils/zIndex';
import { color } from './colors';
import { DefaultTheme } from 'styled-components';
export interface ICommonTokens {
    spacing: typeof spacing;
    color: typeof color;
    fontSize: typeof fontSize;
    lineHeight: typeof lineHeight;
    zIndex: typeof zIndex;
}
export declare const lightPalette: {
    name: import("./colors").ThemeModes;
    backgroundColor: string;
    primary: string;
    border: string;
    paper: string;
    button: {
        filled: {
            color: string;
            backgroundColor: string;
            hover: {
                backgroundColor: string;
            };
            disabled: {
                backgroundColor: string;
                color: string;
            };
        };
        outlined: {
            color: string;
            border: string;
            backgroundColor: string;
            hover: {
                backgroundColor: string;
                color: string;
                border: string;
            };
            disabled: {
                backgroundColor: string;
                color: string;
                border: string;
            };
        };
        text: {
            color: string;
            backgroundColor: string;
            hover: {
                color: string;
                backgroundColor: string;
            };
            disabled: {
                backgroundColor: string;
                color: string;
            };
        };
    };
    iconButton: {
        color: string;
        backgroundColor: string;
        hover: {
            backgroundColor: string;
        };
        disabled: {
            color: string;
        };
    };
    chip: {
        filled: {
            color: string;
            backgroundColor: string;
            disabled: {
                backgroundColor: string;
                color: string;
            };
        };
        outlined: {
            color: string;
            border: string;
            backgroundColor: string;
            disabled: {
                backgroundColor: string;
                color: string;
                border: string;
            };
        };
    };
    switch: {
        on: {
            backgroundColor: string;
        };
        off: {
            backgroundColor: string;
        };
    };
    surface: {
        primary: string;
    };
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
    spacing: typeof spacing;
    color: typeof color;
    fontSize: typeof fontSize;
    lineHeight: typeof lineHeight;
    zIndex: typeof zIndex;
};
export declare const darkPalette: {
    name: import("./colors").ThemeModes;
    backgroundColor: string;
    primary: string;
    border: string;
    paper: string;
    body: string;
    button: {
        filled: {
            color: string;
            backgroundColor: string;
            hover: {
                backgroundColor: string;
            };
            disabled: {
                backgroundColor: string;
                color: string;
            };
        };
        outlined: {
            color: string;
            border: string;
            backgroundColor: string;
            hover: {
                backgroundColor: string;
                border: string;
            };
            disabled: {
                backgroundColor: string;
                color: string;
                border: string;
            };
        };
        text: {
            color: string;
            backgroundColor: string;
            hover: {
                color: string;
                backgroundColor: string;
            };
            disabled: {
                color: string;
            };
        };
    };
    iconButton: {
        color: string;
        backgroundColor: string;
        hover: {
            backgroundColor: string;
        };
        disabled: {
            color: string;
        };
    };
    chip: {
        filled: {
            color: string;
            backgroundColor: string;
            disabled: {
                backgroundColor: string;
                color: string;
            };
        };
        outlined: {
            color: string;
            border: string;
            backgroundColor: string;
            disabled: {
                backgroundColor: string;
                color: string;
                border: string;
            };
        };
    };
    switch: {
        on: {
            backgroundColor: string;
        };
        off: {
            backgroundColor: string;
        };
    };
    surface: {
        primary: string;
    };
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
    spacing: typeof spacing;
    color: typeof color;
    fontSize: typeof fontSize;
    lineHeight: typeof lineHeight;
    zIndex: typeof zIndex;
};
export declare const lightTheme: DefaultTheme;
export declare const darkTheme: DefaultTheme;
export declare type TTheme = typeof lightTheme | typeof darkTheme;
export declare type ThemeProps = {
    theme?: TTheme;
};
