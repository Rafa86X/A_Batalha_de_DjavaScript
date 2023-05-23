import detectColisao from "./detectColisao.js";


const vidaHeroi = document.getElementById("vidaHeroi")
const vidaEnimigo = document.getElementById("vidaEnimigo")



setInterval(()=>{

    vidaHeroi.textContent = detectColisao.getVidaHeroi()
    vidaEnimigo.textContent = detectColisao.getVidaEnimigo()

},10);




export default {}