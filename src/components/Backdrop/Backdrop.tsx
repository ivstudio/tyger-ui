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
    zindex?: TZIndex;
}

const dark65 = 'rgba(0, 0, 0, 0.65)';

export const BackdropRoot = styled(motion.div)<{
    color: string;
    zindex?: TZIndex;
}>`
    position: fixed;
    inset: 0px;
    width: 100%;
    ${flexCenterAll}
    background: ${({ color }) => color};
    z-index: ${({ zindex }) => zindex};
    -webkit-tap-highlight-color: transparent;
`;

const Backdrop = ({
    key = 'backdrop',
    children,
    onClick,
    open = false,
    duration = 0.15,
    zindex,
    transparent,
}: IBackdrop) => {
    return (
        <AnimatePresence>
            {open ? (
                <BackdropRoot
                    key={key}
                    onClick={onClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration }}
                    color={transparent ? 'transparent' : dark65}
                    zindex={zindex}
                >
                    {children && children}
                </BackdropRoot>
            ) : null}
        </AnimatePresence>
    );
};

export default Backdrop;
