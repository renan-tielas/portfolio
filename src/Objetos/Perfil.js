
import Image from 'next/image'
import styles from '../styles/objetos.module.css'



const Rodape = () => {



    return (
        <div className={styles.perfil}>
            <div className={styles.foto}>
       <img  
       src={"/imagens/perfil/eu3.jpeg"}
       alt={"Picture of the author"}
      width={'100%'}
      justifySelf={'center'}
       ></img>
       </div>
<p className={styles.biografia} >oi eu sou renan</p>
</div >
    )

}

export default Rodape