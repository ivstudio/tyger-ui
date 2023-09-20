import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Container from '../components/Container';
import { lgTextFixture } from '../../test/fixtures';

export default {
    title: 'Components/Container',
    component: Container,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        border: { control: 'boolean', defaultValue: false },
        borderRadius: { control: 'boolean', defaultValue: false },
        flex: { control: 'boolean', defaultValue: false },
        tag: {
            control: {
                type: 'select',
                options: [
                    'div',
                    'section',
                    'span',
                    'article',
                    'main',
                    'ul',
                    'ol',
                    'li',
                    'aside',
                    'p',
                ],
            },
        },
        flexCenterAll: { control: 'boolean', defaultValue: false },
        flexCenterInline: { control: 'boolean', defaultValue: false },
        className: { control: false },
        styles: { control: false },
        padding: { control: { type: 'select' } },
    },
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = args => {
    return <Container {...args}>{args.children}</Container>;
};

export const Component = Template.bind({});
Component.args = {
    children: lgTextFixture,
    maxWidth: 'sm',
    mt: '32',
    tag: 'section',
    padding: '12',
    border: true,
    borderRadius: true,
};
