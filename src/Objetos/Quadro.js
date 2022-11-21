
import Image from 'next/image'
import styles from '../styles/objetos.module.css'
import Flores2 from '../Componentes/Flores2'
import Graminha from '../Componentes/Graminha'


const Quadro = () => {



    return (
        <div className={styles.quadro}>
            <Flores2/>
            {/* <Graminha/> */}


           
        </div >
    )

}

export default Quadro