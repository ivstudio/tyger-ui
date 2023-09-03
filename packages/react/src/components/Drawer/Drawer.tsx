'use client';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import Backdrop from '../Backdrop';
import { DrawerAnchor, DrawerProps } from './Drawer.d';
import DrawerHeader from './DrawerHeader';

const framer = {
    transition: {
        duration: 0.15,
        ease: 'easeInOut',
    },
    initial: {
        left: {
            x: '-100%',
        },
        right: {
            x: '100%',
        },
        top: {
            y: '-100%',
        },
        bottom: {
            y: '100%',
        },
    },
    exit: {
        left: {
            x: '-100%',
        },
        right: {
            x: '100%',
        },
        top: {
            y: '-100%',
        },
        bottom: {
            y: '100%',
        },
    },
    animate: {
        y: 0,
        x: 0,
    },
};

const anchorXBase = {
    top: 0,
    width: 300,
    height: '100%',
};

const anchorYBase = {
    left: 0,
    width: '100%',
    height: 300,
};

const getPosition = (anchor: DrawerAnchor) => {
    switch (anchor) {
        case 'top':
            return {
                ...anchorYBase,
                top: 0,
            };
        case 'bottom':
            return {
                ...anchorYBase,
                bottom: 0,
            };
        case 'right':
            return {
                ...anchorXBase,
                right: 0,
            };
        case 'left':
        default:
            return {
                ...anchorXBase,
                left: 0,
            };
    }
};

const DrawerContent = styled.div`
    padding: ${({ theme: { spacing } }) => spacing['16']};
`;

const DrawerContainer = styled(motion.div)<{
    anchor: DrawerAnchor;
}>`
    position: fixed;
    box-sizing: border-box;
    ${({ anchor }) => getPosition(anchor)};
    background-color: ${({ theme: { drawer } }) => drawer.backgroundColor};
    z-index: ${({ theme: { zIndex } }) => zIndex.drawer};
    color: ${({ theme: { drawer } }) => drawer.color};
`;

const Drawer = ({
    children,
    onClose,
    anchor = 'left',
    open = false,
    title,
}: DrawerProps) => {
    return (
        <>
            <AnimatePresence>
                {open && (
                    <DrawerContainer
                        anchor={anchor}
                        transition={framer.transition}
                        initial={framer.initial[anchor]}
                        exit={framer.exit[anchor]}
                        animate={framer.animate}
                    >
                        <DrawerHeader onClose={onClose}>
                            {title && title}
                        </DrawerHeader>
                        <DrawerContent>{children}</DrawerContent>
                    </DrawerContainer>
                )}
            </AnimatePresence>
            <Backdrop open={open} onClick={onClose} />
        </>
    );
};

export default Drawer;
