import { css } from 'styled-components';

export const flexCenterAll = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const flexCenterInline = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const backgroundTransition = css`
    transition: background-color 0.25s ease, color 0.25s ease;
`;

export const buttonBase = css`
    user-select: none;
    appearance: none;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    outline: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    white-space: nowrap;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    ${backgroundTransition};

    &:disabled {
        pointer-events: none;
    }
`;
