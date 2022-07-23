import { RefObject } from 'react';

import useEventListener from './useEventListener';

type Event = MouseEvent | TouchEvent;

function useClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: (event: Event) => void,
    mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
    useEventListener(mouseEvent, event => {
        const el = ref?.current;
        if (!el || el.contains((event?.target as Node) || null)) {
            return;
        }

        handler(event);
    });
}

export default useClickOutside;
