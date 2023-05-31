

const blocoCF1 = document.getElementById("blocoCF1")
const blocoCF2 = document.getElementById("blocoCF2")
const blocoCF3 = document.getElementById("blocoCF3")
const blocoCF4 = document.getElementById("blocoCF4")
const blocoCF5 = document.getElementById("blocoCF5")

const bloco1 = document.getElementById("bloco1")
const bloco2 = document.getElementById("bloco2")
const bloco3 = document.getElementById("bloco3")
const figuraBlocoDano1 = document.getElementById("figuraBlocoDano1")
const figuraBlocoDano2 = document.getElementById("figuraBlocoDano2")
const figuraBlocoDano3 = document.getElementById("figuraBlocoDano3")


const getX_blocoCF1 = () =>{
    return parseInt(window.getComputedStyle(blocoCF1).left)
}
const getY_blocoCF1 = () =>{
    return parseInt(window.getComputedStyle(blocoCF1).bottom)
}
const getX_blocoCF2 = () =>{
    return parseInt(window.getComputedStyle(blocoCF2).left)
}
const getY_blocoCF2 = () =>{
    return parseInt(window.getComputedStyle(blocoCF2).bottom)
}
const getX_blocoCF3 = () =>{
    return parseInt(window.getComputedStyle(blocoCF3).left)
}
const getY_blocoCF3 = () =>{
    return parseInt(window.getComputedStyle(blocoCF3).bottom)
}
const getX_blocoCF4 = () =>{
    return parseInt(window.getComputedStyle(blocoCF4).left)
}
const getY_blocoCF4 = () =>{
    return parseInt(window.getComputedStyle(blocoCF4).bottom)
}
const getX_blocoCF5 = () =>{
    return parseInt(window.getComputedStyle(blocoCF5).left)
}
const getY_blocoCF5 = () =>{
    return parseInt(window.getComputedStyle(blocoCF5).bottom)
}

const getX_bloco1 = () =>{
    return parseInt(window.getComputedStyle(bloco1).left)
}
const getY_bloco1 = () =>{
    return parseInt(window.getComputedStyle(bloco1).bottom)
}
const getX_bloco2 = () =>{
    return parseInt(window.getComputedStyle(bloco2).left)
}
const getY_bloco2 = () =>{
    return parseInt(window.getComputedStyle(bloco2).bottom)
}

const getX_bloco3 = () =>{
    return parseInt(window.getComputedStyle(bloco3).left)
}
const getY_bloco3 = () =>{
    return parseInt(window.getComputedStyle(bloco3).bottom)
}

const setFaseIniciada = (set,i) =>{
    faseIniciada[i] = set
}

const getFaseFinalizada = (i) =>{
    return faseConcluida[i]
}


const acompanha = ()=>{
    let a= 5,b = 10

    figuraBlocoDano1.style.left = (getX_bloco1() - a) +"px"
    figuraBlocoDano1.style.bottom = (getY_bloco1() - b) +"px"
    figuraBlocoDano2.style.left = (getX_bloco2() - a) +"px"
    figuraBlocoDano2.style.bottom = (getY_bloco2() - b) +"px"
    figuraBlocoDano3.style.left = (getX_bloco3() - a) +"px"
    figuraBlocoDano3.style.bottom = (getY_bloco3() - b) +"px"
 }

let ciclo = [false,false,false] 
let PosiIniFases = [600,150,650,10,625,80]
let faseIniciada = [false,false,false,false,false]
let trava = [false,false,false,false,false]
let faseConcluida = [false,false,false,false,false]
let posicaoXbloco
let posicionado = false
let passo = [false,false,false]

const posicaoIniCiclos = () =>{

    bloco1.style.left = PosiIniFases[0] + "px"
    bloco1.style.bottom = PosiIniFases[1] + "px"
    bloco2.style.left = PosiIniFases[2] + "px"
    bloco2.style.bottom = PosiIniFases[3] + "px"
    bloco3.style.left = PosiIniFases[4] + "px"
    bloco3.style.bottom = PosiIniFases[5] + "px"
}


const formacao1 =(velocidade)=>{

    if((!passo[0])&&(!passo[1])&&(!passo[2])){
        passo[0]=atitudeBloco(0,0,0,0,0,0,500,400,velocidade)
               
    }
    if((passo[0])&&(!passo[1])&&(!passo[2])){
        passo[1]=atitudeBloco(0,0,0,-10,10,0,650,650,velocidade) 
    }
    if((passo[0])&&(passo[1])&&(!passo[2])){
        passo[2]=atitudeBloco(0,0,0,0,-15,20,500,400,velocidade)        
    }
    if((passo[0])&&(passo[1])&&(passo[2])){
        return true        
    }
    else{
        return false
    }   

}


