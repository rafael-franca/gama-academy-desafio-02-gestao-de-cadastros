import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import Page from '../components/page'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Page>
            <Page.Header  />

            <Component {...pageProps} />
        </Page>
    )
}