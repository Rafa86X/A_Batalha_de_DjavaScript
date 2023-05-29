import controlesPersonagem from "./controlesPersonagem.js"

const enimigo = document.getElementById("enimigo")

const getX = () =>{
    return parseInt(window.getComputedStyle(enimigo).left)
}
const getY = () =>{
    return parseInt(window.getComputedStyle(enimigo).bottom)
}
const setDano = (set) =>{
    dano = set
}
let dano
let novaPosição
let alvoX
let alvoY
let posiX
let posiY
let ativado=false

let velocidade
let fugindo = false
let pause = false
let posiXini = 630
let posiYini = 80

const recomeca = ()=>{
    if(pause){
        ativado = true
    }
    if((posiX == posiXini )&&(posiY==posiYini)&&(fugindo==true)){
            ativado = false
            fugindo = false
    }
    
}



const tomouDano =()=>{
    if(dano){
        fugindo = true
    }

    if(fugindo){
        velocidade = (alvoX - posiX < 10) ? velocidade = 1 : velocidade = 3
        alvoX = posiXini
        alvoY = posiYini

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

const corregedorDeEscala = () =>{
    
    if(!fugindo){
        if(controlesPersonagem.getX()>getX())
            enimigo.style.transform = 'scaleX(1)'
        else
            enimigo.style.transform = 'scaleX(-1)'
    }
    else
        enimigo.style.transform = 'scaleX(1)'
}

    const animacao = () =>{

        if(ativado){
            if(velocidade>1)
                enimigo.style.backgroundImage = 'url(./Gifs/enimigoCorrendoRapido.gif)'
            else
                enimigo.style.backgroundImage = 'url(./Gifs/enimigoCorrendo.gif)'
        }
        else
            enimigo.style.backgroundImage = 'url(./Gifs/enimigoParado.gif)'
        
    }



setInterval(()=>{
    animacao()
    corregedorDeEscala()
    posiX = getX()
    posiY = getY()
    mov()
    tomouDano()
    recomeca()
  
},20);


document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    switch (e.key) {
    
           
    case "p":
        pause = true
        break;  

        case "i":
        pause = false
        break;  
     }
});

export default {
    getX:getX,
    getY:getY,
    setDano:setDano
}