import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme/theme';

const clickHandler = jest.fn();
const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'portal');
document.body.appendChild(modalRoot);

interface IPortalMock {
    children: JSX.Element | JSX.Element[];
}

const PortalMock = ({ children }: IPortalMock) => {
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);

        return () => {
            modalRoot.removeChild(el);
        };
    });

    return ReactDOM.createPortal(<div>{children}</div>, el);
};

describe('Modal', () => {
    it('Render correctly', () => {
        const { getByText } = render(
            <ThemeProvider theme={darkTheme}>
                <PortalMock>
                    <Modal open={true} onClose={clickHandler}>
                        <Modal.Header
                            title="Modal Title"
                            onClose={clickHandler}
                        />
                        <Modal.Body>
                            <p>hello world</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={clickHandler}>save</button>
                        </Modal.Footer>
                    </Modal>
                </PortalMock>
            </ThemeProvider>
        );
        // screen.debug();
        // expect(getByText('hello world')).toBeTruthy();
    });
});
