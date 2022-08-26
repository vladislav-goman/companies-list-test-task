import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from '../src/components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </main>
  );
}

export default MyApp;
