'use client';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

type LabelProps = {
    required?: boolean;
    disabled?: boolean;
    htmlFor?: string;
    children: React.ReactNode | React.ReactNode[];
};

// Define the LabelRoot styled component
const LabelRoot = styled.label<LabelProps>`
    /* Set base styles for all labels */
    display: block;
    font-size: ${({ theme: { fontSize } }) => `${fontSize[-1]}`};
    margin: ${({ theme: { spacing } }) => `0 0 ${spacing[4]}`};

    /* Add asterisk to required labels */
    &::after {
        content: ${({ required }) => (required ? "'*'" : "''")};
        padding-left: ${({ theme: { spacing } }) => spacing[4]};
    }

    /* Set styles for disabled labels */
    ${({ disabled, theme: { input } }) => {
        if (disabled) {
            return css`
                color: ${input.disabled.color};
            `;
        }
    }}
`;

// Define the Label component
const Label = forwardRef<HTMLLabelElement, LabelProps>(
    (props, forwardedRef) => {
        const { required, disabled, htmlFor, children, ...baseProps } = props;
        return (
            <LabelRoot
                {...baseProps}
                ref={forwardedRef}
                htmlFor={htmlFor}
                required={required}
                disabled={disabled}
            >
                {children}
            </LabelRoot>
        );
    }
);

Label.displayName = 'Label';
export default Label;
