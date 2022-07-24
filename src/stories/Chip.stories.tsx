import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Chip, { TSize } from '../components/Chip';
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

export const AllChipSizes = () => (
    <SBList>
        {['sm', 'md'].map(item => (
            <li key={item}>
                <Chip size={item as TSize} label="Chip filled" />
            </li>
        ))}
    </SBList>
);

AllChipSizes.story = {
    name: 'All Chip Sizes',
    parameters: {
        options: { showPanel: false },
    },
};
