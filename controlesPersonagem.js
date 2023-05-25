const heroizinho = document.getElementById("heoizinho")
const campoAtq = document.getElementById("campoAtaqueHeroi")


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
      novaPosição = heroizinhoPositionX - 2
      heroizinho.style.left = novaPosição +"px"
      campoAtq.style.left = (novaPosição - 40) +"px"
    }
    if ((funcao == 'r')&&(heroizinhoPositionX<600)){
      novaPosição = heroizinhoPositionX + 2
      heroizinho.style.left = novaPosição +"px"
      campoAtq.style.left = (novaPosição - 40) +"px"
    }
    if ((funcao == 'u')&&(heroizinhoPositionY<269)){      
      novaPosição = heroizinhoPositionY + 2
      heroizinho.style.bottom = novaPosição +"px"
      campoAtq.style.bottom = novaPosição +"px"
    }
    if ((funcao == 'd')&&(heroizinhoPositionY>5)){
      novaPosição = heroizinhoPositionY - 2
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


});


export default {
    getX:getX,
    getY:getY,
    getAtq:getAtq
}