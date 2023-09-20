import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import AppBar from '../components/AppBar';
import HideOnScrollComponent from '../components/HideOnScroll';
import Container from '../components/Container';
import { xlTextFixture } from '../../test/fixtures';
const tygerLogo =
    'https://tyger.s3.us-west-2.amazonaws.com/assets/tyger-logo.svg';

export default {
    title: 'Surfaces/AppBar',
    component: AppBar,
    parameters: {
        options: {
            showPanel: true,
        },
        controls: { sort: 'requiredFirst' },
        layout: 'fullscreen',
    },
    argTypes: {
        position: {
            control: {
                type: 'select',
                options: ['fixed', 'static', 'sticky'],
            },
        },
    },
} as Meta<typeof AppBar>;

const Content = ({ top }) => (
    <Container mt={top}>
        {[1, 2, 3, 4, 5].map(i => (
            <Container key={i} mb="16" maxWidth="sm">
                {xlTextFixture}
            </Container>
        ))}
    </Container>
);

const Template: StoryFn<typeof AppBar> = args => {
    const top = args.position === 'fixed' ? '64' : '16';
    return (
        <>
            <AppBar {...args}>
                <img src={tygerLogo} width={70} />
            </AppBar>
            <Content top={top} />
        </>
    );
};

const TemplateHideOnScroll: StoryFn<typeof AppBar> = args => {
    const top = args.position === 'fixed' ? '64' : '16';
    return (
        <>
            <HideOnScrollComponent>
                <AppBar {...args}>
                    <img src={tygerLogo} width={70} />
                </AppBar>
            </HideOnScrollComponent>
            <Content top={top} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    position: 'static',
};

export const PositionFixed = Template.bind({});
PositionFixed.args = {
    position: 'fixed',
};

export const HideOnScroll = TemplateHideOnScroll.bind({});
HideOnScroll.args = {};
