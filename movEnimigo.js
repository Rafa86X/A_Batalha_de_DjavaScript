import controlesPersonagem from "./controlesPersonagem.js"

import detectColisao from "./detectColisao.js"


const enimigo = document.getElementById("enimigo")


let novaPosição

const getX = () =>{
    return parseInt(window.getComputedStyle(enimigo).left)
}
const getY = () =>{
    return parseInt(window.getComputedStyle(enimigo).bottom)
}

const getDano =()=>{
    return window.getComputedStyle(enimigo).backgroundColor
}

let alvoX
let alvoY
let posiX
let posiY
let ativado=false
let corrida = false
let velocidade
let tempoRecomeca = 0
let chegouNopontoInicio = false

const recomeca = ()=>{

   console.log(tempoRecomeca, corrida);
    if((tempoRecomeca<500)){
        tempoRecomeca = tempoRecomeca + 1       
        
    }
    if(tempoRecomeca>=500){
        ativado = true
    }
    else{
        ativado = false
    }
        
    if((posiX == 700 )&&(posiY==150)&&(corrida==true)){
            corrida=false
            tempoRecomeca = 0
            console.log("tempoRecomeca, corrida")
            chegouNopontoInicio = true
    }
                     

}



const tomouDano =()=>{
    if(getDano()[5] == "5"){
        corrida= true
    }

    if(corrida){

        velocidade = (alvoX - posiX < 80) ? velocidade = 1 : velocidade = 2
        alvoX = 700
        alvoY = 150

    }else{
        alvoX = controlesPersonagem.getX()
        alvoY = controlesPersonagem.getY()
        velocidade = 1
    }

}



const mov = () =>{
    if(ativado){
        if(alvoX < posiX){
            novaPosição = posiX - velocidade
            enimigo.style.left = novaPosição +"px"
        }   
        if(alvoX > posiX){
            novaPosição = posiX + velocidade
            enimigo.style.left = novaPosição +"px"
        }    
        if(alvoY < posiY){
            novaPosição = posiY - velocidade
            enimigo.style.bottom = novaPosição +"px"
        }    
        if(alvoY > posiY){
            novaPosição = posiY + velocidade
            enimigo.style.bottom = novaPosição +"px"
        }  
    }
}

setInterval(()=>{
   
    posiX = getX()
    posiY = getY()
    mov()
    tomouDano()
    recomeca()
  
},10);


document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    switch (e.key) {
    
           
    case "p":
        ativado = true
        corrida=false
        break;  
     }
});

export default {
    getX:getX,
    getY:getY,
    enimigo:enimigo
}