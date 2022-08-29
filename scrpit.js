/* FUNCIONES

function solicitarNombre () {
 let nombre = prompt("Ingrese su nombre");
 console.log (`El nombre del usuario es ${nombre}`);

}

solicitarNombre();

*/

/* PARAMENTROS

function sumar (primerNumero, segundoNumero){                 son variables 
    let resultado = primerNumero + segundoNumero;
    return (resultado);                                       regresa el resutlado de la funcion
}

console.log (sumar (1,3));

*/

/* 

let numero1 = Number (prompt (" Ingrese un numero"));          pedimos los datos
let numero2 = Number (prompt (" Ingrese otro numero"));


function suma ( numero1, numero2){
    return (numero1 + numero2);                                  Le decimos a esta funcion que va  recibir dos paramentros ( de las variables )
                                                                  en el reutrn le decimos que sumen esas dos valores
}

let resultado = suma (numero1, numero2);                          al nombrar una variable dentro de una varible podemos llamar a la funcion para que ejectue lo que tiene adentro 

console.log (resultado);

*/
/*
function saludar (nombre = "desconocido", apellido = " "){

    console.log (`Hola ${nombre} ${apellido}`);
}

saludar ("Florencia" , "Scarzello");

*/
/*

let primerNumero = 0
let segundoNumero = 0

function calculadora ( primerNumero, segundoNumero, operacion){
  switch ( operacion){
    case "+":
      return primerNumero + segundoNumero
      break 
    case "-":
      return primerNumero - segundoNumero
      break 
    case "*":
        return primerNumero * segundoNumero
        break 
    case "/":
        return primerNumero / segundoNumero
        break 
      default:
        return 0;
     break;
    }
}

console.log ( calculadora (20,30,"+"));

*/




// SCOPE       ES AL AMBITO QUE SE PUEDE DESARROLLAR LAS VARIABLES ( GLOBAL vs LOCAL)




// LOCAL: vive dentro del ambito de una funcion

/*
function crearMensaje ( ) {
    let mensaje = "Mensaje de prueba"            Me tira error porque la viariable esta dentro de la funcion, 
                                                   y el console log no lo toma, si let estuviera afuera si me tomaria el console.log
}

console.log (mensaje);

*/
/*

iniciarApp()                                        llamo a la funcion

function iniciarApp (){                             la declaro 
    console.log( "Iniciando App....");
 
    segundaFuncion ()
}

function segundaFuncion() {
    console.log( "Desde la segunda funcion");

    usuarioAutenticado ()
}

function usuarioAutenticado (){
    console.log( "Autenticando Usuario... Espere");

    console.log (" Usuario Autenticado exitosamente ")
}

*/



// FUNCIONES FLECHA

//         const aprendiendo = function (){
//              console.log ("Aprendiendo...");
//            }

//  const aprendiendo =  () => {                             La funcion flecha nos da un beneficio que es el return elimina el console.log por el return
//                                                         y ademas elimina la palabra return y las llaves 
//    return ("Aprendiendo...");
//    }

/*
       const aprendiendo = () => "Aprendiendo...";
          
       console.log (aprendiendo());
*/




// FUNCIONES  ANONIMAS     se declaran sin nombre de funcion y dentro de una variable va a tener una instruccion determinada

/*
const saludo = function (){
    return "hola ";
}

console.log (saludo ());

*/

/* 

let producto = function (a,b,){                  no tiene nombre la funcion, responde a la variable y nombra parametros
    return (a * b);

}
let resultado = producto (3,6);                   dentro de otra variable llamo a la funcion y comparto los dos parametros que quiero que se multiplique 

console.log(resultado)

*/