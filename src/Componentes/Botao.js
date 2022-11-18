
import styles from '../styles/componentes.module.css'
// import { Heading, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'


const Botao = ({id,conteudo,endereco,ativo,pegaClique}) => {
   
// const tornaAtivo = (id) => {
//     estaAtivo=id
//     console.log(id)
// }
    return (
<Link href={`/${endereco}`}>
        <button className={ativo==id ? styles.botao_ativo : styles.botao}
        onClick={()=>pegaClique(id)}  >
            {conteudo}
        </button>
 </Link>
    )

}

export default Botao