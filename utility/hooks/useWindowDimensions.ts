import {useEffect, useState} from 'react';

function getWindowDimensions() {
    if (typeof window !== 'undefined') {
        const {innerWidth: width, innerHeight: height} = window;
        return {width, height};
    } else {
        return {width: 0, height: 0};
    }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [typeof window]);

    return windowDimensions;
}
