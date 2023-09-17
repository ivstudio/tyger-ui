/*
    Xn = Xn-1 + {INT[(n-2)/4] + 1} * 2
    Xn: step n type size Xn-1: step n-1 type size
    Formula by: Carbon Design System
*/
import { fontSize } from '@tyger-ui/system';

export const typographyVariant = {
    body: {
        fontSize: fontSize[1],
    },
    body1: {
        fontSize: fontSize[-1],
    },
    subheading: {
        fontSize: fontSize[4],
    },
    subheading1: {
        fontSize: fontSize[3],
    },
    display: {
        fontSize: fontSize[11],
        fontWeight: '600',
    },
    lead: {
        fontSize: fontSize[8],
    },
    lead1: {
        fontSize: fontSize[7],
    },
    title: {
        fontSize: fontSize[6],
        fontWeight: '700',
    },
    label: {
        fontSize: fontSize[-1],
    },
    footnote: {
        fontSize: fontSize[-2],
    },
} as const;

export const htmlTextElements = {
    h1: {
        fontSize: fontSize[6],
        fontWeight: '600',
    },
    h2: {
        fontSize: fontSize[5],
        fontWeight: '600',
    },
    h3: {
        fontSize: fontSize[4],
        fontWeight: '600',
    },
    h4: {
        fontSize: fontSize[3],
        fontWeight: '600',
    },
    h5: {
        fontSize: fontSize[2],
        fontWeight: '600',
    },
    h6: {
        fontSize: fontSize[1],
        fontWeight: '600',
    },
    p: typographyVariant.body,
    div: typographyVariant.body,
    span: typographyVariant.body,
    li: typographyVariant.body,
} as const;

export const typographyVariants = { ...htmlTextElements, ...typographyVariant };

export type TypographyVariantProps =
    | keyof typeof typographyVariant
    | keyof typeof htmlTextElements;
// export type TVariantKey = typeof typographyVariants[TVariant];
