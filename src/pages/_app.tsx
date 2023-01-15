import 'reflect-metadata';
import '../styles/globals.css';
import '../common/usePrimeFace.ts';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
