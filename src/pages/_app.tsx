import '@/styles/globals.css'
import i18n from '@/translate/i18n'
import type { AppProps } from 'next/app'
import { I18nextProvider } from 'react-i18next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}
