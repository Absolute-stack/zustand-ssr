import App from './App.jsx';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { getQueryClient } from './lib/queryClient.js';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = getQueryClient();

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
