import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Chip, { TSize } from '../components/Chip';
import Box from '../components/Box';
import Typography from '../components/Typography';
import StoryHeadline from './components/StoryHeadline';
import { SBList } from './sb.styles';

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
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => (
    <Chip {...args} label={`Chip ${args.variant}`} />
);

export const Filled = Template.bind({});
Filled.args = {};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};

export const ChipVariants = () => (
    <SBList>
        <StoryHeadline
            title="Chip"
            subTitle="Chips are used to make selections, filter content, or trigger
            actions."
        />

        <Typography variant="h3" mb="8">
            Variants
        </Typography>
        <Typography mb="16">
            The Chip component provides outlined and filled variants.
        </Typography>
        <Box p="16" mb="32" border borderRadius>
            <li>
                <Chip variant="filled" label="Chip filled" />
            </li>
            <li>
                <Chip variant="outlined" label="Chip filled" />
            </li>
        </Box>

        <Typography variant="h3" mb="8">
            Sizes
        </Typography>
        <Typography mb="16">
            You can use the size prop to define a small size.
        </Typography>
        <Box p="16" mb="32" border borderRadius>
            {['sm', 'md'].map(item => (
                <li key={item}>
                    <Chip size={item as TSize} label="Chip filled" />
                </li>
            ))}
        </Box>
    </SBList>
);

ChipVariants.story = {
    name: 'Chip Variants',
    parameters: {
        options: { showPanel: false },
    },
};
