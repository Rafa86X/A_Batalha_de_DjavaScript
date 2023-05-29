import controlesPersonagem from "./heroi.js";
import movEnimigo from "./comportamentoEnimigo.js";
import porrete from "./porrete.js";




document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    switch (e.key) {

        case "y":
            porrete.reaparece()
            break; 
           
        case "p":
            movEnimigo.setPause(true)
            break;  

        case "i":
            movEnimigo.setPause(false)
            break;

        case "u":
            controlesPersonagem.settHeroiComPorrete(false)
            break;  
     }
});

export default{}