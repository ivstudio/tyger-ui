import styled from 'styled-components';

import {
    flexCenterAll as flexCenterAllMixin,
    flexCenterInline as flexCenterInlineMixin,
} from '../../styles';
import { TSpacing } from '../../utils/spacing';

export type TBoxElem =
    | 'div'
    | 'section'
    | 'span'
    | 'article'
    | 'main'
    | 'ul'
    | 'ol'
    | 'li'
    | 'aside';

export type TBox = {
    pt?: TSpacing;
    pr?: TSpacing;
    pb?: TSpacing;
    pl?: TSpacing;
    py?: TSpacing;
    px?: TSpacing;
    mt?: TSpacing;
    mr?: TSpacing;
    mb?: TSpacing;
    ml?: TSpacing;
    my?: TSpacing;
    mx?: TSpacing;
};

export interface IBox extends TBox {
    children: React.ReactNode | React.ReactNode[];
    tag?: TBoxElem;
    flexCenterAll?: boolean;
    flexCenterInline?: boolean;
}

export const BoxRoot = styled.div<IBox>`
    padding-top: ${({ theme, pt, py }) =>
        py || (pt && theme.spacing[py || pt])};
    padding-right: ${({ theme, pr, px }) =>
        px || (pr && theme.spacing[px || pr])};
    padding-bottom: ${({ theme, pb, py }) =>
        py || (pb && theme.spacing[py || pb])};
    padding-left: ${({ theme, pl, px }) =>
        px || (pl && theme.spacing[px || pl])};
    margin-top: ${({ theme, mt, my }) => my || (mt && theme.spacing[my || mt])};
    margin-right: ${({ theme, mr, mx }) =>
        mx || (mr && theme.spacing[mx || mr])};
    margin-bottom: ${({ theme, mb, my }) =>
        my || (mb && theme.spacing[my || mb])};
    margin-left: ${({ theme, ml, mx }) =>
        mx || (ml && theme.spacing[mx || ml])};
    ${({ flexCenterInline }) => flexCenterInline && flexCenterInlineMixin};
    ${({ flexCenterAll }) => flexCenterAll && flexCenterAllMixin}
`;

const Box = ({ tag, children, ...props }: IBox) => (
    <BoxRoot tag={tag} {...props}>
        {children}
    </BoxRoot>
);

export default Box;
