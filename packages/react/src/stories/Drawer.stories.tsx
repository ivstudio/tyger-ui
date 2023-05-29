import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import { MdOutlineMenu as MenuIcon } from 'react-icons/md';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';
import IconButton from '../components/IconButton';
import Container from '../components/Container';

export default {
    title: 'Navigation/Drawer',
    component: Drawer,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
        layout: 'fullscreen',
    },
    argTypes: {
        anchor: {
            control: {
                type: 'select',
                options: ['top', 'right', 'bottom', 'left'],
            },
            defaultValue: 'left',
        },
        children: { control: false },
        open: { control: 'boolean', defaultValue: false },
        hideBackdrop: { control: 'boolean', defaultValue: false },
        title: { control: 'text' },
    },
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = args => {
    const [{ open }, updateArgs] = useArgs();

    return (
        <>
            <Drawer
                {...args}
                open={open}
                onClose={() => updateArgs({ open: false })}
            >
                {args.children}
            </Drawer>
            <AppBar dense>
                <IconButton onClick={() => updateArgs({ open: true })}>
                    <MenuIcon />
                </IconButton>
            </AppBar>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    children: <>HELLO</>,
};
