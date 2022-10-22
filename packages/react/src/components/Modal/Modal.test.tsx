import React from 'react';

import { lgTextFixture } from '../../../test/fixtures';
import MockPortal from '../../../test/utils/MockPortal';
import { render } from '../../../test/utils/mockProvider';
import Modal from './Modal';

const clickHandler = jest.fn();

describe('Modal', () => {
    it('renders Header, Body, and Footer correctly', () => {
        const { getByText } = render(
            <MockPortal>
                <Modal open={true} onClose={clickHandler}>
                    <Modal.Header title="Modal Title" onClose={clickHandler} />
                    <Modal.Body>
                        <p>hello world</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={clickHandler}>save</button>
                    </Modal.Footer>
                </Modal>
            </MockPortal>
        );

        expect(getByText('Modal Title')).toBeTruthy();
        expect(getByText('hello world')).toBeTruthy();
        expect(getByText('save')).toBeTruthy();
    });

    it('toogles Modal visibility', () => {
        const { rerender, queryByText } = render(
            <MockPortal>
                <Modal open={false} onClose={clickHandler}>
                    <Modal.Header title="Modal Title" onClose={clickHandler} />
                    <p>{lgTextFixture}</p>
                </Modal>
            </MockPortal>
        );

        expect(queryByText('Modal Title')).not.toBeInTheDocument();
        rerender(
            <MockPortal>
                <Modal open={true} onClose={clickHandler}>
                    <Modal.Header title="Modal Title" onClose={clickHandler} />
                    <p>{lgTextFixture}</p>
                </Modal>
            </MockPortal>
        );
        expect(queryByText('Modal Title')).toBeInTheDocument();
    });
});
