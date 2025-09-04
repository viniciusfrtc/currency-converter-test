import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Spinner from '@/components/Spinner';
import { ThemeProvider } from 'styled-components';
import { THEME } from '@/constants';
import { GlobalErrorBoundary } from '@/components/GlobalErrorBoundary';
import Background from '@/components/Background';

const queryClient = new QueryClient();
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <Background>
        <GlobalErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Suspense fallback={<Spinner />}>
              <App />
            </Suspense>
          </QueryClientProvider>
        </GlobalErrorBoundary>
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
);
