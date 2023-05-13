import '@/styles/globals.css'
import '@/styles/tailwind.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className='h-screen bg-gray-900 text-gray-100'>
    <Component {...pageProps} />
  </div>
  );
};
