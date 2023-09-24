import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import TextareaAutosize from '../components/TextareaAutosize';
import Container from '../components/Container';
import Box from '../components/Box';
import { StoryHeadline } from './components';
import { SBContainerInline } from './sb.styles';

export default {
    title: 'Components/Textarea/TextareaAutosize',
    component: TextareaAutosize,
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
} as Meta<typeof TextareaAutosize>;

const Template: StoryFn<typeof TextareaAutosize> = args => {
    const [{ checked }, updateArgs] = useArgs();
    return (
        <Container maxWidth="xs" mt="32">
            <TextareaAutosize {...args} autoComplete="off" />
        </Container>
    );
};

export const Docs = () => (
    <Container maxWidth="md" mt="32">
        <StoryHeadline
            title="Textarea"
            subTitle="A text area lets users enter long form text which spans over multiple lines."
        />

        <Container maxWidth="md" mt="32">
            <SBContainerInline padding="32" mb="48" border borderRadius>
                <Box mb="16">
                    <TextareaAutosize
                        label="Share your feedback"
                        placeholder="Add a message here"
                        id="feedback"
                        autoComplete="off"
                        tabIndex={1}
                        size="lg"
                    />
                </Box>
            </SBContainerInline>
        </Container>
    </Container>
);

Docs.story = {
    name: 'Textarea Variants',
    parameters: {
        options: { showPanel: false },
    },
};

export const BasicTextarea = Template.bind({});
BasicTextarea.args = {
    label: 'Share your feedback',
    placeholder: 'Add a message here',
    id: 'feedback',
    minRows: 3,
};

export const Validation = Template.bind({});
Validation.args = {
    label: 'Share your feedback',
    placeholder: 'Add a message here',
    error: true,
    required: true,
    id: 'feedback',
    helperText: 'Please enter a message',
    minRows: 3,
    maxRows: 6,
};