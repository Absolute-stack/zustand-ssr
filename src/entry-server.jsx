import App from './App.jsx';
import { StrictMode } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { makeQueryClient } from './lib/queryClient.js';
import { QueryClientProvider } from '@tanstack/react-query';

export function render(url) {
  const queryClient = makeQueryClient();

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </QueryClientProvider>
    </StrictMode>
  );
}
