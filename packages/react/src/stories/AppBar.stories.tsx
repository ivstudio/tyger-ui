import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import AppBar from '../components/AppBar';
import Container from '../components/Container';
import { xlTextFixture } from '../../test/fixtures';

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
            <Container mt="64">
                {[1, 2, 3, 4, 5].map(i => (
                    <Container key={i} mb="16" maxWidth="xs">
                        {xlTextFixture}
                    </Container>
                ))}
            </Container>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    children: 'Logo',
    position: 'fixed',
};
