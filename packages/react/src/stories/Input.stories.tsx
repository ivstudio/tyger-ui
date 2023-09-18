import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import Input from '../components/Input';
import Container from '../components/Container';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainer, SBContainerInline } from './sb.styles';

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'none' },
    },
    argTypes: {
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            defaultValue: 'md',
            description: 'Input size',
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'Disabled state',
        },
        error: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'Error state',
        },
        label: {
            control: { type: 'text' },
            description: 'Label',
        },
        helperText: {
            control: { type: 'text' },
            description: 'Helper text for error state',
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
        className: { control: false },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => {
    const [{ checked }, updateArgs] = useArgs();
    return (
        <Container maxWidth="xs" mt="16">
            <Input {...args} autoComplete="off" />
        </Container>
    );
};

export const BasicInput = Template.bind({});
BasicInput.args = {
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
