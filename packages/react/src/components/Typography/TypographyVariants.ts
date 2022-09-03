/*
    Xn = Xn-1 + {INT[(n-2)/4] + 1} * 2
    Xn: step n type size Xn-1: step n-1 type size
    Formula by: Carbon Design System
*/
const scale = {
    '15': '5.75em',
    '14': '5.25em',
    '13': '4.75em',
    '12': '4.25em',
    '11': '3.75em',
    '10': '3.375em',
    '9': '3em',
    '8': '2.625em',
    '7': '2.25em',
    '6': '2em',
    '5': '1.75em',
    '4': '1.5em',
    '3': '1.25em',
    '2': '1.125em',
    '1': '1em',
    '-1': '.875em',
    '-2': '0.75em',
};

export const typographyVariant = {
    body: {
        fontSize: scale['1'],
        fontWeight: '300',
    },
    body1: {
        fontSize: scale['-1'],
        fontWeight: '300',
    },
    subheading: {
        fontSize: scale['4'],
        fontWeight: '300',
    },
    subheading1: {
        fontSize: scale['3'],
        fontWeight: '300',
    },
    display: {
        fontSize: scale['11'],
        fontWeight: '600',
    },
    lead: {
        fontSize: scale['8'],
        fontWeight: '300',
    },
    lead1: {
        fontSize: scale['7'],
        fontWeight: '300',
    },
    title: {
        fontSize: scale['6'],
        fontWeight: '700',
    },
    label: {
        fontSize: scale['1'],
    },
    footnote: {
        fontSize: scale['-2'],
    },
} as const;

export const htmlTextElements = {
    h1: {
        fontSize: scale['6'],
        fontWeight: '600',
    },
    h2: {
        fontSize: scale['5'],
        fontWeight: '600',
    },
    h3: {
        fontSize: scale['4'],
        fontWeight: '600',
    },
    h4: {
        fontSize: scale['3'],
        fontWeight: '600',
    },
    h5: {
        fontSize: scale['2'],
        fontWeight: '600',
    },
    h6: {
        fontSize: scale['1'],
        fontWeight: '600',
    },
    p: typographyVariant.body,
    div: typographyVariant.body,
    span: typographyVariant.body,
    li: typographyVariant.body,
} as const;

export const typographyVariants = { ...htmlTextElements, ...typographyVariant };

export type TVariant =
    | keyof typeof typographyVariant
    | keyof typeof htmlTextElements;
// export type TVariantKey = typeof typographyVariants[TVariant];
