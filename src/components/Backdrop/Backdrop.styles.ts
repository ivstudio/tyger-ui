import { motion } from 'framer-motion';
import styled from 'styled-components';

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
