import '../styles/global.css'
import styles from '../styles/leiaute.module.css'
// import Cabeca from '../Leiaute/Titulo'
import Perfil from '../Objetos/Perfil'
import Navegacao from '../Leiaute/Navegacao'
import Titulo from '../Leiaute/Titulo'

import Rodape from '../Leiaute/Rodape'
import Quadro from '../Objetos/Quadro'



const MyApp = ({ Component, pageProps }) => {
  return (



    <main className={styles.pagina} >
      <Titulo />
      <div className={styles.secao}>
        <Quadro />
        <Navegacao />
      </div>
      <section ></section>



    </main>
    //     <main className={styles.corpo} >



    //     {/* <Cabeca /> */}
    // <Perfil></Perfil>

    //        {/* <Conteudo conteudo={<'Conteudo'+paginaid/>} /> */}
    //        <Component {...pageProps} />




    //     <Rodape />
    //     </main>


  )
}
export default MyApp