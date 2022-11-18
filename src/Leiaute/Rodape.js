import styles from '../styles/leiaute.module.css'



const Rodape = () => {



    return (
        <div>
            {/* <div className={styles.containerFlex2} align="center" mr={5}> */}
 
            {/* <div className={styles.bordado1} >
                  
                </div> */}

                <div className={styles.rodape} >
                   
                    <div className={styles.secao_1}>
                    Site para criação de postagens: edição do texto, das categorias, da aparência, e do formato da postagem
                    Coloque autoria, ou nome do projeto, contatos, links e @s, exporte para as principais redes sociais.
                     <br/>Compartilhe com os amigos!
                    </div>
                    
                    <div className={styles.secao_1}>
                    Crie também sua página de Apresentação
                    </div>
                    <div className={styles.secao_1}>
                    Compartile suas postagens com a nossa pagina: @ditovivo
                    </div>
                    <div className={styles.secao_1}>
                    Feito por <br/>Renan Tielas<br/><br/>
                
                    </div>
         
                    
                </div>

            {/* </div> */}
        </div>

    )

}

export default Rodape