
import Image from 'next/image'
import styles from '../styles/objetos.module.css'
import Flores2 from '../Componentes/Flores2'
import Graminha from '../Componentes/Graminha'
import Floresta from '../Componentes/Arvore'
import Orbita from '../Componentes/Orbita'

import Canvas from '../Componentes/Canvas'

import { useState, useEffect } from 'react'



const Quadro = () => {


    // useEffect(() => {
    // const aleatorioLog = () => {

    //     setnQuadro(Math.floor((Math.random()*3))+1)

    //     if (n_quadro>limite_quadros) {
    //         setnQuadro(0) 
    //     }
    // }
    // aleatorioLog()

    //   return () => {

    //   }
    // }, [])

    // const draw = (ctx, frameCount) => {
    //     ctx.beginPath() }
    let [n_quadro, setnQuadro] = useState(0)

    const limite_quadros = 4;

    function pegaClique  (particulas) {
console.log('cliqueee')
        setnQuadro(n_quadro++)

        
        particulas=[null]
        if (n_quadro > limite_quadros) {
            setnQuadro(0)
        }
    }
    
    

    const quadros = [<Flores2 className={styles.pintura} estado={n_quadro} pegaClique={pegaClique} />,
    <Graminha className={styles.pintura} estado={n_quadro} pegaClique={pegaClique} />,
    <Floresta className={styles.pintura}estado={n_quadro} pegaClique={pegaClique} />,
    <Orbita className={styles.pintura} estado={n_quadro} pegaClique={pegaClique} />]
    // Parametros para pintura:

    return (

        <div className={styles.quadro}>


            {quadros[n_quadro]}





        </div >
    )

}

export default Quadro