
// algoritmo con If (la idea es que introducis un signo del zodiaco y te dice a que elemento pertenece)
let signo = prompt (" Ingrese un signo del Zodiaco, en minuscula, para saber el elemento: ");
let greeting; 
let aries = "aries";
let tauro = "tauro"; 
let geminis = "geminis";
let cancer = "cancer" ;
let leo = "leo";
let virgo = "virgo";
let libra = "libra";
let escorpio = "escorpio";
let sagitario = "sagitario";
let capricornio = "capricornio";
let acuario = "acuario";
let piscis = "piscis";

console.log ("Esta es la variable: " + signo);

if (signo === aries){
    greeting = "Tu elemento es de Fuego"
    alert (greeting);
} else if (signo === tauro){
    greeting = "Tu Elemento es de Tierra"
   alert (greeting);
} else if (signo === geminis ){
    greeting = "Tu Elemento es de Aire"
   alert (greeting);
} else if (signo === cancer ){
    greeting = "Tu Elemento es de Agua"
   alert (greeting);
}else if (signo === leo ){
    greeting = "Tu Elemento es de Fuego"
   alert (greeting);
}else if (signo === virgo ){
    greeting = "Tu Elemento es de Tierra"
   alert (greeting);
}else if (signo === libra ){
    greeting = "Tu Elemento es de Aire"
   alert (greeting);
}else if (signo === escorpio ){
    greeting = "Tu Elemento es de Agua"
   alert (greeting);
}else if (signo === sagitario ){
    greeting = "Tu Elemento es de Fuego"
   alert (greeting);
}else if (signo === capricornio ){
    greeting = "Tu Elemento es de tierra"
   alert (greeting);
}else if (signo === acuario ){
    greeting = "Tu Elemento es de Aire"
   alert (greeting);
}else if (signo === piscis ){
    greeting = "Tu Elemento es de Agua"
   alert (greeting);
} else {
    greeting = " Ese dato no pertenece al Zodiaco, volve a intentar: "
    alert (greeting);
}

// algoritmo con while (me queda el valor 4 que me tira los dos datos, el resto de los numeros andan bien *ayuda*)


let i = parseInt( prompt ("Ruleta Mágica, ingrese un numero del 1 al 10 para saber su suerte en el amor : " ));

while( i < 5){
    console.log(i);
    i ++ ;
    alert ( "Epa me parece que no es por ahi");
    break;
}

while (i >= 5){
    console.log(i);
    i++;
    alert ("Creo que te la tenes que jugar");
    break;
}



//algoritmo con function (es una calculadoa, si bien no tiene que ver con mi proyecto final, no se me ocurria como podia vincularlos)

let valorUno = parseInt (prompt ("Ingrese un numero: "));
let valorDos = parseInt (prompt ("Ingrese un numero: ")); 
let operacion = prompt ("Ingrese alguna de las operaciones (suma, division, multi o resta): ");

function calcular (a,b){
    if (operacion === "suma"){
    let resultado = a + b;
    return resultado; 
}else if (operacion === "resta"){
    let resultado = a - b;
    return resultado; 
}else if (operacion === "division"){
    let resultado = a / b;
    return resultado;
}else if (operacion === "multi"){
    let resultado = a * b;
    return resultado; 
}
}
let resultadoCalcular = calcular(valorUno,valorDos,operacion);
console.log(resultadoCalcular);






