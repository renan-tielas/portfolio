



import React from 'react'
import Canvas from './Canvas'
import { useEffect } from 'react'
import styles from '../styles/objetos.module.css'

function Orbita({pegaClique}) {
        let particulas = []

        const devolveParticulas =(particulas)=>{
            particulas=[null]
        }
        
        // useEffect(() => {
        //     // particulas = []
        
        //   return () => {
        //     ctx.beginPath()
        //      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        //     particulas = []
        //   }
        // }, [])
        
        const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // ctx.fillStyle = '#000000'
        ctx.beginPath()
        // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
        // ctx.fill()
        

        //Parametros de TEla
        // tamanho=580
        const margem = 100
        const margem_x = 100
        const margem_y = 100
        const tela_largura = 700
        const tela_altura = 600
        const tamanhox = tela_largura - 2 * margem_x
        const tamanhoy = tela_altura - 2 * margem_y

        // const spawnx= 100
        // const spawny= 100
        //tamanhos são 2 margens menores que a largura do canvas

        let contador = 1
        let conta_cor=0;
        const desenha = (x, y, c, s) => {
            contador++

            // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height,)
            //Reseta após contagem
            const temporizador = 9000
            
            const escolha_cor = ["#84ABA0", "rgba(235, 98, 18, 0.664)"]

            if (contador % temporizador == 0) {
                ctx.beginPath();
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                conta_cor++
                particulas = [];
                if (conta_cor%2==0) {
                    
                folhas = criar(quantidade3, escolha_cor[0], 0.1)
                } else if(conta_cor%2==1) {

                    folhas = criar(quantidade3, escolha_cor[1], 0.1)

                }
               
                //            
               


                petalas = criar(quantidade, "orange", 0.2)
                flor = criar(quantidade2, "#66441b", 0.1)

                buraco = criar_buraco(quantidade4, "ivory", 1)

            }

            // ctx.filter = 'blur(10px)';
            ctx.filter = 'opacity(50%)';
            // ctx.filter = 'hue-rotate(50%)';
            // ctx.filter= 'contrast(1.4) drop-shadow(9px 9px 1px #4F731A)'
            ctx.strokeStyle = c;

            ctx.beginPath();
            ctx.ellipse(x, y, 6, 6, 0, 0, 2 * Math.PI);
            // ctx.ellipse(x, y, 13, 4, 0, 0, 2 * Math.PI);

            // ctx.stroke();  
        }

      
        const velocidade_aleatoria = () => {
            return Math.random()
        }
        const particula = (x, y, c, m) => {
            return { "x": x, "y": y, "vx": velocidade_aleatoria(), "vy": velocidade_aleatoria(), "cor": c, "massa": m }
        }
        const particula_buraco = (x, y, c, m) => {
            return { "x": x, "y": y, "vx": 0, "vy": 0, "cor": c, "massa": m }
        }

        const aleatorio = (tamanho) => {
            return Math.random() * tamanho + margem
            // return Math.sin()*tamanho+margem
        }
        const aleatorio_buraco = (tela_largura) => {
            return Math.random() * tela_largura / 100 + tela_largura / 2
            // return Math.sin()*tamanho+margem
        }



        const criar = (numero, cor, massa) => {

            let grupo = []
            for (let i = 0; i < numero; i++) {
                // grupo.push(particula(aleatorio(tamanhox)*Math.sin(i/1000),aleatorio(tamanhoy), cor))
                grupo.push(particula(aleatorio(tamanhox), aleatorio(tamanhoy), cor, massa))
                particulas.push(grupo[i])

            }
            return grupo
        }
        const criar_buraco = (numero, cor, massa) => {

            let buraco = []
            for (let i = 0; i < numero; i++) {
                buraco.push(particula_buraco(aleatorio_buraco(tela_largura), aleatorio_buraco(tela_altura), cor, massa))
                particulas.push(buraco[i])

            }
            return buraco
        }





        const regra = (particulas1, particulas2, g) => {
            for (let i = 0; i < particulas1.length; i++) {
                let a = particulas1[i]

                let fx = 0
                let fy = 0
                for (let j = 0; j < particulas2.length; j++) {
                    let b = particulas2[j]
                    let dx = a.x - b.x
                    let dy = a.y - b.y
                    let d = Math.sqrt(dx * dx + dy * dy)


                    let reducao_alcance_gravitacional = 1000



                    if (d > 0 && d < reducao_alcance_gravitacional) {
                        let F = g * 1 * a.massa * b.massa / d;
                        fx += (F * dx)
                        fy += (F * dy)
                    }
                }
                // nova posição 


                //FISICA DAS PARTICULASSS

                const reducao_v = 1 // porcentagem reducao velocidades
                // desconto_reducao_x=0.5
                // desconto_reducao_y=0.45 favorece horizontalidade, com red_v=05

                const desconto_reducao_x = 0
                const desconto_reducao_y = 0

                a.vx = (a.vx + fx) * (reducao_v - desconto_reducao_x)
                // a.vy = (a.vy + fy)*(reducao_v-0.5)
                a.vy = (a.vy + fy) * (reducao_v - desconto_reducao_y)


                //ACELERAÇÃO
                a.x += a.vx
                a.y += a.vy

                //CONDIÇÃO DE BORDA com margem artistica
                // if (a.x <= 0  ||a.x >= tamanhox   ) {a.vx*=-1}
                // if (a.y <= 0 ||a.y >= tamanhoy  ) {a.vy*=-1}

                //CONDIÇÃO DE BORDA com margem artistica
                // if (a.x <= margem/2  ||a.x >= tamanhox+margem_x   ) {a.vx*=-1}
                // if (a.y <= margem/2  ||a.y >= tamanhoy+margem_y   ) {a.vy*=-1}
                //margem_y/2 e margem_yx/1 é anisotropico
            }




        }








        //PARAMETROS DE INICIO

        const g = 9.81
        const quantidade = 1 * 1
        const quantidade2 = 1 * 1
        const quantidade3 = 2 * 1

        const quantidade4 = 1
        // folhas=criar(quantidade4,"green")
        // amarela=criar(quantidade4,"yellow")





        let petalas = criar(quantidade, "orange", 0.2)
        let flor = criar(quantidade2, "#66441b", 0.1)
        // let folhas=criar(quantidade3,"rgba(235, 98, 18, 0.664)",0.1)
        let folhas = criar(quantidade3, "#84ABA0", 0.1)
        // #84ABA0
        let buraco = criar_buraco(quantidade4, "ivory", 1)

        const atualiza = () => {

            // const { width, height } = ctx.canvas
            // ctx.clearRect(margem_x, margem_y, width, height)
            // PARAMETROS FLORES 2
            // regra(petalas,petalas,0.01)
            // regra(petalas,flor,-0.2)
            // regra(petalas,folhas,-0.3)

            // regra(folhas,folhas,0.05)
            // regra(folhas,flor,-0.3)
            // regra(folhas,petalas,0.8)

            // regra(flor,petalas,-0.4)
            // // regra(flor,flor,-0.2)
            // regra(flor,folhas,-0.3)

            // PARAMETROS FLORESTA

            // regra(petalas,petalas,0.1)
            // regra(petalas,flor,-0.1)
            // regra(petalas,folhas,0.2)

            // //comida
            // regra(flor,petalas,0.1)
            // regra(flor,petalas,0.1)
            // regra(flor,folhas,0.1)

            // regra(folhas,flor,0.1)
            // regra(folhas,folhas,0.1)
            // regra(folhas,petalas,0.1)

            // regra(buraco,buraco,-0.1)  

            regra(flor, buraco, -1)

            regra(petalas, buraco, -0.1)

            regra(folhas, buraco, -1)



            regra(buraco, petalas, -0.000)




            // ARTISTICO BLUR


            desenha(0, 0, "white", 0)

            const offset_x = 0;
            const offset_y = 0;
            for (let i = 0; i < particulas.length; i++) {

                // desenha(particulas[i].x+offset_x,particulas[i].y+offset_y,particulas[i].cor,4)

                desenha(Math.floor(particulas[i].x + offset_x), Math.floor(particulas[i].y + offset_y), particulas[i].cor, 4);

                ctx.stroke()

            }

            // ctx.clearRect(0,0,tamanhox,tamanhoy)
            requestAnimationFrame(atualiza)

        }

        atualiza();




    }


    return <Canvas className={styles.pintura} draw={draw} devolveParticulas={devolveParticulas} onClick={(particulas) => { pegaClique(particulas) }}/>
}

export default Orbita