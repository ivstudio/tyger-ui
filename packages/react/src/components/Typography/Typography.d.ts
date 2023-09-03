import type { SpacingProps } from '@tyger-ui/system';
import { ReactNode } from 'react';

import { TypographyVariantProps } from './TypographyVariants';

export type TypographyTags =
    | 'span'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'li'
    | 'label';
export type TypographyAlign = 'right' | 'center' | 'left';
export type TypographyTransform =
    | 'uppercase'
    | 'capitalize'
    | 'lowercase'
    | 'none';
export type TypographyWeight =
    | '300'
    | '400'
    | '600'
    | '700'
    | '800'
    | 300
    | 400
    | 600
    | 700
    | 800
    | 'bold'
    | 'light'
    | 'semibold';

export interface TypographyRootProps {
    children: ReactNode | ReactNode[];
    className?: string;
    align?: TypographyAlign;
    weight?: TypographyWeight;
    transform?: TypographyTransform;
    mt?: SpacingProps;
    mb?: SpacingProps;
    tag?: TypographyTags;
    color?: string;
    maxWidth?: number;
}
interface TypographyProps extends TypographyRootProps {
    variant?: TypographyVariantProps;
}
