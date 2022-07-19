import { motion } from 'framer-motion';
import styled from 'styled-components';

import { breakpoint, TBreakpointKey } from '../../styles/mediaQueries';

export const framerProps = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
    transition: { duration: 0.15, delay: 0.1 },
};

const getWidth = (fullWidth: boolean, maxWidth: TBreakpointKey) => {
    if (fullWidth) {
        return {
            width: '100vw',
            height: '100vh',
        };
    }
    if (maxWidth === 'xs') {
        return { maxWidth: 360 };
    }
    return { maxWidth: breakpoint[maxWidth] };
};

export const ModalPaper = styled(motion.div)<{
    fullWidth: boolean;
}>`
    position: relative;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 100%;
    border-radius: ${({ fullWidth }) => !fullWidth && `4px`};
    margin: ${({ fullWidth, theme }) => !fullWidth && theme.spacing['32']};
    background-color: ${({ theme }) => theme.paper};
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
        rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;

    @media print {
        overflow-y: visible;
        box-shadow: none;
    }
`;

export const ModalContainer = styled.div<{
    maxWidth: TBreakpointKey;
    fullWidth: boolean;
}>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: ${({ theme }) => theme.zindex.modal};
    ${({ maxWidth, fullWidth }) => getWidth(fullWidth, maxWidth)};
`;

export const ModalHeaderRoot = styled.header`
    margin: 0px;
    padding: ${({ theme }) => theme.spacing['16']};
    display: grid;
    grid-template-columns: 1fr 32px;
    align-items: center;
`;

export const ModalBody = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing['16']};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    border-top: 1px solid ${({ theme }) => theme.border};
`;

export const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: ${({ theme }) => theme.spacing['8']};
    padding: ${({ theme }) => theme.spacing['16']};
`;
