import { useCallback, useEffect, useState } from 'react';

type Scroll = number;

const useScrollDirection = () => {
    const [progress, setProgress] = useState<Scroll>(0);

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
