import '../styles/global.css'
import styles from '../styles/leiaute.module.css'
import Cabeca from '../Leiaute/Cabeca'

import Rodape from '../Leiaute/Rodape'



const MyApp = ({ Component, pageProps }) => {
    return (
    

      <main className={styles.corpo} >



      <Cabeca />
  
  
         {/* <Conteudo conteudo={<'Conteudo'+paginaid/>} /> */}
         <Component {...pageProps} />
    
  
            
   
      <Rodape />
      </main>
  
    
    )
  }
  export default MyApp