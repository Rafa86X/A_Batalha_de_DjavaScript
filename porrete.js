const porrete = document.getElementById("porrete")

const getXPorrete = () =>{
    return parseInt(window.getComputedStyle(porrete).left)
  }
const getYPorrete = () =>{
    return parseInt(window.getComputedStyle(porrete).bottom)
  }

const desaparecePorrete = ()=>{
    porrete.style.visibility = 'hidden'
    porrete.style.left = 1000 + 'px'
    porrete.style.bottom = 1000 + 'px'
}




export default {   getXPorrete:getXPorrete,
                   getYPorrete:getYPorrete,
                   desaparecePorrete:desaparecePorrete
               }