import '../styles/globals.scss'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return <> 
      <Head>
        <title>Omkar Shinde Portfolio</title>
        <meta name='description' content='Portfolio of omkar shinde' />
        <meta name='keywords' content='omkar shinde , omkar , omkar shinde portfolio , omkar portfolio , omkarshinde , omkarshinde.com' />
        <meta name="google-site-verification" content="8AcoDiRkgu2Mmgh8J38RvwuUfaUnPqcjGS_PkHQlZnk" />
      </Head>
      <Component {...pageProps} />  
  </>
}

export default MyApp
