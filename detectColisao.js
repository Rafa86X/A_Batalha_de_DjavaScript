import movEnimigo from "./movEnimigo.js";
import controlesPersonagem from "./controlesPersonagem.js";
import blocosDano from "./blocosDano.js"
import porrete from "./porrete.js";

const heroizinho = document.getElementById("heoizinho")
const enimigo = document.getElementById("enimigo")


let comandoAtq
let vidaHeroi = 1000
let tempoNovoDanoH = 0
let travaDanoH = false
let vidaEnimigo = 10000
let tempoNovoDanoE = 0
let travaDanoE = false
let tempoAnimaDano = 0


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
    ((Math.abs(posiHeroiY  - enimigoY) < 5)))
    {
        travaDanoH=true
    }
}

const blocoPorrete = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{


    if((Math.abs(posiHeroiX + 60 - enimigoX-50)  < 50) &&
    ((Math.abs(posiHeroiY+20 - enimigoY-30) < 20)))
    {
        porrete.desaparecePorrete()
        controlesPersonagem.settHeroiComPorrete(true)
    }

}


const blocoColisaoDano = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{


    if((Math.abs(posiHeroiX + 40 - enimigoX - 3)  < 50) &&
    ((Math.abs(posiHeroiY - enimigoY - 3) < 20)))
    {
        travaDanoH=true
    }

}

const blocoColisaoCortinaFogo = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{

    if((Math.abs(posiHeroiX + 40 - enimigoX - 3)  < 50) &&
    ((Math.abs(posiHeroiY - enimigoY - 3) < 30)))
    {
        travaDanoH=true
    }

}

const contatoAtq = (posiHeroiX,posiHeroiY,enimigoX,enimigoY)=>{
    if((Math.abs(posiHeroiX - 20 - enimigoX) < 90) &&
    ((Math.abs(posiHeroiY - 10 - enimigoY) < 20))&&
    (comandoAtq)&&(controlesPersonagem.gettHeroiComPorrete()))
    {
        {   
            movEnimigo.setDano(true)
            travaDanoE = true
            //controlesPersonagem.settHeroiComPorrete(false)
        }
    }  
}


const novoDanoNoHeroi = ()=>{

    if((tempoNovoDanoH==0)&&(travaDanoH)){
        vidaHeroi = vidaHeroi - 10
    }

    if(travaDanoH){
        tempoAnimaDano++
        ((tempoAnimaDano % 5 === 0)||(tempoAnimaDano % 2 === 0)) ? heroizinho.style.visibility = 'hidden': heroizinho.style.visibility = 'visible';
        tempoAnimaDano > 100 ? tempoAnimaDano = 0: tempoAnimaDano
        if(tempoNovoDanoH<40){
            tempoNovoDanoH++

        }else{
            tempoNovoDanoH = 0
            travaDanoH = false
            heroizinho.style.visibility = 'visible';
        }
    }

}

const novoDanoNoEnimigo = ()=>{

    if((tempoNovoDanoE==0)&&(travaDanoE)){
        vidaEnimigo = vidaEnimigo - 10
    }
    if(travaDanoE){
            if(tempoNovoDanoE<80){
                tempoNovoDanoE++
                ((tempoNovoDanoE % 5 === 0)||(tempoNovoDanoE % 2 === 0)) ? enimigo.style.visibility = 'hidden': enimigo.style.visibility = 'visible';
                tempoNovoDanoE > 100 ? tempoNovoDanoE = 0: tempoNovoDanoE           
            }
            
        else{
            movEnimigo.setDano(false)
            tempoNovoDanoE = 0
            travaDanoE = false
            enimigo.style.visibility = 'visible';
        }
    }
}



setInterval(()=>{


    comandoAtq = controlesPersonagem.getAtq()
    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF1(),blocosDano.getY_blocoCF1())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF2(),blocosDano.getY_blocoCF2())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF3(),blocosDano.getY_blocoCF3())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF4(),blocosDano.getY_blocoCF4())

    blocoColisaoCortinaFogo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_blocoCF5(),blocosDano.getY_blocoCF5())
    
    blocoPorrete(controlesPersonagem.getX(),controlesPersonagem.getY(),
    porrete.getXPorrete(),porrete.getYPorrete())

    ColisaoEnimigo(controlesPersonagem.getX(),controlesPersonagem.getY(),
    movEnimigo.getX(),movEnimigo.getY())

    contatoAtq(controlesPersonagem.getX(),controlesPersonagem.getY(),
    movEnimigo.getX(),movEnimigo.getY())

    
    blocoColisaoDano(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_bloco1(),blocosDano.getY_bloco1())

    blocoColisaoDano(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_bloco2(),blocosDano.getY_bloco2())

    blocoColisaoDano(controlesPersonagem.getX(),controlesPersonagem.getY(),
    blocosDano.getX_bloco3(),blocosDano.getY_bloco3())

    novoDanoNoHeroi()
    novoDanoNoEnimigo()


},10);


export default {
    getVidaHeroi:getVidaHeroi,
    getVidaEnimigo:getVidaEnimigo,
    gettravaDanoE:gettravaDanoE,

}