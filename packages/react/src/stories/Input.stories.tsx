import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import Input from '../components/Input';
import Container from '../components/Container';
import Box from '../components/Box';
import { StoryHeadline, StoryTitleSection } from './components';
import { MdDone, MdSearch } from 'react-icons/md';
import { SubscribeForm } from './components';
import { color } from '@tyger-ui/system';

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
            defaultValue: 'lg',
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
    <Container mt="32" maxWidth="md" paper padding="32" borderRadius>
        <StoryHeadline
            title="Input"
            subTitle="Input fields are commonly used in forms, search bars, and various types of user input areas to collect text, numbers, or other types of data from the user."
        />

        <StoryTitleSection title="Basic Input" />
        <Container padding="24" mb="48" border borderRadius>
            <Container maxWidth="xs">
                <Box mb="24">
                    <Input
                        required
                        value="John Doe"
                        autoComplete="off"
                        type="text"
                        label="First Name"
                        placeholder="First Name"
                    />
                </Box>
                <Box mb="24">
                    <Input
                        value="yoursecurepassword"
                        disabled
                        type="password"
                        label="Password"
                        placeholder="Password"
                        helperText="The user name cannot be changed."
                    />
                </Box>
            </Container>
        </Container>

        <StoryTitleSection
            title="Icons"
            description="Inputs can include elements both before and after the input itself."
        />

        <Container padding="24" mb="48" border borderRadius>
            <Container maxWidth="xs">
                <Box mb="24">
                    <Input
                        autoComplete="off"
                        startAdornment={<MdSearch size="24" />}
                        placeholder="Search"
                    />
                </Box>
                <Box mb="24">
                    <Input
                        value="Password"
                        autoComplete="off"
                        type="password"
                        label="Password"
                        endAdornment={
                            <MdDone color={color.positive[5]} size="24" />
                        }
                        placeholder="Password"
                        readOnly
                        helperText="The password cannot be changed."
                    />
                </Box>
            </Container>
        </Container>

        <StoryTitleSection
            title="Validation"
            description="The error prop toggles the error state. The helperText prop can then be used to provide feedback to the user about the error."
        />
        <Container padding="24" mb="48" flex border borderRadius>
            <Input
                value="johndoe@gmail"
                error
                type="text"
                label="Email"
                placeholder="email"
                helperText="Please enter a valid email address."
            />
        </Container>

        <Container maxWidth="md" mt="32">
            <SubscribeForm />
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

export const Adornment = Template.bind({});
Adornment.args = {
    label: 'Password',
    placeholder: 'Password',
    required: true,
    id: 'password',
    helperText: 'The password must have a minimum length of 8 characters.',
    endAdornment: <MdDone color={color.positive[5]} size="24" />,
};
