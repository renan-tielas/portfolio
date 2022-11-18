
import styles from '../styles/componentes.module.css'

const Torradinha = ({titulo,descricao, codigo}) => {


    return (

        <div className={styles.torradinha} >

            <h1>{titulo}</h1><br/><br/>
            {descricao}<br/><br/>
            {codigo}<br/><br/>
        </div>

    )

}

export default Torradinha