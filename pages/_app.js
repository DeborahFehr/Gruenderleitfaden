import '../styles/globals.css'
import '../styles/additional.css'
import Head from 'next/head';
import Layout from '../components/layout/Layout';


export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => <Layout landing={false}>{page}</Layout>)

  return <>
    <Head>
      <title>Gründerleitfaden</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta name='description'
        content='Gründerleitfaden - Deine rechtliche Basis für den Start in die Selbstständigkeit.'
      />
      {/* 
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      */}
    </Head>
    {getLayout(<Component {...pageProps} />)}
  </>
}
