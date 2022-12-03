import { useClickOutside } from '@tyger-ui/hooks';
import { TBreakpointKey } from '@tyger-ui/system/src/mediaQueries';
import { AnimatePresence } from 'framer-motion';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MdClose as CloseIcon } from 'react-icons/md';

import Backdrop from '../Backdrop';
import IconButton from '../IconButton';
import Typography from '../Typography';
import {
    framerProps,
    ModalBody,
    ModalContainer,
    modalElem,
    ModalFooter,
    ModalHeaderRoot,
    ModalPaper,
    ModalRoot,
} from './Modal.styles';

export type TScroll = 'body' | 'paper';
interface IModal {
    children?: JSX.Element | JSX.Element[];
    parent?: HTMLElement;
    open: boolean;
    maxWidth?: TBreakpointKey;
    fullWidth?: boolean;
    onClose?: () => void;
    onBackdropClick?: () => void;
    scroll?: TScroll;
    headerBorder?: boolean;
    footerBorder?: boolean;
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
    onClose,
    onBackdropClick,
    scroll = 'paper',
    headerBorder = true,
    footerBorder = true,
}: IModal) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleBackdrop = () => {
        if (onBackdropClick && !fullWidth) {
            onBackdropClick();
        }

        if (onClose) {
            onClose();
        }
    };

    useClickOutside(modalRef, handleBackdrop);

    if (!mounted) {
        return null;
    }

    const body = Children.map(children, child => {
        if (!child) return null;

        if (child.type?.displayName === modalElem.body) {
            return cloneElement(child, {
                borderTop: headerBorder,
                borderBottom: footerBorder,
            });
        }

        return child;
    });

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
                            {body}
                        </ModalPaper>
                    </ModalContainer>
                    {!fullWidth && <Backdrop open={open} zIndex="-1" />}
                </ModalRoot>
            )}
        </AnimatePresence>
    );

    const portalElem = document.querySelector('body');
    return portalElem ? createPortal(ModalBase, portalElem) : null;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
export default Modal;
