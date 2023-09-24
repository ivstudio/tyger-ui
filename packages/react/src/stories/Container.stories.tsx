import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Container from '../components/Container';
import { longParagraph } from '../../test/fixtures';

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
    return (
        <Container mt="32" paper padding="32" borderRadius>
            <Container {...args}>{args.children}</Container>
        </Container>
    );
};

export const Component = Template.bind({});
Component.args = {
    children: longParagraph,
    maxWidth: 'sm',
    tag: 'section',
    padding: '32',
    border: true,
    borderRadius: true,
};
