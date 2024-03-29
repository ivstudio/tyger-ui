import React, { useState } from 'react';
import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, GlobalStyles, darkTheme } from '@tyger-ui/react';

const rootElement = document.getElementById('root');

const Root = () => {
	const [isDefaultTheme, setTheme] = useState(true);
	return (
		<React.StrictMode>
			<ThemeProvider theme={isDefaultTheme ? lightTheme : darkTheme}>
				<GlobalStyles />
				<App
					isDefaultTheme={isDefaultTheme}
					onChangeTheme={() => setTheme(!isDefaultTheme)}
				/>
			</ThemeProvider>
		</React.StrictMode>
	);
};

render(<Root />, rootElement);
