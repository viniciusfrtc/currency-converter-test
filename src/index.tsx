import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Spinner from '@/components/Spinner';
import { ThemeProvider } from 'styled-components';
import { THEME } from '@/constants';

const queryClient = new QueryClient();
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME}>
        <ReactQueryDevtools />
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
