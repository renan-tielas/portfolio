



import React from 'react'
import Canvas from './Canvas'
import styles from '../styles/objetos.module.css'

function Graminha({pegaClique}) {

    
const devolveParticulas =(particulas)=>{
    particulas=[null]
}

    const draw = (ctx, frameCount) => {
      

        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        // ctx.fillStyle = '#000000'
        ctx.beginPath()
        // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
        // ctx.fill()


//Parametros de TEla
// tamanho=580
const margem=100 //experimental o efeito ainda
const tamanhox=600-2*margem
const tamanhoy=300-2*margem

// const spawnx= 100
// const spawny= 100
//tamanhos são 2 margens menores que a largura do canvas

let contador=1
    
const desenha=(x,y,c,s)=>{
    contador++

    if (contador%50000==0){
        ctx.beginPath();
              ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

            //   ctx.stroke();
particulas=[];
              petalas=criar(quantidade,"orange")
              // let flor=criar(quantidade2,"brown")
              flor=criar(quantidade2,"#db5c35")
              // let folhas=criar(quantidade3,"#332A1Fff")    
              folhas=criar(quantidade3,"#66441b")
            }
    // ctx.fillStyle=c
    //  ctx.fillRect(x,y,s,s)
    // ctx.filter = 'blur(10px)';
    ctx.filter = 'opacity(50%)';
    ctx.filter = 'hue-rotate(50%)';
    // ctx.filter= 'contrast(1.4) drop-shadow(9px 9px 1px #4F731A)'
    ctx.strokeStyle = c;

    ctx.beginPath();
ctx.ellipse(x, y, 6, 6, 0, 0, 2 * Math.PI);
// ctx.ellipse(x, y, 13, 4, 0, 0, 2 * Math.PI);
// ctx.stroke();

}

let particulas =[]
const particula=(x,y,c) =>{
    return {"x":x,"y":y,"vx":0,"vy":0,"cor":c}
}

const aleatorio =(tamanho)=>{
    return Math.random()*tamanho+margem
    // return Math.sin()*tamanho+margem
}



const criar=(numero,cor) =>{
    let grupo=[]
    for(let i=0; i< numero; i++){
        // grupo.push(particula(aleatorio(tamanhox)*Math.sin(i/1000),aleatorio(tamanhoy), cor))
        grupo.push(particula(aleatorio(tamanhox),aleatorio(tamanhoy), cor))
        particulas.push(grupo[i])
    }
    return grupo
}





const regra=(particulas1,particulas2,g)=>{
    for (let i = 0; i < particulas1.length; i++) {
        let a=particulas1[i]
            
        let fx=0
        let fy=0
        for (let j = 0; j < particulas2.length; j++) { 
            let b=particulas2[j]
            let dx=a.x-b.x
            let dy=a.y-b.y
            let distancia=Math.sqrt(dx*dx+dy*dy)


            let reducao_alcance_gravitacional=80



        if(distancia>0 && distancia <reducao_alcance_gravitacional){
            let F =g*1/distancia;
            fx += (F*dx)
            fy += (F*dy-g)
        }
        }
        // nova posição 


//FISICA DAS PARTICULASSS

const reducao_v=0.5 // porcentagem reducao velocidades
// desconto_reducao_x=0.5
// desconto_reducao_y=0.45 favorece horizontalidade, com red_v=05

const desconto_reducao_x=0
const desconto_reducao_y=0

        a.vx = (a.vx + fx)*(reducao_v-desconto_reducao_x)
        // a.vy = (a.vy + fy)*(reducao_v-0.5)
        a.vy = (a.vy + fy)*(reducao_v-desconto_reducao_y)
    

        //ACELERAÇÃO
        a.x += a.vx
        a.y += a.vy
        // a.y += a.vy*1.8//Aceleração Artistica

        //CONDIÇÃO DE BORDA com margem artistica
        // if (a.x <= 0  ||a.x >= tamanhox   ) {a.vx*=-1}
        // if (a.y <= 0 ||a.y >= tamanhoy  ) {a.vy*=-1}

        //CONDIÇÃO DE BORDA com margem artistica
        if (a.x <= margem/2  ||a.x >= tamanhox+margem   ) {a.vx*=-1}
        if (a.y <= margem/2  ||a.y >= tamanhoy+margem   ) {a.vy*=-1}
        //margem_y/2 e margem_yx/1 é anisotropico
    }
       



}








//PARAMETROS DE INICIO

const g=9.81
const quantidade=15
const quantidade2=25
const quantidade3=20

const quantidade4=3
// folhas=criar(quantidade4,"green")
// amarela=criar(quantidade4,"yellow")





let petalas=criar(quantidade,"orange")
// let flor=criar(quantidade2,"brown")
let flor=criar(quantidade2,"#66441b")
// let folhas=criar(quantidade3,"#332A1Fff")    
let folhas=criar(quantidade3,"#db5c35")
let grama=criar(quantidade4,"orange")


const atualiza = ()=> {
    
    
    regra(petalas,petalas,0.1)
    regra(petalas,flor,-0.1)
    regra(petalas,folhas,0.2)

    //comida
    regra(flor,petalas,0.1)
    regra(flor,petalas,0.1)
    regra(flor,folhas,0.1)

    regra(folhas,flor,0.1)
    regra(folhas,folhas,0.1)
    regra(folhas,petalas,0.1)

    regra(grama,grama,-0.1)  
    
    regra(flor,grama,-0.2)
    regra(petalas,grama,-0.2)
    regra(folhas,grama,-0.4)
  
    // ctx.clearRect(margem,margem,tamanhox,tamanhoy)

   
    // ARTISTICO BLUR


    desenha(0,0,"white",0)
    for (let i = 0; i < particulas.length; i++) {
        // desenha(particulas[i].x,particulas[i].y+200,particulas[i].cor,4)
        desenha(Math.floor(particulas[i].x) ,Math.floor(particulas[i].y)+200,particulas[i].cor,4);
      
        ctx.stroke()
        
    }

        requestAnimationFrame(atualiza)

}

atualiza();




    }


    return <Canvas className={styles.pintura} draw={draw} devolveParticulas={devolveParticulas} onClick={(particulas) => { pegaClique(particulas) }} />
}

export default Graminha