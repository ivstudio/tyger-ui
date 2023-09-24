'use client';

import { breakpoint, device } from '@tyger-ui/system';
import styled from 'styled-components';

import { BoxRoot } from '../Box';
import { ContainerProps } from './Container.types';

const ContainerRoot = styled(BoxRoot)<ContainerProps>`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ maxWidth }) =>
        maxWidth && `${breakpoint[maxWidth]} !important`};
    color: ${({ theme: { text } }) => text.primary};
    background-color: ${({ paper, theme }) => paper && theme.paper};
    box-sizing: border-box;

    @media ${device.sm} {
        max-width: ${breakpoint.sm};
    }

    @media ${device.md} {
        max-width: ${breakpoint.md};
    }

    @media ${device.lg} {
        max-width: ${breakpoint.lg};
    }

    @media ${device.xl} {
        max-width: ${breakpoint.xl};
    }
`;

const Container = ({
    children,
    maxWidth,
    tag = 'div',
    className,
    paper = false,
    ...props
}: ContainerProps) => {
    return (
        <ContainerRoot
            as={tag}
            maxWidth={maxWidth}
            className={className}
            paper={paper}
            {...props}
        >
            {children}
        </ContainerRoot>
    );
};

export default Container;
