

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



const movimentaBloco1 = (bloco,velocidade, cicloX,cicloIndice)=>{
    let posicaoXbloco = parseInt(window.getComputedStyle(bloco).left)
 
         if(posicaoXbloco >=550)
         cicloX= true
         if(posicaoXbloco <= 20)
         cicloX= false         

        if((cicloX==false)&&(posicaoXbloco<550))
        {
            bloco.style.left = (posicaoXbloco + velocidade) + "px"
        }       
        if(cicloX==true)
        {
            bloco.style.left = (posicaoXbloco - velocidade) + "px"
        }
        ciclo[cicloIndice] = cicloX
   
}

setInterval(()=>{
    
    // movimentaBloco1(bloco1,4,ciclo[0],0)
    // movimentaBloco1(bloco2,3,ciclo[1],1)
    //movimentaBloco1(bloco3,2,ciclo[2],2)
    acompanha()
  
 },30);



export default{ 
    getX_blocoCF1:getX_blocoCF1, getY_blocoCF1:getY_blocoCF1,
    getX_blocoCF2:getX_blocoCF2, getY_blocoCF2:getY_blocoCF2,
    getX_blocoCF3:getX_blocoCF3, getY_blocoCF3:getY_blocoCF3,
    getX_blocoCF4:getX_blocoCF4, getY_blocoCF4:getY_blocoCF4,
    getX_blocoCF5:getX_blocoCF5, getY_blocoCF5:getY_blocoCF5,
    getX_bloco1:getX_bloco1, getY_bloco1:getY_bloco1,
    getX_bloco2:getX_bloco2, getY_bloco2:getY_bloco2,
    getX_bloco3:getX_bloco3, getY_bloco3:getY_bloco3   
}