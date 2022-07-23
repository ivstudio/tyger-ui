import { AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MdClose as CloseIcon } from 'react-icons/md';
import useClickOutside from '../../hooks/useClickOutside';

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
    ModalRoot,
} from './Modal.styles';

export type TScroll = 'body' | 'paper';
interface IModal {
    children?: React.ReactNode | React.ReactNode[];
    parent?: HTMLElement;
    open: boolean;
    maxWidth?: TBreakpointKey;
    fullWidth?: boolean;
    onClose: () => void;
    onBackdropClick?: () => void;
    disableBackdropClick?: boolean;
    scroll?: TScroll;
}

interface IModalHeader {
    title?: string;
    onClose?: () => void;
}

const ModalHeader = ({ title, onClose }: IModalHeader) => (
    <ModalHeaderRoot>
        <Typography tag="h2" variant="subheading1" weight="600" mb="0">
            {title}
        </Typography>
        <IconButton onClick={onClose}>
            <CloseIcon />
        </IconButton>
    </ModalHeaderRoot>
);

const Modal = ({
    children,
    open,
    maxWidth = 'md',
    fullWidth = false,
    onBackdropClick,
    disableBackdropClick = false,
    scroll = 'paper',
}: IModal) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleBackdrop = () => {
        if (disableBackdropClick || !onBackdropClick || fullWidth) return;
        onBackdropClick();
    };

    useClickOutside(modalRef, handleBackdrop);

    if (!mounted) {
        return null;
    }

    const ModalBase = (
        <AnimatePresence>
            {open && (
                <ModalRoot>
                    <ModalContainer scroll={scroll}>
                        <ModalPaper
                            ref={modalRef}
                            role="dialog"
                            key="paper"
                            maxWidth={maxWidth}
                            fullWidth={fullWidth}
                            scroll={scroll}
                            {...framerProps}
                        >
                            {children}
                        </ModalPaper>
                    </ModalContainer>
                    {!fullWidth && <Backdrop open={open} zindex="-1" />}
                </ModalRoot>
            )}
        </AnimatePresence>
    );

    const portalElem = document.querySelector('#portal');
    return portalElem ? createPortal(ModalBase, portalElem) : null;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
export default Modal;
