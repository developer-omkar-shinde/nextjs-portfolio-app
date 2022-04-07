import '../styles/globals.css'
import MyDrawer from '../componants/MyDrawer';

function MyApp({ Component, pageProps }) {
  return <> 
   <MyDrawer Component={Component} pageProps={pageProps} />    
  {/* <Component {...pageProps} />  */}
   
  </>
}

export default MyApp
