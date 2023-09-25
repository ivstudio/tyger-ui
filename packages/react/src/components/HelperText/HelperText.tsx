import React from 'react';
import styled from 'styled-components';

import Typography from '../Typography';

type HelperTextProps = {
    children: React.ReactNode | React.ReactNode[];
    error?: boolean;
    anchor?: 'bottom' | 'left';
};

const HelperTextComponent = styled(Typography)<HelperTextProps>`
    color: ${({ theme: { text }, error }) => {
        return error ? text.error : text.label;
    }};
    margin-top: ${({ theme: { spacing }, anchor }) =>
        anchor === 'bottom' ? spacing[8] : '0'};
`;

const HelperText = ({
    children,
    error = false,
    anchor = 'bottom',
}: HelperTextProps) => {
    return (
        <HelperTextComponent variant="footnote" error={error} anchor={anchor}>
            {children}
        </HelperTextComponent>
    );
};

export default HelperText;
