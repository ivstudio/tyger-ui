import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@tyger-ui/system';
import React from 'react';

const rootElement = document.getElementById('root');
render(
    <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    rootElement
);
