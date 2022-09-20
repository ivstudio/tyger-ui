import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, TTheme } from '@tyger-ui/system/src/theme/theme';
import GlobalStyles from '@tyger-ui/system/src/GlobalStyles/GlobalStyles';

const AllTheProviders: FC<{ children: React.ReactNode; theme?: TTheme }> = ({
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
