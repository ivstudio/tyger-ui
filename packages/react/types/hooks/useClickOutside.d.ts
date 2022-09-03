import { RefObject } from 'react';
declare type Event = MouseEvent | TouchEvent;
declare function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void, mouseEvent?: 'mousedown' | 'mouseup'): void;
export default useClickOutside;
