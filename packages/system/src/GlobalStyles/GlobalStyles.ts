import { createGlobalStyle } from 'styled-components';

import { TTheme } from '../theme/theme';
import { normalize } from './normalize';

const GlobalStyles = createGlobalStyle<{ theme: TTheme }>`

${normalize};

/* TYGER GLOBAL ==================== */
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

html {
  font-size: 16px;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  background-color: ${({ theme }) => theme && theme?.backgroundColor};
  color: ${({ theme }) => theme && theme.text?.primary};
}
`;

export default GlobalStyles;
