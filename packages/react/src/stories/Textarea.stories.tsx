import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import Textarea from '../components/Textarea';
import Container from '../components/Container';
import Box from '../components/Box';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainer, SBContainerInline } from './sb.styles';
import TextareaAutosize from '../components/TextareaAutosize';
import { longParagraph } from '../../test/fixtures';

export default {
    title: 'Components/Textarea',
    component: Textarea,
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
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = args => {
    const [{ checked }, updateArgs] = useArgs();
    return (
        <Container maxWidth="xs" mt="32">
            <Textarea {...args} autoComplete="off" />
        </Container>
    );
};

export const Docs = () => (
    <Container mt="32" maxWidth="md" paper padding="32" borderRadius>
        <StoryHeadline
            title="Textarea"
            subTitle="A text area lets users enter long form text which spans over multiple lines."
        />

        <StoryTitleSection title="Basic Textarea" />
        <Container padding="24" mb="48" border borderRadius>
            <Container maxWidth="xs" mb="16">
                <Textarea
                    label="Share your feedback"
                    placeholder="Add a message here"
                    id="feedback"
                    autoComplete="off"
                    tabIndex={1}
                    rows={3}
                    size="lg"
                />
            </Container>
        </Container>

        <StoryTitleSection
            title="Textarea Autosize"
            description="The Textarea Autosize component provides you with a textarea HTML element that seamlessly adapts its height to precisely match the length of the content contained within it."
        />
        <Container padding="24" mb="48" border borderRadius>
            <Container maxWidth="xs" mb="16">
                <TextareaAutosize
                    id="feedbackAutosize"
                    label="Share your feedback"
                    placeholder="Add a message here"
                    required
                    spellCheck={false}
                    minRows={1}
                />
            </Container>
        </Container>

        <StoryTitleSection title="Validation" />
        <Container padding="24" mb="48" border borderRadius>
            <Container maxWidth="xs" mb="16">
                <TextareaAutosize
                    id="feedbackAutosize"
                    label="Share your feedback"
                    placeholder="Add a message here"
                    required
                    error
                    spellCheck={false}
                    minRows={3}
                    helperText="Please enter a message."
                />
            </Container>
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
};

export const Validation = Template.bind({});
Validation.args = {
    label: 'Share your feedback',
    placeholder: 'Add a message here',
    error: true,
    required: true,
    id: 'feedback',
    helperText: 'Please enter a message',
};
