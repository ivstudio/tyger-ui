import { ReactNode } from 'react';
import styled from 'styled-components';

import { TSpacing } from '../../utils/spacing';
import { TVariant, typographyVariants as variants } from './TypographyVariants';

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
    color?: string;
}
interface ITypography extends ITypographyRoot {
    variant?: TVariant;
}

const RootTypography = styled.div<ITypography>`
    ${({ variant }) => variant && variants[variant]};
    text-align: ${({ align }) => align};
    font-weight: ${({ weight }) => weight};
    text-transform: ${({ transform }) => transform};
    margin: ${({ theme: { spacing }, mt = '0', mb = '0' }) =>
        `${spacing[mt]} 0 ${spacing[mb]}`};
    line-height: 1.3;
    display: block;
    color: ${({ color, theme }) => (color ? color : theme.text.primary)};
`;

const Typography = ({
    children,
    transform,
    align,
    weight,
    mt = '0',
    mb = '12',
    variant,
    tag = 'p',
    color,
}: ITypography) => {
    return (
        <RootTypography
            as={tag}
            weight={weight}
            transform={transform}
            align={align}
            variant={variant ? variant : tag}
            mt={mt}
            mb={mb}
            color={color}
        >
            {children}
        </RootTypography>
    );
};

export default Typography;
