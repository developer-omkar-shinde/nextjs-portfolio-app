import '../styles/globals.scss'
import MyDrawer from '../componants/MyDrawer';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <> 
      <Head>
        <title>Omkar Shinde Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" /> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />  
      </Head>
   <MyDrawer Component={Component} pageProps={pageProps} />    
  {/* <Component {...pageProps} />  */} 
  </>
}

export default MyApp
