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
        label: {
            control: { type: 'text' },
        },
        helperText: {
            control: { type: 'text' },
        },
        id: {
            control: { type: 'text' },
            defaultValue: 'yourId',
            description: 'Element id',
        },
        placeholder: {
            control: { type: 'text' },
        },
        required: { control: { type: 'boolean' } },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => {
    const [{ checked }, updateArgs] = useArgs();
    console.log('args', args);
    return <Input {...args} onChange={() => console.log('update')} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'First Name',
    placeholder: 'First Name',
    id: 'firstName',
};

export const Validation = Template.bind({});
Validation.args = {
    label: 'Password',
    placeholder: 'Password',
    error: true,
    required: true,
    id: 'password',
    helperText: 'The password must have a minimum length of 8 characters.',
};
