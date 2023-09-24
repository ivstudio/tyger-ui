'use client';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { spacing } from '../../../../system';

type LabelAnchor = 'top' | 'left';
type LabelSize = 'sm' | 'md' | 'lg';

type LabelProps = {
    required?: boolean;
    disabled?: boolean;
    htmlFor?: string;
    children: React.ReactNode | React.ReactNode[];
    anchor?: LabelAnchor;
    size?: LabelSize;
};

interface LabelRootProps extends LabelProps {
    size: LabelSize;
}

const labelSpacing = {
    sm: {
        margin: `0 0 ${spacing[4]}`,
    },

    md: {
        margin: `0 0 ${spacing[8]}`,
    },

    lg: {
        margin: `0 0 ${spacing[8]}`,
    },
};

// Define the LabelRoot styled component
const LabelRoot = styled.label<LabelRootProps>`
    /* Set base styles for all labels */
    display: block;
    font-size: ${({ theme: { fontSize } }) => `${fontSize[-2]}`};
    color: ${({ theme: { text } }) => text.label};
    line-height: ${({ theme: { lineHeight } }) => lineHeight['sm']};

    /* Set spacing based on label size */
    ${({ size }) => labelSpacing[size]};

    /* Add asterisk to required labels */
    &::after {
        content: ${({ required }) => (required ? "'*'" : "''")};
        padding-left: ${({ theme: { spacing } }) => spacing[4]};
    }

    /* Set styles for disabled labels */
    ${({ disabled, theme: { text } }) => {
        if (disabled) {
            return css`
                color: ${text.disabled};
            `;
        }
    }}
`;

// Define the Label component
const Label = forwardRef<HTMLLabelElement, LabelProps>(
    (props, forwardedRef) => {
        const {
            required,
            disabled,
            htmlFor,
            children,
            anchor = 'left',
            size = 'md',
            ...baseProps
        } = props;
        return (
            <LabelRoot
                {...baseProps}
                ref={forwardedRef}
                htmlFor={htmlFor}
                required={required}
                disabled={disabled}
                anchor={anchor}
                size={size}
            >
                {children}
            </LabelRoot>
        );
    }
);

Label.displayName = 'Label';
export default Label;
