
import Image from 'next/image'
import styles from '../styles/objetos.module.css'
import Flores2 from '../Componentes/Flores2'
import Graminha from '../Componentes/Graminha'
import Floresta from '../Componentes/Floresta'

import Orbita from '../Componentes/Orbita'


const Quadro = () => {


// Parametros para pintura:




    return (
        <div className={styles.quadro}>
            <Orbita/>
            {/* <Floresta/> */}
            {/* <Flores2/> */}
            {/* <Graminha/> */}
            


           
        </div >
    )

}

export default Quadro