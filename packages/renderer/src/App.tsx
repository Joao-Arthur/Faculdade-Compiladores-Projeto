import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from './GlobalStyle';
import { MainPage } from './MainPage';
import '../global.css';

const queryClient = new QueryClient();

export function App() {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <Toaster />
                <MainPage />
            </QueryClientProvider>
        </StrictMode>
    );
}
