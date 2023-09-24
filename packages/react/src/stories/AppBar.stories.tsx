import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import AppBar from '../components/AppBar';
import HideOnScrollComponent from '../components/HideOnScroll';
import Container from '../components/Container';
import Box from '../components/Box';
import { longParagraph, sentence, title } from '../../test/fixtures';
import Typography from '../components/Typography';
import { SubscribeForm } from './components';
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
    <Container mt={top} maxWidth="md" paper padding="32" borderRadius>
        <Typography tag="h1" variant="h1" mb="0">
            {title}
        </Typography>
        <Typography variant="subheading" mb="24">
            {sentence}
        </Typography>
        <Box mb="16">{longParagraph}</Box>
        <SubscribeForm />
        {[1, 2, 3, 4, 5].map(i => (
            <Box key={i} mb="16">
                {longParagraph}
            </Box>
        ))}
    </Container>
);

const Template: StoryFn<typeof AppBar> = args => {
    const top = args.position === 'fixed' ? '80' : '32';
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
    const top = args.position === 'fixed' ? '64' : '32';
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
