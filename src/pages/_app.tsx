import '../assets/styles/main.css';
import '../assets/styles/chrome-bug.css';
import React from 'react';
import type { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
