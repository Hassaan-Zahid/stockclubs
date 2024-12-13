import { Roboto } from 'next/font/google'
import "@/styles/globals.css";

const roboto = Roboto({ subsets: ['latin'], weight: ['500'] })

export default function MyApp({ Component, pageProps }) {
  return (
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
  )
}