/* eslint-disable import/named */
/* eslint-disable import/export */
import '@testing-library/jest-dom';

import { render, RenderOptions } from '@testing-library/react';
import type { Theme } from '@tyger-ui/system';
import { darkTheme, GlobalStyles } from '@tyger-ui/system';
import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const AllTheProviders: FC<{ children: React.ReactNode; theme?: Theme }> = ({
    children,
    theme = darkTheme,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                {children}
            </>
        </ThemeProvider>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
