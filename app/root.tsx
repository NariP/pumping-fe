import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/libs/react-query/queryClient';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@unocss/reset/tailwind-compat.css';
import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
