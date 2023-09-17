import type { SpacingProps } from '@tyger-ui/system';

export type BoxTags =
    | 'div'
    | 'p'
    | 'section'
    | 'span'
    | 'article'
    | 'main'
    | 'ul'
    | 'ol'
    | 'li'
    | 'aside'
    | 'fieldset';

export type BoxRootProps = {
    pt?: SpacingProps;
    pr?: SpacingProps;
    pb?: SpacingProps;
    pl?: SpacingProps;
    py?: SpacingProps;
    px?: SpacingProps;
    mt?: SpacingProps;
    mr?: SpacingProps;
    mb?: SpacingProps;
    ml?: SpacingProps;
    my?: SpacingProps;
    mx?: SpacingProps;
    padding?: SpacingProps;
    margin?: SpacingProps;
    border?: boolean;
    borderRadius?: boolean;
};

export interface BoxProps extends BoxRootProps {
    children: React.ReactNode | React.ReactNode[];
    tag?: BoxTags;
    flexCenterAll?: boolean;
    flexCenterInline?: boolean;
    flex?: boolean;
    styles?: React.CSSProperties;
}
