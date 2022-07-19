import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { MdClose as CloseIcon } from 'react-icons/md';

import { TBreakpointKey } from '../../styles';
import Backdrop from '../Backdrop';
import IconButton from '../IconButton';
import Typography from '../Typography';
import {
    framerProps,
    ModalBody,
    ModalContainer,
    ModalFooter,
    ModalHeaderRoot,
    ModalPaper,
} from './Modal.styles';

interface IModal {
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

interface IModalHeader {
    title?: string;
    onClose?: () => void;
}

const ModalHeader = ({ title, onClose }: IModalHeader) => (
    <ModalHeaderRoot aria-labelled={title}>
        <Typography tag="h2" variant="subheading" mb="0">
            {title}
        </Typography>
        <IconButton onClick={onClose}>
            <CloseIcon />
        </IconButton>
    </ModalHeaderRoot>
);

const Modal = ({
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
                        aria-described={description}
                        maxWidth={maxWidth}
                        fullWidth={fullWidth}
                    >
                        <ModalPaper
                            key="paper"
                            fullWidth={fullWidth}
                            {...framerProps}
                        >
                            {children}
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

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
export default Modal;
