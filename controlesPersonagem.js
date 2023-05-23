

//var principal = document.getElementsByClassName("game-board")[0]; // div principal
//var lista = principal.getElementsByTagName("div"); // pega os itens da lista


const heroizinho = document.getElementById("heoizinho")
const campoAtq = document.getElementById("campoAtaqueHeroi")
const enimigo = document.getElementById("enimigo")


let heroizinhoPositionX
let heroizinhoPositionY
var funcao = ''
let novaPosição
let ataque = false
let tempoAtq = 0

const getX = () =>{
    return parseInt(window.getComputedStyle(heroizinho).left)
}
const getY = () =>{
    return parseInt(window.getComputedStyle(heroizinho).bottom)
}

const getAtq = ()=>{
  return window.getComputedStyle(campoAtq).backgroundColor
}


const atacando = ()=>{

  if(ataque){
    campoAtq.style.backgroundColor = "blue"
  }
  else{
    campoAtq.style.backgroundColor = ""

  }

}

setInterval(()=>{

    heroizinhoPositionX = getX()
    heroizinhoPositionY = getY()


    if ((funcao == 'l')&&(heroizinhoPositionX>1)){      
      novaPosição = heroizinhoPositionX - 3
      heroizinho.style.left = novaPosição +"px"
      campoAtq.style.left = (novaPosição - 40) +"px"
    }
    if ((funcao == 'r')&&(heroizinhoPositionX<600)){
      novaPosição = heroizinhoPositionX + 3
      heroizinho.style.left = novaPosição +"px"
      campoAtq.style.left = (novaPosição - 40) +"px"
    }
    if ((funcao == 'u')&&(heroizinhoPositionY<269)){      
      novaPosição = heroizinhoPositionY + 3
      heroizinho.style.bottom = novaPosição +"px"
      campoAtq.style.bottom = novaPosição +"px"
    }
    if ((funcao == 'd')&&(heroizinhoPositionY>5)){
      novaPosição = heroizinhoPositionY - 3
      heroizinho.style.bottom = novaPosição +"px"
      campoAtq.style.bottom = novaPosição +"px"
    }

    if (funcao == 'a'){
      ataque = true;
    }

    if((ataque)&&(tempoAtq<20)){
        tempoAtq++
      }
      else{
        ataque = false
        tempoAtq = 0
      }
    

    atacando()

},10);


document.addEventListener('keyup', function(e) {
  const key = e.key;
            funcao = ''  
});


document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    if(e.key == "ArrowLeft"){
        funcao = 'l'
    }
    if(e.key == "ArrowRight"){
        funcao = 'r'
    }
    if(e.key == "ArrowUp"){
        funcao = 'u'
    }
    if(e.key == "ArrowDown"){
        funcao = 'd'
    }
    if(e.key == "a"){
      funcao = 'a'
  }


    switch (e.key) {
    
      case "d":
        principal.insertBefore( lista[(lista.length - 1)],lista[0] )
        break;
      case "e":
        enimigo.remove()
        break;
          
          
     }
});


export default {
    getX:getX,
    getY:getY,
    getAtq:getAtq
}