/**
 * Modulos JavaScript. permite que grandes programas se ensamblen y que funcionen correctamente.
 * consiste en ocultar detalles de implementacion privada.
 * Mantener ordenado el namespace global para que los modulos no puedan modificar accidentalmente las 
 * variables, funciones y clases definidas por otros modulos. 
 */

const stats1 = (function () {//todo lo que esta destro de esta funcion es privado solo se accede por las funciones con return
    const sum = (x, y) => x + y;
    const square = x => x * x;

    function mean(data) {
        return data.reduce(sum) / data.length;
    }
    function stdDev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    }

    return {
        mean,
        stdDev
    }
}());

console.log(stats1.mean([1, 3, 5, 7, 9]));
console.log(stats1.stdDev([1, 3, 5, 7, 9]));

//console.log(stats1.sum(1, 2)); //no permite llamarla dirctamente por que es privada

const calculadora1 = (function () {
    const sumar = (x, y) => x + y;
    const restar = (x, y) => x - y;
    const multiplicar = (x, y) => x * y;
    const dividir = (x, y) => x / y;

    return {
        sumar,
        restar,
        multiplicar,
        dividir
    }
}());

console.log(calculadora1.restar(9, 3));

const modules = {};
function require(moduleName) {
    return modules[moduleName];
}

modules["stats.js"] = (function () {//
    const exports = {};

    const sum = (x, y) => x + y;
    const square = x => x * x;

    exports.mean = function (data) {
        return data.reduce(sum) / data.length;
    }
    exports.stdDev = function (data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)
        );
    }

    return exports;

}());

modules["calculadora.js"] = (function () {
    const exports = {};
    exports.sumar = function (x, y) { return x + y };
    exports.restar = function (x, y) { return x - y };
    exports.multiplicar = function (x, y) { return x * y };
    exports.dividir = function (x, y) { return x / y };

    return exports;

}());

const stats = require("stats.js");
console.log(stats.mean([1, 2, 3, 9]));
const calculadora = require("calculadora.js");
console.log(calculadora.multiplicar(2, 9));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
/**
 * Modulos ES6:
 * Los modulos en ES6 son oficiales para la mayoria de los navegadores, excepto IE.
 * En los modulos en ES6 cada archivo tiene su propio concepto privado y se puede usar la declaracion de importacion y exportacion.
 * Estan en modo estricto.
 */

export const PI = Math.PI;
export function convierteGradosARadianes(grados) {
    return grados + Math.PI / 180;
}
export class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}

/**
 * Segunda alternativa para exportar
 */
const PI2 = Math.PI;
function convierteGradosARadianes2(grados) {
    return grados + Math.PI2 / 180;
}
class Circulo2 {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI2 * this.radio * this.radio;
    }
}
export { PI2, convierteGradosARadianes2, Circulo2 };

//En caso que se requiera exportar un solo elemento(constante, funcion o clase) utilizamos
//En un modulo solo puede existir un export default
export default class BitSet { }
//La palabra clave export solo debe aparecer en el nivel superior de nuestro codigo JavaScript.
//No se puede usar export dentro de una clase, un ciclo o funcion.

/**
 * Import: Importa los elementos exportados de los modulos
 */
import BitSet from './bitset.js';//Asi se importan los modulos que fueron exportados con default
import { mean, stdDev } from './stats.js';//Importar varios elementos, suponiendo que existe el archivo stats.js


/**
 * Para tener en cuenta y evitr errores
 * 1. Las importaciones solo pueden aparecer en el nivel superir del modulo
 * 2. Por convencion las importaciones se ponen al inicio del modulo(esto por buena practica)
 * 3. Para la ruta del modulo se deben usar comillas simples o dobles ("path",'path'), no usar comilla inversa.
 */
import * as stats from './stats.js';// * importa todos los elementos de un modulo 
stats.mean();//para acceder a cada elemento importado del modulo

/**
 * Import para caso especial donde se tenga export dafault y otros export
 * Suponiendo que el archivo bitset.js tenga export default y otros export.
 */
import BitSet, { otroElementoExportado, otroSegundoElementoExportado } from './bitset.js';
import BitSet, * as nombre from './bitset.js';
import './archivoSinExport';//esto cuando se importa un archivo que no tiene export

/**
 * Import renombrados:
 * Es util cuando se importan elementos con onmbres iguales desde modulos diferentes.
 */
import { mean, stdDev } from './stats.js';
import { mean as meanRenombrado, stdDev2 } from './otherStats.js';//el elemento mean se llama igual y lo renombramos con as 

import { default as bitsetRenombre } from './bitset.js';//Renombrar elemento exportado con default

/**
 * Export renombrados:
 * 
 * Tener en cuenta:
 * 1 - no se permiten expresiones, ejemplo Math.cos as ..., esto daria error.
 */
export {
    PI2 as PI_Renombre,
    convierteGradosARadianes2 as nombreNuevo,
    Circulo2 as nuevoNombre
};

/**
 * Re-export: para re-exportar modulos
 * Unir dos modulos en uno.
 */
//hacemos Re-export desde nuevo archivo stat.js
import { mean } from './stats/mean.js';
import { stdDev } from './stats/stdDev.js';
export { mean, stdDev }
//hacemos Re-export desde los import
export { mean } from './stats/mean.js';
export { stdDev } from './stats/stdDev.js';
//hacemos Re-export de todos los elementos desde los import
export * from './stats/mean.js';
export * from './stats/stdDev.js';
//Imporar modulos re-exportados, tambien se pueden renombrar.
import { mean as nombreNuevo, stdDev } from './stat.js';

/**
 * Re-export elementos default
 */
export { default as mean } from './stats/mean.js';
export { default as stdDev } from './stats/stdDev.js';


