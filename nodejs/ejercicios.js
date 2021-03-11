/** 
- Cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.
*/
let expr1 = /[B-Z][^AEIOU]/g;
let expr2 = /[^AEIOU]/;
let text1 = "HOLA A TODOS";
text1 = text1.match(expr1).toString();
//text1 = text1.match(expr2);
console.log(text1);

/**
- A veces nos intersa no sólo saber si una cadena cumple un determinado patrón, sino extraer determinadas partes de él. 
    Por ejemplo, si una fecha está en el formato "27/11/2012" puede interesarnos extraer los números. Una expresión regular 
    que vale para esta cadena puede ser
*/
let expr3 = /\d+/g;
let text3 = "27/11/2012";
text3 = text3.match(expr3);
console.log(text3);

/**
- Escoger un algoritmo excepto El algoritmo de la Criba de Eratóstenes y utilizar los typed arrays en javascript. Del archivo pdf
*/


/**
- Programe una expresión regular que de este texto  "'hola tu' tururú" obtenga ["'hola tu'", "'"]
*/
let expr4 = /(\w+)/;
let text4 = "'hola tu' tururú";
text4 = text4.match(expr4);
console.log(text4);

/**
- Programe una expresión regular que de este texto   "papa" tururú" obtenga ["papa", "pa"]
*/
let expr5 = /(\w+)\pa/;
let text5 = "papa\" tururú";
text5 = text5.match(expr5);
console.log(text5);

/**
- Programe una expresión regular que de este texto  "java es güay" obtenga ["java"]
*/
let expr6 = /java/g;
let text6 = "java es güay";
text6 = text6.match(expr6);
console.log(text6);

/**
- Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10"]
*/
let expr7 = /\d+/g;
let text7 = "11 millas 10 km";
text7 = text7.match(expr7);
console.log(text7);

/**
- Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10 km"]
*/
let expr8 = /10 km/g;
let text8 = "11 millas 10 km";
text8 = text8.match(expr8);
console.log(text8);

/**
- Programe una expresión regular que de este texto   "11.22" obtenga [".22"]
*/
let expr9 = /.22/g;
let text9 = "11.22";
text9 = text9.match(expr9);
console.log(text9);

/*
- Programe una expresión regular que de este texto    "11 km 12 km 14m"  obtenga ["14"]
*/
let expr10 = /\d\d/g;
let text10 = "11 km 12 km 14m";
text10 = text10.match(expr10);
console.log(text10);

/**
- ¿Porque devuelve null  "hola".match(/HOLA/) y como arreglarlo para que devuelva ["hola"]?
*/
let expr11 = /HOLA/gi;
let text11 = "hola";
text11 = text11.match(expr11);
console.log(text11);

/**
- Programe una expresión regular que de este texto  "hola\ntu" obtenga ["tu"]
*/
let expr12 = /tu/g;
let text12 = "hola\ntu";
text12 = text12.match(expr12);
console.log(text12);
