

const bloco0 = document.getElementById("bloco0")
const bloco1 = document.getElementById("bloco1")


const getX_bloco0 = () =>{
    return parseInt(window.getComputedStyle(bloco0).left)
}
const getY_bloco0 = () =>{
    return parseInt(window.getComputedStyle(bloco0).bottom)
}

const getX_bloco1 = () =>{
    return parseInt(window.getComputedStyle(bloco1).left)
}
const getY_bloco1 = () =>{
    return parseInt(window.getComputedStyle(bloco1).bottom)
}




export default{ 
    getX_bloco1:getX_bloco1, getY_bloco1:getY_bloco1,
    getX_bloco0:getX_bloco0, getY_bloco0:getY_bloco0

}