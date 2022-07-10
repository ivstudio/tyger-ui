import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

interface IBackdrop {
    children?: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
    open?: boolean;
    duration?: number;
    base?: boolean;
    key?: string;
    transparent?: boolean;
    zindex?: number;
}

export const BackdropRoot = styled(motion.div)<{
    color: string;
    zindex?: number;
}>`
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ color }) => color};
    z-index: ${({ zindex }) => zindex};
`;

const dark65 = 'rgba(0, 0, 0, 0.65)';

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
                    {children}
                </BackdropRoot>
            ) : null}
        </AnimatePresence>
    );
};

export default Backdrop;
