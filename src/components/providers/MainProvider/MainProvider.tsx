// Use the client directive for using usePathname hook.
'use client';

// Use usePathname for catching route name.
import { store, persistor } from '@/store/configStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from '../Header';
interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient();

// This is the place responsible for grouping all providers from the app
export const MainProvider = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {!['/login', '/register'].includes(pathname) &&
            !pathname.startsWith('/admin') && <Header />}
          {children}
          <ReactQueryDevtools />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};
