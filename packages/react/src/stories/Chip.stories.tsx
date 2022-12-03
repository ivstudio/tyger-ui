import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Chip from '../components/Chip';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainer, SBContainerInline } from './sb.styles';

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
Filled.args = {
    variant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};

export const ChipVariants = () => (
    <SBContainer>
        <StoryHeadline
            title="Chip"
            subTitle="Chips are used to make selections, filter content, or trigger
            actions."
        />

        <StoryTitleSection
            title="Variants"
            description="The Chip component provides outlined and filled variants."
        />
        <SBContainerInline padding="16" mb="48" border borderRadius>
            <Chip variant="filled" label="Chip filled" />
            <Chip variant="outlined" label="Chip filled" />
        </SBContainerInline>

        <StoryTitleSection
            title="Size"
            description="You can use the size prop to define a small size."
        />
        <SBContainerInline padding="16" mb="48" border borderRadius>
            <Chip size="sm" label="Chip filled" />
            <Chip label="Chip filled" />
        </SBContainerInline>
    </SBContainer>
);

ChipVariants.story = {
    name: 'Chip Variants',
    parameters: {
        options: { showPanel: false },
    },
};
