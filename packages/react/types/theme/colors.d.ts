export declare enum ThemeModes {
    Dark = "Dark",
    Light = "Light"
}
export declare const color: {
    blue: string[];
    grey: string[];
    warning: string[];
    negative: string[];
    positive: string[];
};
export declare const lightPalette: {
    name: ThemeModes;
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
};
export declare const darkPalette: {
    name: ThemeModes;
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
};
