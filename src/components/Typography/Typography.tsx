import styled from 'styled-components';

import { ITypographyRoot } from './Typography.types';
import { TVariant, typographyVariants as variants } from './TypographyVariants';

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
        >
            {children}
        </RootTypography>
    );
};

export default Typography;
