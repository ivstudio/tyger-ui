import { motion } from 'framer-motion';
import styled from 'styled-components';

import { breakpoint, TBreakpointKey } from '../../styles';
import { TScroll } from './Modal';

export const framerProps = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
    transition: { duration: 0.15, delay: 0.1 },
};

const elevation = `rgb(0 0 0 / 20%) 0px 11px 15px -7px,
rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px`;

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

export const ModalRoot = styled.div`
    position: fixed;
    inset: 0px;
    z-index: ${({ theme }) => theme.zindex.modal};
`;

export const ModalContainer = styled.div<{ scroll: TScroll }>`
    height: 100%;
    outline: 0px;

    ${({ scroll }) => {
        switch (scroll) {
            case 'paper':
                return {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                };
            case 'body':
            default:
                return {
                    overflow: 'hidden auto',
                    textAlign: 'center',
                };
        }
    }};
`;

export const ModalPaper = styled(motion.div)<{
    fullWidth: boolean;
    maxWidth: TBreakpointKey;
    scroll: TScroll;
}>`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-y: auto;
    box-shadow: ${elevation};
    z-index: ${({ theme }) => theme.zindex.modal + 2};
    border-radius: ${({ fullWidth }) => !fullWidth && `4px`};
    margin: ${({ fullWidth, theme }) => !fullWidth && theme.spacing['32']};
    background-color: ${({ theme }) => theme.paper};
    ${({ maxWidth, fullWidth }) => getWidth(fullWidth, maxWidth)};

    ${({ scroll, fullWidth }) => {
        switch (scroll) {
            case 'paper':
                return {
                    maxHeight: fullWidth ? '100%' : 'calc(100% - 64px)',
                };
            case 'body':
            default:
                return {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                };
        }
    }};

    @media print {
        overflow-y: visible;
        box-shadow: none;
    }
`;

export const ModalHeaderRoot = styled.header`
    margin: 0px;
    padding: ${({ theme }) => theme.spacing['16']};
    display: grid;
    grid-template-columns: 1fr 32px;
    align-items: center;
    text-align: left;
`;

export const ModalBody = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing['16']};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    border-top: 1px solid ${({ theme }) => theme.border};
    text-align: left;
`;

export const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: ${({ theme }) => theme.spacing['8']};
    padding: ${({ theme }) => theme.spacing['16']};
`;
