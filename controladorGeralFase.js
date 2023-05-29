import controlesPersonagem from "./heroi.js";
import movEnimigo from "./comportamentoEnimigo.js";
import porrete from "./porrete.js";

let tempo=0
let jogando
let pegaHeroi_Z = [false,false,false,false,false,false,false,false,false,false]
let fazeExecutada = [false,false,false,false,false,false,false,false,false,false]

const tempoParaAcelerarEnimigo = ()=>{

    if(tempo<2000){
        tempo++
    }else{
        movEnimigo.setVelocidade(3)
    }

}

const pegaHeroi = (v_Enimigo,indice)=>{

    if(movEnimigo.getVidaEnimigo() == v_Enimigo){
        if(!movEnimigo.getAconteceuDano()){
            pegaHeroi_Z[indice]=true
            tempoParaAcelerarEnimigo()
            movEnimigo.setPause(false)
            
        }
        else{
            tempo = 0
        }
    }
}

const fases = () =>{
    if(((movEnimigo.getVidaEnimigo()==90)&&(pegaHeroi_Z[0])&&(!fazeExecutada[0]&&
        (movEnimigo.getPosicaoInicial())))){
            // console.log("deu certo");
    }
}

setInterval(()=>{
    if(jogando){
        pegaHeroi(100,0)
        fases()
    }

},10);


document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    switch (e.key) {

        case "y":
            porrete.reaparece()
            break; 
           
        case "p":
            jogando = true
            movEnimigo.setPause(true)
            break;  

        case "i":
            movEnimigo.setPause(false)
            break;

        case "u":
            controlesPersonagem.settHeroiComPorrete(false)
            break;
        case "t":
            movEnimigo.setVelocidade(0)
            break;  
        case "e":
            jogando=false
            break;        
     }
});

export default{}