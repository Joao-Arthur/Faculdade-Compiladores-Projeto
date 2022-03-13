import { Body } from './Body';
import { Header } from './Header';

export function MainPage() {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <Body />
        </div>
    );
}
