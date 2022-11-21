import { useState } from 'react/cjs/react.development';

import Botao from'../Componentes/Botao';
import styles from '../styles/objetos.module.css'
// import { Heading, Flex } from '@chakra-ui/react'


// usar styled components para arranjar botoes, caso mudem de quantidade: de 6 pra 4 botoes..
// estado_botao= setState[0]/////
// assim fazer um "tema" pra inverter as cores do navegador, com a do botão acionado

let estado_botao = false;
// fazer mudança de cores usando estado useState 

const Navegacao = () => {
    let estaAtivo
    const [ativo, tornaAtivo] = useState()

    const pegaClique = (id) => {
   
        tornaAtivo(id)
    }


    return (
      
                <nav className={styles.navegacao} >
                   
                    <Botao id={0} conteudo='Quem sou' endereco='CriacaoPostagens' ativo={ativo} pegaClique={pegaClique} />
                    <Botao id={1} conteudo='Tecnologias Web'   endereco='Editor' ativo={ativo} pegaClique={pegaClique} />
                    <Botao id={2} conteudo='Projetos'   endereco='Editor' ativo={ativo}  pegaClique={pegaClique}/>
                    <Botao id={3} conteudo='Arte Generativa'   endereco='Editor' ativo={ativo}  pegaClique={pegaClique}/>
                    <Botao id={4} conteudo='Tecnologias Sociais'   endereco='Editor' ativo={ativo}  pegaClique={pegaClique}/>
                    <Botao id={5} conteudo='Contato'   endereco='Editor' ativo={ativo}  pegaClique={pegaClique}/>
                    
                 </nav>
    )

}

export default Navegacao