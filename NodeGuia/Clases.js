/**
 * Clase: es un conjunto de objetos que eredan propiedades del mimo objeto prototipo.
 * El objeto prototipo es la caracteristica central de una clase.
 * 
 */

//Forma antigua de crear clases en JavaScript

//Esto es un constructor que inicializa nuevos objetos
function Rango(from, to) {
    this.from = from;
    this.to = to;
}

//funciona para rengos de texto, fechas o numeros. Devuelve true si x está en el rango.
Rango.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to
    }
    ,
    [Symbol.iterator]: function* () {//se hace para poder iterar el rango que se le da 
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString: function () {
        return "(" + this.from + " ... " + this.to + ")";
    }
};

let rango = new Rango(2, 8);
console.log(rango.includes(9));
console.log(rango.toString());
console.log([...rango]);


// Forma actual de cear clases JavaScript ECMAScript 6 (EC6)
class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    includes(x) {
        return this.from <= x && x <= this.to;
    }
    *[Symbol.iterator]() {//se hace para poder iterar el rango que se le da 
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }
    toString() {
        return "(" + this.from + " ... " + this.to + ")";
    }
}
let range = new Range(4, 9);
console.log(range.includes(3));
console.log(range.toString());
console.log([...range]);

class Span extends Range {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length)
        } else {
            super(start + length, start);
        }
    }
}
let span1 = new Span(1,10);
console.log(span1.includes(11));
console.log(span1.toString());

//Funcion como expresion
let square = function(x){
    return x*x;
}

//Clase como expresion
let Square = class{
    constructor(x){
        this.area = x*x;
    }
}
console.log(new Square(4).area);
let varSquare = new Square(4);
console.log(varSquare.area);

//Clase estatica
class Cuadrado{
    static calcularCuadrado(num){//Funcion estatica
        return num * num;
    }
    static texto = "Prueba static texto";//Variable estatica
    #variablePrivada = 0;//Con el numeral se busca que la variable sea privada, es valido en chrome y firefox hasta el momento.

    //Este metodo puede ser extendido y modificado por la clase que lo extienda
    metodoAbstracto(){
        throw new Error("Error ejemplo metodo abstracto");
    }
}
let cuadrado = Cuadrado.calcularCuadrado(4);//La clase estatica no se instancia con el new 
console.log(cuadrado);
let texto = Cuadrado.texto;//Las variables estaticas se acceden directamente
console.log(texto);
let varPrivada = Cuadrado.calcularCuadrado(4);
console.log(varPrivada.propiedadPrivada);































