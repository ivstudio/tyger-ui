'use client';

import styled from 'styled-components';

import {
    flexCenterAll as flexCenterAllMixin,
    flexCenterInline as flexCenterInlineMixin,
} from '../../styles';
import { BoxProps } from './Box.types';

export const BoxRoot = styled.div<BoxProps>`
    padding-top: ${({ theme, pt, py }) =>
        (py && theme.spacing[py]) || (pt && theme.spacing[pt])};
    padding-right: ${({ theme, pr, px }) =>
        (px && theme.spacing[px]) || (pr && theme.spacing[pr])};
    padding-bottom: ${({ theme, pb, py }) =>
        (py && theme.spacing[py]) || (pb && theme.spacing[pb])};
    padding-left: ${({ theme, pl, px }) =>
        (px && theme.spacing[px]) || (pl && theme.spacing[pl])};
    margin-top: ${({ theme, mt, my }) =>
        (my && theme.spacing[my]) || (mt && theme.spacing[mt])};
    margin-right: ${({ theme, mr, mx }) =>
        (mx && theme.spacing[mx]) || (mr && theme.spacing[mr])};
    margin-bottom: ${({ theme, mb, my }) =>
        (my && theme.spacing[my]) || (mb && theme.spacing[mb])};
    margin-left: ${({ theme, ml, mx }) =>
        (mx && theme.spacing[mx]) || (ml && theme.spacing[ml])};
    display: ${({ flex }) => flex && 'flex'};
    ${({ flexCenterInline }) => flexCenterInline && flexCenterInlineMixin};
    ${({ flexCenterAll }) => flexCenterAll && flexCenterAllMixin}
    padding: ${({ theme, padding }) => padding && theme.spacing[padding]};
    margin: ${({ theme, margin }) => margin && theme.spacing[margin]};
    border: ${({ theme, border }) => border && `1px solid ${theme.border}`};
    border-radius: ${({ borderRadius }) => borderRadius && '4px'};
`;

const Box = ({ tag, children, styles, ...props }: BoxProps) => (
    <BoxRoot as={tag} style={styles} {...props}>
        {children}
    </BoxRoot>
);

export default Box;