const formacao2 =(velocidade)=>{

    if((!passo[0])&&(!passo[1])&&(!passo[2])){
        passo[0]=atitudeBloco(0,0,0,0,0,0,500,400,velocidade)
               
    }
    if((passo[0])&&(!passo[1])&&(!passo[2])){
        passo[1]=atitudeBloco(0,0,0,-10,10,0,650,650,velocidade) 
    }
    if((passo[0])&&(passo[1])&&(!passo[2])){
        passo[2]=atitudeBloco(0,0,0,0,-15,20,500,200,velocidade)        
    }
    if((passo[0])&&(passo[1])&&(passo[2])){
        return true        
    }
    else{
        return false
    }   

}



const atitudeBloco = (posiX1,posiX2,posiX3,posiY1,posiY2,posiY3,referencia1,referencia2,velocidade) =>{

    if(!posicionado){
        bloco1.style.left = (PosiIniFases[0]+posiX1) + "px"
        bloco1.style.bottom = (PosiIniFases[1]+posiY1) + "px"
        bloco2.style.left = (PosiIniFases[2]+posiX2) + "px"
        bloco2.style.bottom = (PosiIniFases[3]+posiY2) + "px"
        bloco3.style.left = (PosiIniFases[4]+posiX3) + "px"
        bloco3.style.bottom = (PosiIniFases[5]+posiY3) + "px"
        posicionado = true
    }
    if(getX_bloco1()>-100){
        bloco1.style.left = (getX_bloco1() - velocidade ) + "px"
    }

    if((getX_bloco3()>-100)&&(getX_bloco1()<referencia1)){
        bloco3.style.left = (getX_bloco3() - velocidade ) + "px"
    }

    if((getX_bloco2()>-100)&&(getX_bloco1()<referencia2)){
        bloco2.style.left = (getX_bloco2() - velocidade ) + "px"
    }
    if((getX_bloco1()<=-100)&&(getX_bloco2()<=-100)&&(getX_bloco3()<=-100)){
        posicionado = false
        return true
    }
       
    else
        return false

}

const movimentaBloco1 = (bloco,velocidade, cicloX,cicloIndice)=>{
         posicaoXbloco = parseInt(window.getComputedStyle(bloco).left)
 
         if(posicaoXbloco >=550)
         cicloX= true
         if(posicaoXbloco <= 20)
         cicloX= false         

        if((cicloX==false)&&(posicaoXbloco<550))
        {
            c
        }       
        if(cicloX==true)
        {
            bloco.style.left = (posicaoXbloco - velocidade) + "px"
        }
        ciclo[cicloIndice] = cicloX
   
}

const dinamica1 = (velocidade,i) =>{
   
    if((faseIniciada[i])&&(!trava[i])){
        posicionado = false
        passo = [false,false,false]
        trava[i]=true
    }
    if((trava[i])&&(!faseConcluida[i])){
        faseConcluida[i] = formacao1(velocidade)       
    }
}

setInterval(()=>{
    
    // movimentaBloco1(bloco1,4,ciclo[0],0)
    // movimentaBloco1(bloco2,3,ciclo[1],1)
    //movimentaBloco1(bloco3,2,ciclo[2],2)
    acompanha()

    dinamica1(5,0)
    dinamica1(7,1)
    dinamica1(9,2)
    dinamica1(11,3)
    dinamica1(13,4)



  
 },30);



export default{ 
    getX_blocoCF1:getX_blocoCF1, getY_blocoCF1:getY_blocoCF1,
    getX_blocoCF2:getX_blocoCF2, getY_blocoCF2:getY_blocoCF2,
    getX_blocoCF3:getX_blocoCF3, getY_blocoCF3:getY_blocoCF3,
    getX_blocoCF4:getX_blocoCF4, getY_blocoCF4:getY_blocoCF4,
    getX_blocoCF5:getX_blocoCF5, getY_blocoCF5:getY_blocoCF5,
    getX_bloco1:getX_bloco1, getY_bloco1:getY_bloco1,
    getX_bloco2:getX_bloco2, getY_bloco2:getY_bloco2,
    getX_bloco3:getX_bloco3, getY_bloco3:getY_bloco3,
    setFaseIniciada:setFaseIniciada,
    getFaseFinalizada:getFaseFinalizada
}