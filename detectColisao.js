import movEnimigo from "./movEnimigo.js";
import controlesPersonagem from "./controlesPersonagem.js";
import blocosDano from "./blocosDano.js"


let comandoAtq
let danoEnimigo = false
let tempoDanoEnimigo = 0



const ColisaoEnimigo = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{

    if((Math.abs(posiHeroiX - enimigoX) < 42) &&
    ((Math.abs(posiHeroiY - enimigoY) < 50)))
    {
        console.log("Dano Enimigo no Heroi")
    }

}

const blocoColisaoDano = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{

    if((Math.abs(posiHeroiX - enimigoX - 3) < 50) &&
    ((Math.abs(posiHeroiY - enimigoY - 3) < 50)))
    {
        console.log("Dano bloco no Heroi")
    }

}

const blocoColisaoCortinaFogo = (posiHeroiX,enimigoX)=>{

    if(Math.abs(posiHeroiX - enimigoX) < 42)  
    {
        console.log("Dano Heroi Cortina")
    }

}

const contatoAtq = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{
    if((Math.abs(posiHeroiX - enimigoX) < 50) &&
    ((Math.abs(posiHeroiY - enimigoY) < 45))&&
    (comandoAtq == "5"))
    {
        {
            movEnimigo.enimigo.style.backgroundColor = "red"        
            danoEnimigo = true
        }

    }
    
    if((danoEnimigo)&&(tempoDanoEnimigo<40)){
        tempoDanoEnimigo++
      }
      else{
        movEnimigo.enimigo.style.backgroundColor = ""  
        danoEnimigo = false
        tempoDanoEnimigo = 0
      }

}

setInterval(()=>{


    comandoAtq = controlesPersonagem.getAtq()[12] 

    ColisaoEnimigo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    movEnimigo.getX(),movEnimigo.getY())

    contatoAtq(controlesPersonagem.getX(),controlesPersonagem.getY(),
    movEnimigo.getX(),movEnimigo.getY())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),blocosDano.getX_bloco0())

    blocoColisaoDano(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_bloco1(),blocosDano.getY_bloco1())





},10);


export default {}