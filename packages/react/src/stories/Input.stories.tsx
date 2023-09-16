import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import Input from '../components/Input';
import { InputSizes } from '../components/Input/Input.types';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainer, SBContainerInline } from './sb.styles';

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            defaultValue: 'md',
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        error: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        id: {
            control: { type: 'text' },
            defaultValue: 'yourId',
            description: 'Element id',
        },
        placeholder: {
            control: { type: 'text' },
            defaultValue: 'First Name',
        },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => {
    const [{ checked }, updateArgs] = useArgs();
    console.log('args', args);
    return <Input {...args} onChange={() => console.log('update')} />;
};

export const Default = Template.bind({});
Default.args = {};
