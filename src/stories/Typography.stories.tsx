import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from '../components/Box';
import { SBList } from './sb.styles';

import Typography from '../components/Typography';

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
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
    <Typography {...args}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
    </Typography>
);

export const Types = Template.bind({});

export const TypographyVariants = () => (
    <Box px="16">
        <Typography variant="lead">Typography</Typography>
        <Typography variant="subheading" mb="32" maxWidth={640}>
            Documentation and typography examples, including global settings,
            headings, variants, and more.
        </Typography>

        <Typography variant="title">Headings</Typography>
        <Typography mb="32">
            All HTML headings, h1 through h6, are available.
        </Typography>

        <Box p="16" mb="32" border borderRadius>
            <Typography tag="h1">h1 Heading</Typography>
            <Typography tag="h2">h2 Heading</Typography>
            <Typography tag="h3">h3 Heading</Typography>
            <Typography tag="h4">h4 Heading</Typography>
            <Typography tag="h5">h5 Heading</Typography>
            <Typography tag="h6">h6 Heading</Typography>
        </Box>

        <Typography variant="title">Variants</Typography>
        <Typography mb="32">
            All variants can have a semantic tag value and font-weight
            variation.
        </Typography>

        <Box p="16" mb="32" border borderRadius>
            <Typography variant="body">body</Typography>
            <Typography variant="body1">body1</Typography>
            <Typography variant="lead">lead</Typography>
            <Typography variant="title">title</Typography>
            <Typography variant="subheading">subheading</Typography>
            <Typography variant="subheading1">subheading1</Typography>
            <Typography variant="label">label</Typography>
            <Typography variant="footnote">footnote</Typography>
        </Box>
    </Box>
);
TypographyVariants.story = {
    name: 'Typography variants',
    parameters: {
        options: { showPanel: false },
    },
};
