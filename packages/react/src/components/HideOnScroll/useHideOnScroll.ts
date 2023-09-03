import { useCallback, useEffect, useState } from 'react';

type Scroll = number;

const useHideOnScroll = (delta = 50) => {
    const [isVisible, setVisible] = useState<boolean>(true);
    const [scrollingY, setScollingY] = useState<Scroll>(0);
    const [progress, setProgress] = useState<Scroll>(0);

    const navAnimation = useCallback(() => {
        if (typeof window === 'undefined') {
            return;
        }
        window.scrollY < delta
            ? setVisible(true)
            : setVisible(scrollingY > window.scrollY);

        const docElem = document.documentElement;
        const documentHeight = docElem.scrollHeight - docElem.clientHeight;
        const scrolled = (docElem.scrollTop / documentHeight) * 100;

        setProgress(+scrolled.toFixed(1));
        setScollingY(window.scrollY);
    }, [scrollingY, delta]);

    useEffect(() => {
        window.addEventListener('scroll', navAnimation);
        return () => window.removeEventListener('scroll', navAnimation);
    }, [navAnimation]);

    return { isVisible, progress };
};

export default useHideOnScroll;
