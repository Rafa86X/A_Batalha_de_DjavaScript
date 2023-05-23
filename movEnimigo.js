import controlesPersonagem from "./controlesPersonagem.js"
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
let dano = false
let velocidade

setInterval(()=>{

    //console.log(getDano()[5]);

    if(getDano()[5] == "5"){
        dano= true
    }

    if(dano){
        alvoX = 700
        alvoY = 150
        velocidade = 2
    }else{
        alvoX = controlesPersonagem.getX()
        alvoY = controlesPersonagem.getY()
        velocidade = 1
    }
    posiX = getX()
    posiY = getY()

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

    
},10);


document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    switch (e.key) {
    
           
    case "p":
        ativado = true
        dano=false
        break;  
     }
});

export default {
    getX:getX,
    getY:getY,
    enimigo:enimigo
}