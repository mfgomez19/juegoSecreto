let numeroSecreto=0;
let intentos = 0;
// esto es para declarar un arreglo donde diga que si el numero ya fue sorteado o no
let listaNumerosSorteados = [];
let numeroMaximo= 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}

function verificarIntento(){

    let numerDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    console.log(numeroSecreto);
    if(numerDeUsuario===numeroSecreto){
       
        asignarTextoElemento('p',  `El numero es correcto, fue adivinado en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }   
    else{
        //EL USUARIO NO ACERTO
        if(numerDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
  let valorCaja =  document.querySelector('#valorUsuario');
  valorCaja.value='';
}

function generarNumeroSecreto(){
    //la variable numeroSecreto esta creada solo para este bloque, la de arriba es para almacenar esto 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length ===numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        // si el numero generado esta incluido en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

     

}

function condicionesIniciales(){
    asignarTextoElemento('h1',"juego del numero secreto");
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar la caja
        limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales()
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales()