import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = args => (
    <ButtonGroup {...args}>
        <Button onClick={() => alert('Button 0')}>Button</Button>
        <Button onClick={() => alert('Button 1')}>Button</Button>
        <Button onClick={() => alert('Button 2')}>Button</Button>
    </ButtonGroup>
);

export const Primary = Template.bind({});
Primary.args = {
    orientation: 'horizontal',
};
