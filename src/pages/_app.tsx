import '~/styles/global.scss'
import '~/styles/reset.scss'

import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import { Fragment, lazy } from 'react'
import Layout from '~/components/layout'
import EmptyLayout from '~/components/EmptyLayout/EmptyLayout'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const mono = IBM_Plex_Mono({
  variable: '--font-family-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Inter({
  variable: '--font-family-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const serif = PT_Serif({
  variable: '--font-family-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({
  Component,
  pageProps,
  router,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps

  const isLayoutNeeded = !(router.pathname.trim() === '/' || router.pathname.startsWith('/studio/'));


  const LayoutComponent = isLayoutNeeded ? Layout : EmptyLayout

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-family-sans: ${sans.style.fontFamily};
            --font-family-serif: ${serif.style.fontFamily};
            --font-family-mono: ${mono.style.fontFamily};
          }
        `}
      </style>
      {draftMode ? (
        <LayoutComponent>
          <PreviewProvider token={token}>
            <Component {...pageProps} />
          </PreviewProvider>
        </LayoutComponent>
      ) : (
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      )}
    </>
  )
}
