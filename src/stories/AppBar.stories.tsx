import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import AppBar from '../components/AppBar';

export default {
    title: 'Surfaces/AppBar',
    component: AppBar,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
        layout: 'fullscreen',
    },
    argTypes: {},
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = args => {
    return (
        <>
            <AppBar {...args}>{args.children}</AppBar>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {};
