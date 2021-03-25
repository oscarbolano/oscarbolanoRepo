/**
 * Funciones en JavaScript:
 * Bloque de codigo que se define una vez pero puede ejecutarse tantas veces como se desee.
 * 
 * Parametro: variable que se le pasa a la funcion
 * Argumento: Valor que se le pasa a la funcion. 
 * 
 * Las funciones en JavaScript son objetos, como son objetos podemos establecer propiedades, tambien podemos invocar otras funciones
 * las definiciones de funciones se pueden anidar dentro de otras funciones.
 * 
 * Tres formas en las que se pueden definir funciones:
 * 
 * 1. ES6 se definen funciones flecha o lambda
 * 
 */
//Forma 1: Declaracion de funcion. Son la primeras que se construyen al ejecutarse JavaScript.
function factorial(x) {
    if (x <= 1) {
        return 1;
    }
    return x * factorial(x - 1);
}
//Forma 2: Expresion de funcion. Solo existen cuando se realiza la expresión
const factorial2 = function factorial2(x) {
    if (x <= 1) {
        return 1;
    }
    return x * factorial2(x - 1);
}
//Forma 3: 
const cuadrado = function (x) {
    return x * x;
}
console.log(cuadrado(7));

//Funcion de expresion que se auto-invoque
let cuadrado2 = (function (x) {
    return x * x;
}(8));
console.log(cuadrado2);

//Funciones flechas
const suma = (x, y) => {
    return x + y;
};
console.log(suma(3, 7));
//Funcion flecha mas compacta, debido a que solo tiene un return se puede quitar las llaves y el return
const suma2 = (x, y) => x + y;
console.log(suma2(3, 7));
//Funcion con un solo parametro
const polinomio = x => x * x + 2 * x + 3;
console.log(polinomio(3));
//Funcion sin parametro
const devolverConstante = () => 10;
console.log(devolverConstante());













