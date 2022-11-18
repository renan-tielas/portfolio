
import styles from '../styles/itens.module.css'

// { meta }

    // mudar para url



const ItemCodigo = ({ titulo, descricao, conteudo, codigo, subtitulos, subitems }) => {



    return (
      

        <article className={styles.item_codigo} >

            <header>
                <h1 className={styles.titulo_codigo}> {titulo}</h1>
                <p className={styles.descricao_codigo}> {descricao} </p>
            </header>

            <section  className={styles.conteudo}>
                <span> {conteudo} </span>
                <br/> <br/>
                <code> {codigo} </code>
                <br/> <br/>
                {subitems }{ subtitulos}
                <button  className={styles.botao_codigo}>comentar</button>
                <button  className={styles.botao_codigo}>deletar</button>
                    {/* // ? subitems.map((i) => (
                    //     <div>
                    //         <div key={0} className={styles.texto_codigo}>

                    //             {subtitulos[i]}
                    //         </div>

                    //         <div key={1} className={styles.texto_codigo}>

                    //             {subitems[i]}
                    //         </div>
                    //     </div>
                    // ))
                    // : '' */}
                   
                    
            </section>

        </article>
           )
}

export default ItemCodigo