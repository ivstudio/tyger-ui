import { useCallback, useEffect, useState } from 'react';

type TScroll = number;

const useScrollDirection = () => {
    const [progress, setProgress] = useState<TScroll>(0);

    const progressBar = useCallback(() => {
        const docElem = document.documentElement;
        const documentHeight = docElem.scrollHeight - docElem.clientHeight;
        const scrolled = (docElem.scrollTop / documentHeight) * 100;

        setProgress(+scrolled.toFixed(1));
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', progressBar);
        return () => window.removeEventListener('scroll', progressBar);
    }, [progressBar]);

    return [progress];
};

export default useScrollDirection;
