import { useCallback, useState, useEffect } from 'react';

type TScroll = number;

const useScrollDirection = (delta = 50) => {
    const [isVisible, setVisible] = useState<boolean>(true);
    const [scrollingY, setScollingY] = useState<TScroll>(0);
    const [progress, setProgress] = useState<TScroll>(0);

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

export default useScrollDirection;
