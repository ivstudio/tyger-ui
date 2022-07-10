import { ReactNode } from 'react';

import { TSpacing } from '../../utils/spacing';

export type TTypography =
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

export type TAlign = 'right' | 'center' | 'left';

export type TTransform = 'uppercase' | 'capitalize' | 'lowercase' | 'none';

export type TWeight =
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

export interface ITypographyRoot {
    children: ReactNode | ReactNode[];
    className?: string;
    align?: TAlign;
    weight?: TWeight;
    transform?: TTransform;
    mt?: TSpacing;
    mb?: TSpacing;
    tag?: TTypography;
}
