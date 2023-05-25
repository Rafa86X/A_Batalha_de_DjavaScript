import controlesPersonagem from "./controlesPersonagem.js";
import movEnimigo from "./movEnimigo.js";

let principal = document.getElementsByClassName("arena")[0]
let lista = principal.getElementsByTagName("div")
const heroizinho = document.getElementById("heoizinho")


const troca = ()=>{

   if(controlesPersonagem.getY() > movEnimigo.getY()){
    principal.insertBefore( heroizinho,lista[0] )
   }
   else{
    principal.insertBefore( heroizinho,lista[-1] )
   }  

}

setInterval(()=>{
   
   troca()
  
},20);


export default{}