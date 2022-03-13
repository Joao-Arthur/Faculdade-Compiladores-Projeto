import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MainPage } from './MainPage';
import '../global.css';

const queryClient = new QueryClient();

export function App() {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <Toaster />
                <MainPage />
            </QueryClientProvider>
        </StrictMode>
    );
}
