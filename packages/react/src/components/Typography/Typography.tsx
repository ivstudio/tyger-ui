'use client';

import styled from 'styled-components';

import { TypographyProps } from './Typography.d';
import { typographyVariants as variants } from './TypographyVariants';

const RootTypography = styled.div<TypographyProps>`
    ${({ variant }) => variant && variants[variant]};
    text-align: ${({ align }) => align};
    font-weight: ${({ weight }) => weight};
    text-transform: ${({ transform }) => transform};
    margin: ${({ theme: { spacing }, mt = '0', mb = '0' }) =>
        `${spacing[mt]} 0 ${spacing[mb]}`};
    line-height: 1.3;
    display: block;
    color: ${({ color, theme }) => (color ? color : theme.text.primary)};
    max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
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
    maxWidth,
    className,
}: TypographyProps) => {
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
            maxWidth={maxWidth}
            className={className}
        >
            {children}
        </RootTypography>
    );
};

export default Typography;
