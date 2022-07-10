import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { TBreakpointKey } from '../../styles/mediaQueries';
import Backdrop from '../Backdrop';
import {
    framerProps,
    ModalContainer,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalPaper,
} from './Modal.styles';

interface IModal {
    title?: string;
    description?: string;
    children?: React.ReactNode | React.ReactNode[];
    parent?: HTMLElement;
    open: boolean;
    maxWidth?: TBreakpointKey;
    fullWidth?: boolean;
    onClose: () => void;
    onBackdropClick?: () => void;
    disableBackdropClick?: boolean;
}

const Modal = ({
    title,
    description,
    children,
    open,
    maxWidth = 'md',
    fullWidth = false,
    onBackdropClick,
    disableBackdropClick = false,
}: IModal) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleBackdropClick = () => {
        if (disableBackdropClick || !onBackdropClick) return;
        onBackdropClick();
    };

    if (!mounted) {
        return null;
    }

    const ModalRoot = (
        <>
            <AnimatePresence>
                {open && (
                    <ModalContainer
                        aria-labelledby={title}
                        aria-describedby={description}
                        maxWidth={maxWidth}
                        fullWidth={fullWidth}
                    >
                        <ModalPaper
                            key="paper"
                            fullWidth={fullWidth}
                            {...framerProps}
                        >
                            {title && <ModalHeader>{title}</ModalHeader>}
                            <ModalContent>{children}</ModalContent>
                            <ModalFooter>footer</ModalFooter>
                        </ModalPaper>
                    </ModalContainer>
                )}
            </AnimatePresence>

            {open && <Backdrop open={open} onClick={handleBackdropClick} />}
        </>
    );

    const portalElem = document.querySelector('#portal');
    return portalElem ? createPortal(ModalRoot, portalElem) : null;
};

export default Modal;
