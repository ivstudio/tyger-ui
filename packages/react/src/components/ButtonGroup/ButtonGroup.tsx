'use client';
import { Children, cloneElement, isValidElement } from 'react';
import styled, { css } from 'styled-components';

import { ButtonGroupProps, ButtonRootProps } from './ButtonGroup.types';

const buttonCommonStyles = css`
    text-transform: none;
`;

export const ButtonGroupRoot = styled.div<ButtonRootProps>`
    display: inline-flex;
    box-sizing: border-box;

    ${({ orientation, theme }) => {
        const borderColor =
            theme.name === 'Dark'
                ? 'rgba(0, 0, 0, 0.23)'
                : 'rgba(255, 255, 255, 0.23)';

        return orientation === 'vertical'
            ? css`
                  flex-direction: column;
                  & .first {
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                      border-bottom: ${`1px solid ${borderColor}`};
                      ${buttonCommonStyles};
                  }
                  & .center {
                      border-radius: 0;
                      border-bottom: ${`1px solid ${borderColor}`};
                      ${buttonCommonStyles};
                  }
                  & .last {
                      border-top-left-radius: 0;
                      border-top-right-radius: 0;
                      ${buttonCommonStyles};
                  }
              `
            : css`
                  & .first {
                      border-top-right-radius: 0;
                      border-bottom-right-radius: 0;
                      border-right: ${`1px solid ${borderColor}`};
                      ${buttonCommonStyles};
                  }
                  & .center {
                      border-radius: 0;
                      border-right: ${`1px solid ${borderColor}`};
                      ${buttonCommonStyles};
                  }
                  & .last {
                      border-top-left-radius: 0;
                      border-bottom-left-radius: 0;
                      ${buttonCommonStyles};
                  }
              `;
    }};
`;

const ButtonGroup = ({
    children,
    orientation = 'horizontal',
}: ButtonGroupProps) => {
    if (!Array.isArray(children) || children.length === 0) {
        return null;
    }

    const buttons = Children.map(children, (child, index) => {
        if (!isValidElement(child)) return null;

        return cloneElement(child, {
            ...child.props,
            className:
                index === 0
                    ? 'first'
                    : index === children.length - 1
                    ? 'last'
                    : 'center',
        });
    });

    return (
        <ButtonGroupRoot orientation={orientation}>{buttons}</ButtonGroupRoot>
    );
};

export default ButtonGroup;
