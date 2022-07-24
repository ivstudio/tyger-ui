import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, darkPalette } from '../src/theme/theme';
import GlobalStyles from '../src/styles/globalStyles';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
