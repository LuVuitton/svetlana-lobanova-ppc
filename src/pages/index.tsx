import Head from 'next/head'
import SplashPage from '~/components/SplashPage/SplashPage'


export default function IndexPage() {
  return (
    <div
      style={{
        marginBottom: '1rem',
      }}
    >
      <Head>
        <title>S.LOBANOVA PPC</title>
      </Head>
      <SplashPage/>
    </div>

  )
}

