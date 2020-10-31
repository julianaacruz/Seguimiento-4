let enviar; 
let num;
var numero2;
num=document.querySelector(".number");
enviar=document.querySelector(".enviar");


enviar.addEventListener('click',()=> enviameEsto());

function enviameEsto(){
    numero2=parseInt(num.value);
    if(numero2>=1 && numero2<=10){
        window.location.href = "pantalla2.html";
    } else{
        alert ("Sólo numeros entre 1 y 10");
    }
}
