'use client';
import type { TBreakpointKey } from '@tyger-ui/system';
import { breakpoint, device } from '@tyger-ui/system';
import styled from 'styled-components';

import { BoxRoot } from '../Box';
import { ContainerProps } from './Container.d';

const ContainerRoot = styled(BoxRoot)<{
    maxWidth?: TBreakpointKey;
}>`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ maxWidth }) =>
        maxWidth && `${breakpoint[maxWidth]} !important`};
    color: ${({ theme }) => theme && theme.text?.primary};
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
    ...props
}: ContainerProps) => {
    return (
        <ContainerRoot
            as={tag}
            maxWidth={maxWidth}
            className={className}
            {...props}
        >
            {children}
        </ContainerRoot>
    );
};

export default Container;
