import controlesPersonagem from "./controlesPersonagem.js";
import detectColisao from "./detectColisao.js";


const vidaHeroi = document.getElementById("vidaHeroi")
const vidaEnimigo = document.getElementById("vidaEnimigo")



setInterval(()=>{

    vidaHeroi.textContent = controlesPersonagem.getVidaHeroi()
    vidaEnimigo.textContent = detectColisao.getVidaEnimigo()

},10);




export default {}