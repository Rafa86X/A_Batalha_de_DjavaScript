import movEnimigo from "./movEnimigo.js";
import controlesPersonagem from "./controlesPersonagem.js";
import blocosDano from "./blocosDano.js"

let comandoAtq
let vidaHeroi = 1000
let tempoNovoDanoH = 0
let travaDanoH = false
let vidaEnimigo = 10000
let tempoNovoDanoE = 0
let travaDanoE = false

const gettravaDanoE = ()=>{
    return travaDanoE
}
const getVidaHeroi = ()=>{
    return vidaHeroi
}
const getVidaEnimigo = ()=>{
    return vidaEnimigo
}

const ColisaoEnimigo = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{

    if((Math.abs(posiHeroiX - enimigoX) < 42) &&
    ((Math.abs(posiHeroiY - enimigoY) < 50)))
    {
        travaDanoH ? "": travaDanoH=true
    }
}

const blocoColisaoDano = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{

    if((Math.abs(posiHeroiX - enimigoX - 3) < 50) &&
    ((Math.abs(posiHeroiY - enimigoY - 3) < 50)))
    {
        travaDanoH ? "": travaDanoH=true
    }

}

const blocoColisaoCortinaFogo = (posiHeroiX,enimigoX)=>{

    if(Math.abs(posiHeroiX - enimigoX) < 42)  
    {
        travaDanoH ? "": travaDanoH=true
    }

}

const contatoAtq = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{
    if((Math.abs(posiHeroiX - enimigoX) < 80) &&
    ((Math.abs(posiHeroiY - enimigoY) < 45))&&
    (comandoAtq == "5"))
    {
        {   
            movEnimigo.enimigo.style.backgroundColor = "red"        
            travaDanoE = true
        }
    }  
}


const novoDanoNoHeroi = ()=>{

    if((tempoNovoDanoH==0)&&(travaDanoH)){
        vidaHeroi = vidaHeroi - 10
    }

    if(travaDanoH==true){
        if(tempoNovoDanoH<20){
            tempoNovoDanoH++
        }else{
            tempoNovoDanoH = 0
            travaDanoH = false
        }
    }

}

const novoDanoNoEnimigo = ()=>{

    if((tempoNovoDanoE==0)&&(travaDanoE)){
        vidaEnimigo = vidaEnimigo - 10
    }
    if(travaDanoE==true){
        if(tempoNovoDanoE<20){
            tempoNovoDanoE++
        }else{
            movEnimigo.enimigo.style.backgroundColor = ""  
            tempoNovoDanoE = 0
            travaDanoE = false
        }
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

    novoDanoNoHeroi()
    novoDanoNoEnimigo()


},10);


export default {
    getVidaHeroi:getVidaHeroi,
    getVidaEnimigo:getVidaEnimigo,
    gettravaDanoE:gettravaDanoE
}