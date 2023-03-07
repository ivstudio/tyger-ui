import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'themeprovider-storybook';

import { darkTheme, lightTheme, GlobalStyles } from '@tyger-ui/system';

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
