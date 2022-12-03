import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { flexCenterAll } from '../../styles';

type TZIndex = string;
interface IBackdrop {
    children?: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
    open?: boolean;
    duration?: number;
    base?: boolean;
    key?: string;
    transparent?: boolean;
    zIndex?: TZIndex;
}

const dark65 = 'rgba(0, 0, 0, 0.5)';

export const BackdropRoot = styled(motion.div)<{
    color: string;
    zIndex?: TZIndex;
}>`
    position: fixed;
    inset: 0px;
    width: 100%;
    ${flexCenterAll}
    background: ${({ color }) => color};
    z-index: ${({ zIndex }) => zIndex};
    -webkit-tap-highlight-color: transparent;
`;

const Backdrop = ({
    key = 'backdrop',
    children,
    onClick,
    open = false,
    duration = 0.15,
    zIndex = '1',
    transparent,
}: IBackdrop) => {
    return (
        <AnimatePresence>
            {open ? (
                <BackdropRoot
                    key={key}
                    data-testid="backdrop"
                    onClick={onClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration }}
                    color={transparent ? 'transparent' : dark65}
                    zIndex={zIndex}
                >
                    {children && children}
                </BackdropRoot>
            ) : null}
        </AnimatePresence>
    );
};

export default Backdrop;
