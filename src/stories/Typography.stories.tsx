import { ComponentMeta, ComponentStory } from '@storybook/react';

import Typography from '../components/Typography';

export const HeadingsH1H6 = () => (
    <div>
        <Typography tag="h1">h1 Typography</Typography>
        <Typography tag="h2">h2 Typography</Typography>
        <Typography tag="h3">h3 Typography</Typography>
        <Typography tag="h4">h4 Typography</Typography>
        <Typography tag="h5">h5 Typography</Typography>
        <Typography tag="h6">h6 Typography</Typography>
    </div>
);

HeadingsH1H6.story = {
    name: 'Headings',
    parameters: {
        options: { showPanel: false },
        docs: {
            description: {
                component:
                    'Typography component using tag property h1-h6 for setting section headings',
            },
        },
    },
};

export default {
    title: 'Data Display/Typography',
    component: Typography,
    parameters: { options: { showPanel: true } },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
    <Typography {...args}>Typography: {args.variant}</Typography>
);

export const Types = Template.bind({});
