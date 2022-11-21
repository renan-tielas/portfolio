



import React from 'react'
import Canvas from './Canvas'




// const [n_quadro, setnQuadro] = useState(0)

// const limite_quadros=4;
//     const pegaClique = () => {

//         setnQuadro(n_quadro++)
//         if (n_quadro>limite_quadros) {
//             setnQuadro(0) 
//         }
//     }


//     const quadros = [<Flores2 estado={n_quadro} />,
//     <Graminha estado={n_quadro} />,
//     <Floresta  estado={n_quadro}/>,
//     <Orbita estado={n_quadro}/>]







function Flores2(estado) {
// particulas=[]
    const draw = (ctx, frameCount) => {
      

        // ctx.beginPath()
      
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//Parametros de TEla
// tamanho=580
const margem=100 //experimental o efeito ainda
const tamanhox=600-2*margem
const tamanhoy=500-2*margem

// const spawnx= 100
// const spawny= 100
//tamanhos são 2 margens menores que a largura do canvas

let contador=1
    
const desenha=(x,y,c,s)=>{
    contador++

    if (contador%30000==0){
       
              ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

            //   ctx.stroke();
particulas=[];
              petalas=criar(quantidade,"orange")
              // let flor=criar(quantidade2,"brown")
              flor=criar(quantidade2,"#A50104")
              // let folhas=criar(quantidade3,"#332A1Fff")    
              folhas=criar(quantidade3,"#db5c35")
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
            let d=Math.sqrt(dx*dx+dy*dy)


            let reducao_forca=100



        if(d>0 && d <reducao_forca){
            let F =g*1/d;
            fx += (F*dx)
            fy += (F*dy)
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

const g=10
const quantidade=60
const quantidade2=20
const quantidade3=0

const quantidade4=2
// folhas=criar(quantidade4,"green")
// amarela=criar(quantidade4,"yellow")





let petalas=criar(quantidade,"orange")
// let flor=criar(quantidade2,"brown")
let flor=criar(quantidade2,"#A50104")
// let folhas=criar(quantidade3,"#332A1Fff")    
let folhas=criar(quantidade3,"#db5c35")



const atualiza = ()=> {
    
    // regra(petalas,petalas,-0.1)
    // regra(petalas,flor,-0.01)
    // regra(flor,petalas,0.1)
    
    // regra(petalas,petalas,0.1)
    // regra(flor,petalas,0.15)
    // regra(folhas,folhas,-0.7)
    // regra(folhas,petalas,-0.2)
    // regra(petalas,folhas,-0.1)


    // regra(petalas,petalas,-0.05)
    // regra(petalas,flor,-0.1)
    // regra(flor,petalas,0.1)
    // regra(flor,folhas,0.1)
    // regra(folhas,flor,0.1)
    // regra(folhas,folhas,-0.05)

    
    
    regra(petalas,petalas,0.01)
    regra(petalas,flor,-0.2)
    regra(petalas,folhas,-0.3)

    regra(folhas,folhas,0.05)
    regra(folhas,flor,-0.3)
    regra(folhas,petalas,0.8)

    regra(flor,petalas,-0.4)
    // regra(flor,flor,-0.2)
    regra(flor,folhas,-0.3)
    // regra(petalas,flor,-0.1)
    // regra(flor,petalas,0.1)
    // regra(flor,folhas,0.1)
    // regra(folhas,flor,0.1)
    // regra(folhas,folhas,-0.05)
  
    // ctx.clearRect(margem,margem,tamanhox,tamanhoy)

   
    // ARTISTICO BLUR


    desenha(0,0,"white",0)
    for (let i = 0; i < particulas.length; i++) {
        desenha(Math.floor(particulas[i].x) ,Math.floor(particulas[i].y),particulas[i].cor,4);
      
        ctx.stroke()
    }

        requestAnimationFrame(atualiza)

}

atualiza();




    }
    

    return <Canvas draw={draw} estado={estado}/>
}




function Floresta(estado,margem,tela_largura,tela_altura,offset_x,offset_y,reducao_alcance_gravitacional,g,
    quantidade,cor,quantidade2,cor2,quantidade3,cor3,quantidade4,cor4,parametros_atracao,temporizador) {

   const draw = (ctx, frameCount) => {
     

       // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
       // ctx.fillStyle = '#000000'
       ctx.beginPath()
       // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
       // ctx.fill()


//Parametros de TEla
// tamanho=580
const margem = 100
const margem_x=200 
const margem_y=250 
const tela_largura = 600
const tela_altura = 600
const tamanhox=tela_largura-2*margem_x
const tamanhoy=tela_altura-2*margem_y

// const spawnx= 100
// const spawny= 100
//tamanhos são 2 margens menores que a largura do canvas

let contador=1
   
const desenha=(x,y,c,s)=>{
   contador++

   //Reseta após contagem
   const temporizador =100000
   if (contador%temporizador==0){
       ctx.beginPath();
             ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

           //   ctx.stroke();
particulas=[];
             petalas=criar(quantidade,"orange")
             // let flor=criar(quantidade2,"brown")
             flor=criar(quantidade2,"#A50104")
             // let folhas=criar(quantidade3,"#332A1Fff")    
             folhas=criar(quantidade3,"#db5c35")
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
           let d=Math.sqrt(dx*dx+dy*dy)


           let reducao_alcance_gravitacional=80



       if(d>0 && d <reducao_alcance_gravitacional){
           let F =g*1/d;
           fx += (F*dx)
           fy += (F*dy)
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
       if (a.x <= margem/2  ||a.x >= tamanhox+margem_x   ) {a.vx*=-1}
       if (a.y <= margem/2  ||a.y >= tamanhoy+margem_y   ) {a.vy*=-1}
       //margem_y/2 e margem_yx/1 é anisotropico
   }
      



}








//PARAMETROS DE INICIO

const g=9.81
const quantidade=30*1
const quantidade2=50*1
const quantidade3=40*1

const quantidade4=0*1
// folhas=criar(quantidade4,"green")
// amarela=criar(quantidade4,"yellow")





let petalas=criar(quantidade,"orange")
// let flor=criar(quantidade2,"brown")
let flor=criar(quantidade2,"#66441b")
// let folhas=criar(quantidade3,"#332A1Fff")    
// let folhas=criar(quantidade3,"#db5c35")
let folhas=criar(quantidade3,"rgba(235, 98, 18, 0.664)")

let grama=criar(quantidade4,"66441b")

const atualiza = ()=> {
   

   // PARAMETROS FLORES 2
   // regra(petalas,petalas,0.01)
   // regra(petalas,flor,-0.2)
   // regra(petalas,folhas,-0.3)

   // regra(folhas,folhas,0.05)
   // regra(folhas,flor,-0.3)
   // regra(folhas,petalas,0.8)

   // regra(flor,petalas,-0.4)
   // // regra(flor,flor,-0.2)
   regra(flor,folhas,-0.3)

   // PARAMETROS FLORESTA
   
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
   const offset_x=100;
   const offset_y=100
   for (let i = 0; i < particulas.length; i++) {

       // desenha(particulas[i].x+offset_x,particulas[i].y+offset_y,particulas[i].cor,4)
       desenha(Math.floor(particulas[i].x+offset_x) ,Math.floor(particulas[i].y+offset_y),particulas[i].cor,4);
       ctx.stroke()
       
   }

       requestAnimationFrame(atualiza)

}

atualiza();




   }


   return <Canvas draw={draw} estado={estado} />
}



function Pinturas(estado) {
    // particulas=[]
        const draw = (ctx, frameCount) => {
          
    
            // ctx.beginPath()
          
    
    //Parametros de TEla
    // tamanho=580
    const margem=100 //experimental o efeito ainda
    const tamanhox=600-2*margem
    const tamanhoy=500-2*margem
    
    // const spawnx= 100
    // const spawny= 100
    //tamanhos são 2 margens menores que a largura do canvas
    
    let contador=1
        
    const desenha=(x,y,c,s)=>{
        contador++
    
        if (contador%30000==0){
           
                  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    
                //   ctx.stroke();
    particulas=[];
                  petalas=criar(quantidade,"orange")
                  // let flor=criar(quantidade2,"brown")
                  flor=criar(quantidade2,"#A50104")
                  // let folhas=criar(quantidade3,"#332A1Fff")    
                  folhas=criar(quantidade3,"#db5c35")
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
                let d=Math.sqrt(dx*dx+dy*dy)
    
    
                let reducao_forca=100
    
    
    
            if(d>0 && d <reducao_forca){
                let F =g*1/d;
                fx += (F*dx)
                fy += (F*dy)
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
    
    const g=10
    const quantidade=60
    const quantidade2=20
    const quantidade3=0
    
    const quantidade4=2
    // folhas=criar(quantidade4,"green")
    // amarela=criar(quantidade4,"yellow")
    
    
    
    
    
    let petalas=criar(quantidade,"orange")
    // let flor=criar(quantidade2,"brown")
    let flor=criar(quantidade2,"#A50104")
    // let folhas=criar(quantidade3,"#332A1Fff")    
    let folhas=criar(quantidade3,"#db5c35")
    
    
    
    const atualiza = ()=> {
        
        // regra(petalas,petalas,-0.1)
        // regra(petalas,flor,-0.01)
        // regra(flor,petalas,0.1)
        
        // regra(petalas,petalas,0.1)
        // regra(flor,petalas,0.15)
        // regra(folhas,folhas,-0.7)
        // regra(folhas,petalas,-0.2)
        // regra(petalas,folhas,-0.1)
    
    
        // regra(petalas,petalas,-0.05)
        // regra(petalas,flor,-0.1)
        // regra(flor,petalas,0.1)
        // regra(flor,folhas,0.1)
        // regra(folhas,flor,0.1)
        // regra(folhas,folhas,-0.05)
    
        
        
        regra(petalas,petalas,0.01)
        regra(petalas,flor,-0.2)
        regra(petalas,folhas,-0.3)
    
        regra(folhas,folhas,0.05)
        regra(folhas,flor,-0.3)
        regra(folhas,petalas,0.8)
    
        regra(flor,petalas,-0.4)
        // regra(flor,flor,-0.2)
        regra(flor,folhas,-0.3)
        // regra(petalas,flor,-0.1)
        // regra(flor,petalas,0.1)
        // regra(flor,folhas,0.1)
        // regra(folhas,flor,0.1)
        // regra(folhas,folhas,-0.05)
      
        // ctx.clearRect(margem,margem,tamanhox,tamanhoy)
    
       
        // ARTISTICO BLUR
    
    
        desenha(0,0,"white",0)
        for (let i = 0; i < particulas.length; i++) {
            desenha(Math.floor(particulas[i].x) ,Math.floor(particulas[i].y),particulas[i].cor,4);
          
            ctx.stroke()
        }
    
            requestAnimationFrame(atualiza)
    
    }
    
    atualiza();
    
    
    
    
        }
        
    
        return <Canvas draw={draw} estado={estado}/>
    }
    



export default Pinturas





// TALVEZ SEJA POSSIVEL BOTAR TODOS AS PINTURAS NO MESMO COMPONENTE, E ALTERNAR DE ACORDO COM A CONTAGEM
