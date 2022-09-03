import { ReactNode } from 'react';
import { TSpacing } from '../../utils/spacing';
import { TVariant } from './TypographyVariants';
export declare type TTypography = 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li' | 'label';
export declare type TAlign = 'right' | 'center' | 'left';
export declare type TTransform = 'uppercase' | 'capitalize' | 'lowercase' | 'none';
export declare type TWeight = '300' | '400' | '600' | '700' | '800' | 300 | 400 | 600 | 700 | 800 | 'bold' | 'light' | 'semibold';
export interface ITypographyRoot {
    children: ReactNode | ReactNode[];
    className?: string;
    align?: TAlign;
    weight?: TWeight;
    transform?: TTransform;
    mt?: TSpacing;
    mb?: TSpacing;
    tag?: TTypography;
    color?: string;
    maxWidth?: number;
}
interface ITypography extends ITypographyRoot {
    variant?: TVariant;
}
declare const Typography: ({ children, transform, align, weight, mt, mb, variant, tag, color, maxWidth, className, }: ITypography) => JSX.Element;
export default Typography;
