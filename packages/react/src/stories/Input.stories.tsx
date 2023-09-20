import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import Input from '../components/Input';
import Container from '../components/Container';
import Box from '../components/Box';
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
        <Container maxWidth="xs" mt="32">
            <Input {...args} autoComplete="off" />
        </Container>
    );
};

export const Docs = () => (
    <Container maxWidth="md" mt="32">
        <StoryHeadline
            title="Input"
            subTitle="Input fields are commonly used in forms, search bars, and various types of user input areas to collect text, numbers, or other types of data from the user."
        />

        <Container maxWidth="md" mt="32">
            <SBContainerInline padding="32" mb="48" border borderRadius>
                <Box mb="16">
                    <Input
                        required
                        label="First Name"
                        placeholder="First Name"
                        id="firstName"
                        autoComplete="off"
                        tabIndex={1}
                        size="lg"
                    />
                </Box>
                <Input
                    label="Last Name"
                    placeholder="Last Name"
                    id="lastName"
                    autoComplete="off"
                    tabIndex={2}
                    size="lg"
                />
            </SBContainerInline>
        </Container>
    </Container>
);

Docs.story = {
    name: 'Button Variants',
    parameters: {
        options: { showPanel: false },
    },
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
