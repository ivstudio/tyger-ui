import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Container from '../components/Container';
import { LongTextFixture } from '../../test/fixtures';

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
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = args => {
    return (
        <div>
            <Container {...args}>{args.children}</Container>
        </div>
    );
};

export const Component = Template.bind({});
Component.args = {
    children: LongTextFixture,
    maxWidth: 'sm',
    mt: '32',
    tag: 'section',
    padding: '12',
    border: true,
    borderRadius: true,
};
