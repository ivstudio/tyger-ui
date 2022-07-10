import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';
import Modal from '../components/Modal';

export default {
    title: 'Feedback/Modal',
    component: Modal,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => {
    const [{ open }, updateArgs] = useArgs();

    return (
        <>
            <Modal
                {...args}
                open={open}
                onBackdropClick={() => updateArgs({ open: false })}
            >
                afafafs
            </Modal>
            <Button onClick={() => updateArgs({ open: true })}>
                Open Modal
            </Button>
            <div id="portal"></div>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    children: <>HELLO</>,
};
