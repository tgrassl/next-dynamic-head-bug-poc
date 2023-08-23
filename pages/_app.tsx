import '../styles/globals.css'
import { AppProps } from 'next/app.js';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
