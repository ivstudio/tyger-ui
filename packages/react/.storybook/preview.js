import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';
import { darkTheme, lightTheme } from '../../theming/src/index';

import GlobalStyles from '../src/styles/globalStyles';

addDecorator(withThemesProvider([darkTheme, lightTheme]));
addDecorator(style => (
    <>
        <GlobalStyles />
        {style()}
    </>
));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: [
                'Intro',
                'Components',
                'Data Display',
                'Feedback',
                'Surfaces',
                'Navigation',
                '*',
            ],
        },
    },
};
