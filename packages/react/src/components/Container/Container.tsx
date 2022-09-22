import {
    breakpoint,
    device,
    TBreakpointKey,
} from '@tyger-ui/system/src/mediaQueries';
import styled from 'styled-components';

import { BoxRoot, IBox } from '../Box';

interface IContainer extends IBox {
    maxWidth?: TBreakpointKey;
}

const ContainerRoot = styled(BoxRoot)<{
    maxWidth?: TBreakpointKey;
}>`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ maxWidth }) =>
        maxWidth && `${breakpoint[maxWidth]}!important`};

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
    ...props
}: IContainer) => {
    return (
        <ContainerRoot as={tag} maxWidth={maxWidth} {...props}>
            {children}
        </ContainerRoot>
    );
};

export default Container;
