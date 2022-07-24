import React, { ReactElement, FC } from 'react';
import { render, fireEvent, RenderOptions } from '@testing-library/react';
import Button from './Button';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, darkPalette } from '../../theme/theme';
import GlobalStyles from '../../styles/globalStyles';
// import '../../theme/style';

const clickHandler = jest.fn();

// interface TWrapper {
//     children: JSX.Element | JSX.Element[];
// }

// const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
//     return <ThemeProvider theme="light">{children}</ThemeProvider>;
// };

// const customRender = (
//     ui: ReactElement,
//     options?: Omit<RenderOptions, 'wrapper'>
// ) => render(ui, { wrapper: AllTheProviders, ...options });

// function Wrapper({ children }: TWrapper) {
//     return (
//         <ThemeProvider theme={darkTheme}>
//             <>
//                 <GlobalStyles />
//                 {children}
//             </>
//         </ThemeProvider>
//     );
// }

describe('Button', () => {
    it('renders the Button', () => {
        const { container } = render(
            <StyledThemeProvider theme={darkTheme}>
                <Button onClick={clickHandler}>Button</Button>
            </StyledThemeProvider>
        );
        expect(container.firstChild).toMatchInlineSnapshot();
    });
});
