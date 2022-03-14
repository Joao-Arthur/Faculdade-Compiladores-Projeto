import { useCallback, useEffect, useState } from 'react';
import { Body } from './Body';
import { Header } from './Header';

export function MainPage() {
    const [height, setHeight] = useState(window.innerHeight);

    const onChangeWidth = useCallback(() => setHeight(window.innerHeight), []);

    useEffect(() => {
        window.addEventListener('resize', onChangeWidth);
        return () => {
            window.removeEventListener('resize', onChangeWidth);
        };
    });

    return (
        <div
            className='flex flex-col overflow-hidden flex-1 '
            style={{ height }}
        >
            <Header />
            <Body />
        </div>
    );
}
