
 import { React, useState } from 'react'
 import { useForm } from 'react-hook-form'
import styles from '../../styles/formularios.module.css'



const Titulo = (titulo2,tabIndex,pegaInput) => {

    const [titulo, poetitulo] = useState()



    const {
        register,
        formState: { errors },
        handleSubmit,  } = useForm()    

    return( 
<div>
<input className={styles.titulo} tabIndex={tabIndex} type="text" name="titulo" id="POST-titulo" 
{...register("titulo")}
value={titulo}
onSubmit={(e)=>{pegaInput(e.target.value)}}
/>
<label htmlFor="POST-titulo">{titulo2}</label>
</div>
 )
 }

 export default Titulo