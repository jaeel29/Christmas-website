import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobaleStyle from '../styles/Global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobaleStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
