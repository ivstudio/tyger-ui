import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'portal');
document.body.appendChild(modalRoot);

interface IMockPortal {
    children: JSX.Element | JSX.Element[];
}
const MockPortal = ({ children }: IMockPortal) => {
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);

        return () => {
            modalRoot.removeChild(el);
        };
    });

    return ReactDOM.createPortal(children, el);
};

export default MockPortal;
