import { MdChevronLeft as BackIcon } from 'react-icons/md';
import styled from 'styled-components';

import { flexCenterAll } from '../../styles';
import IconButton from '../IconButton';

interface IDrawerHeader {
    children?: React.ReactNode | React.ReactNode[];
    onClose?: () => void;
}

const DrawerHeaderRoot = styled.header`
    height: 50px;
    ${flexCenterAll};
    position: relative;
    box-sizing: border-box;
    padding: ${({ theme: { spacing } }) => `0 ${spacing['16']}`};
    border-bottom: 1px solid
        ${({ theme: { background } }) => background.primary};
`;

const DrawerCloseButton = styled(IconButton)`
    position: absolute;
    right: ${({ theme: { spacing } }) => spacing['16']};
`;

const DrawerHeader = ({ children, onClose }: IDrawerHeader) => {
    return (
        <DrawerHeaderRoot>
            <DrawerCloseButton onClick={onClose}>
                <BackIcon />
            </DrawerCloseButton>

            {children && children}
        </DrawerHeaderRoot>
    );
};

export default DrawerHeader;
