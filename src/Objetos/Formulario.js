import styles from '../styles/formularios.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Titulo from './Formulário/Titulo'

// interface User {
//   name: string
// }

// interface LoginFormValues {
//   username: string
//   password: string
//   remember: boolean
// }

const Postagem = (titulo,autor,frutas,conteudo) => (
<div className={styles.postagem}>
<h1 className={styles.titulo}>{titulo}</h1>
  <h2 className={styles.autor}>{autor}</h2>
  <p className={styles.frutas}>{frutas} </p>
  <p className={styles.conteudo}>{conteudo} </p>
</div>
)







const Formulario = () => {

  const [autor, poeAutor] = useState()
  const [frutas, poeFrutas] = useState()
  const [conteudo, poeConteudo] = useState()
  const [conteudo2, poeConteudo2] = useState()
  // const [titulo, poeTitulo] = useState()
  

  const [titulo, poeDado] = useState()

const pegaInput = (dadoInput) => {
  poeDado(dadoInput)
}


  const {
    register,
    formState: { errors },
    handleSubmit,  } = useForm()

  const onSubmit = handleSubmit(({ autor,conteudo,conteudo2,frutas,titulo,titulo2}) => {
    // You should handle login logic with username, password and remember form data
    poeAutor({ autor:autor })
    poeConteudo({ conteudo:conteudo })
    poeConteudo2({ conteudo2:conteudo2 })
    poeFrutas({frutas:frutas})
    // poeTitulo({ titulo:titulo })
    poeTitulo2({ titulo2:titulo2 })

  })
  // const onSubmit = handleSubmit((data) => console.log(data))


// {` titulo${titulo.titulo} autor${autor.autor}  conteudo${conteudo.conteudo}  `}



  return (
    <div>
      {conteudo ? (
        <div>{Postagem(autor.autor,conteudo.conteudo)} </div>
      ) : (
       
        // <form className={styles.formulario_codigo} action="" method="post" id="formulario-codigo" onSubmit={onSubmit} >
        <form className={styles.formulario_codigo} action="" method="post" id="formulario-codigo" onSubmit={onSubmit} >
        <fieldset className={styles.formulario_borda}>
  
          <legend style={{ padding: '10px 20px', fontSize: '22px', backgroundColor:'white' }}>Preencha sua postagem!</legend>
         
          <div className="topo">
      
{/*   
            <input className={styles.titulo} tabIndex={0} type="text" name="titulo" id="POST-titulo" 
                {...register("titulo")}
            value={titulo}
            onChange={(e)=>{poeTitulo(e.target.value)}}
             />
            <label htmlFor="POST-titulo">Titulo do código, ou tópico</label> */}
{(Titulo('tituloooo',0,pegaInput))}

            <div></div>
         
       
          
  
          {/* <div onAuxClick={}> */}
          <input className={styles.conteudo} name="text" id="POST-conteudo" 
           {...register("conteudo")}
           value={conteudo}
            onSubmit={(e)=>{poeConteudo(e.target.value)}} 
            tabIndex={2}
           ></input>
          <label htmlFor="POST-conteudo">Conteúdo</label>
         
          </div>

  {/* <input className={styles.titulo} tabIndex={4}  {...register("autor")}
  type="text" name="autor" id="POST-autor" 
            value={autor}
            onSubmit={(e)=>{poeAutor(e.target.value.autor)}} />


            <label htmlFor="POST-autor">Autor</label> */}
            <input className={styles.titulo} tabIndex={5}  {...register("frutas")}
  type="text" name="frutas" id="POST-frutas" 
            value={frutas}
            onSubmit={(e)=>{poeFrutas(e.target.value.frutas)}} />


            <label htmlFor="POST-frutas">Frutas</label>
         
          <button className={styles.botao} type="submit" form="formulario-codigo" value="Submit">Enviar</button>
        </fieldset>
  
      </form>
      )}
    </div>
  )
}



  
export default Formulario


// // //  FORMULARIO EXEMPLO
// <form onSubmit={onSubmit}>
// <div className={styles.row}>
//   <h3 className={styles.form_header}>LOGIN</h3>
// </div>
// <div className={styles.row}>
//   <input
//     type="text"
//     placeholder="user name"
//     {...register('username', {
//       required: { value: true, message: 'User name is required' },
//       minLength: {
//         value: 3,
//         message: 'User name cannot be less than 3 character',
//       },
//     })}
//     className={'form_field' + (errors.username ? ' has_error' : '')}
//   />
//   {errors.username && (
//     <span className={styles.error_label}>{errors.username.message}</span>
//   )}
// </div>
// <div className={styles.row}>
//   <input
//     type="password"
//     placeholder="password"
//     {...register('password', {
//       required: {
//         value: true,
//         message: 'Please enter your password',
//       },
//     })}
//     className={'form_field' + (errors.password ? ' has_error' : '')}
//   />
//   {errors.password && (
//     <span className={styles.error_label}>{errors.password.message}</span>
//   )}
// </div>
// <div className={`${styles.row} ${styles.row_remember}`}>
//   <input type="checkbox" id="remember" {...register('remember')} />
//   <label htmlFor="remember" className={styles.remember_label}>
//     Remember me
//   </label>
// </div>
// <div className={styles.row}>
//   <button type="submit" className={styles.botao}>
//     Login
//     </button>
// </div>
// </form>