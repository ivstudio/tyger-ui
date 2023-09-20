import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Chip from '../components/Chip';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainer, SBContainerInline } from './sb.styles';
import Container from '../components/Container';
import Box from '../components/Box';

export default {
    title: 'Data Display/Chip',
    component: Chip,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        variant: {
            control: { type: 'select', options: ['filled', 'outlined'] },
            defaultValue: 'filled',
        },
        size: {
            control: { type: 'select', options: ['sm', 'md'] },
            defaultValue: 'md',
        },
        id: {
            control: { type: 'text' },
            defaultValue: 'yourId',
        },
        label: { control: 'text', defaultValue: 'Chip' },
        tag: {
            control: { type: 'select', options: ['span', 'div', 'button'] },
            defaultValue: 'span',
        },
        disabled: { control: 'boolean', defaultValue: false },
        className: { control: false },
    },
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = args => (
    <Container maxWidth="md" mt="32">
        <Chip {...args} label={`Chip ${args.variant}`} />
    </Container>
);

export const Docs = () => (
    <Container maxWidth="md" mt="32">
        <StoryHeadline
            title="Chip"
            subTitle="Chips are used to make selections, filter content, or trigger
            actions."
        />

        <StoryTitleSection
            title="Variants"
            description="The Chip component provides outlined and filled variants."
        />
        <SBContainerInline padding="16" mb="48" flex border borderRadius>
            <Box mr="16">
                <Chip variant="filled" label="Chip filled" />
            </Box>
            <Box mr="16">
                <Chip variant="outlined" label="Chip filled" />
            </Box>
        </SBContainerInline>

        <StoryTitleSection
            title="Size"
            description="You can use the size prop to define a small size."
        />
        <SBContainerInline padding="16" mb="48" flex border borderRadius>
            <Box mr="16">
                <Chip size="sm" label="Chip filled" />
            </Box>
            <Box mr="16">
                <Chip label="Chip filled" />
            </Box>
        </SBContainerInline>
    </Container>
);

Docs.story = {
    name: 'Chip Variants',
    parameters: {
        options: { showPanel: false },
    },
};

export const Filled = Template.bind({});
Filled.args = {
    variant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};
