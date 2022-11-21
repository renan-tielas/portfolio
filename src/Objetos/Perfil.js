
import Image from 'next/image'
import styles from '../styles/objetos.module.css'



const Perfil = () => {



    return (
        <div className={styles.perfil}>
            <div className={styles.foto_perfil}>
                <img
                    src={"/imagens/perfil/eu1.jpg"}
                    alt={"Picture of the author"}
                    width={'100%'}
                ></img>
            </div>
            {/* <p className={styles.biografia} >Olá :)

Me chamo Renan e tenho interesse no desenvolvimento de tecnologias sociais virtuais.<br/>
<br/></p> */}
        </div >
    )

}

export default Perfil