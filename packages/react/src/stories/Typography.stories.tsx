import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Box from '../components/Box';
import Typography from '../components/Typography';
import { StoryHeadline, StoryTitleSection } from './components';
import Container from '../components/Container';

export default {
    title: 'Data Display/Typography',
    component: Typography,
    parameters: { options: { showPanel: true } },
    argTypes: {
        variant: {
            control: {
                type: 'select',
                defaultValue: 'body',
            },
        },
        className: { control: false },
    },
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = args => (
    <Container maxWidth="xs" mt="32">
        <Typography {...args}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </Typography>
    </Container>
);

export const Docs = () => (
    <Container maxWidth="md" mt="32">
        <Box px="16">
            <StoryHeadline
                title="Typography"
                subTitle="Documentation and typography examples, including global settings,
            headings, variants, and more."
            />

            <StoryTitleSection
                title="Headings"
                description="All HTML headings, h1 through h6, are available."
            />
            <Box padding="16" mb="48" border borderRadius>
                <Typography tag="h1">h1 Heading</Typography>
                <Typography tag="h2">h2 Heading</Typography>
                <Typography tag="h3">h3 Heading</Typography>
                <Typography tag="h4">h4 Heading</Typography>
                <Typography tag="h5">h5 Heading</Typography>
                <Typography tag="h6">h6 Heading</Typography>
            </Box>

            <StoryTitleSection
                title="Variants"
                description="All variants can have a semantic tag value and font-weight
            variation."
            />
            <Box padding="16" mb="48" border borderRadius>
                <Typography variant="display">display</Typography>
                <Typography variant="lead">lead</Typography>
                <Typography variant="title">title</Typography>
                <Typography variant="subheading">subheading</Typography>
                <Typography variant="subheading1">subheading1</Typography>
                <Typography variant="body">body</Typography>
                <Typography variant="body1">body1</Typography>
                <Typography variant="label">label</Typography>
                <Typography variant="footnote">footnote</Typography>
            </Box>
        </Box>
    </Container>
);
Docs.story = {
    name: 'Typography variants',
    parameters: {
        options: { showPanel: false },
    },
};
export const Types = Template.bind({});
