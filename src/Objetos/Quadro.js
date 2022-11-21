
import Image from 'next/image'
import styles from '../styles/objetos.module.css'
import Flores2 from '../Componentes/Flores2'
import Graminha from '../Componentes/Graminha'
import Floresta from '../Componentes/Floresta'
import Orbita from '../Componentes/Orbita'

import Canvas from '../Componentes/Canvas'

import { useState,useEffect } from 'react'



const Quadro = () => {
useEffect(() => {
  
const aleatorioLog = () => {

    setnQuadro(Math.floor((Math.random()*3))+1)

    if (n_quadro>limite_quadros) {
        setnQuadro(0) 
    }
}
aleatorioLog()

  return () => {
  
  }
}, [])

    // const draw = (ctx, frameCount) => {
    //     ctx.beginPath() }
    const [n_quadro, setnQuadro] = useState(0)

const limite_quadros=4;
// const pegaClique = () => {

//     setnQuadro(n_quadro++)
//     if (n_quadro>limite_quadros) {
//         setnQuadro(0) 
//     }
// }


    const quadros = [<Flores2 estado={n_quadro} />,
    <Graminha estado={n_quadro} />,
    <Floresta  estado={n_quadro}/>,
    <Orbita estado={n_quadro}/>]
    // Parametros para pintura:

    return (
 
        <div className={styles.quadro}>


            {quadros[n_quadro]}


            


        </div >
    )

}

export default Quadro