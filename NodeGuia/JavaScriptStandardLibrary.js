/*
Set Class un set es una coleccion de valores como una matriz, sin embargo a diferencia de las matrices es que los sets no estan ordenados ni indexados y no permiten duplicados, un valor es miembro de un set o no es miembro, no es posible preguntar cuantas veces aparee un valor en un conjunto
*/

let setOne = new Set();//set vacio
let setTwo = new Set([1, setOne]);//
let setThree = new Set(setTwo);//un nuevo set que copia los elementos de setOne
let setFour = new Set("Mississipi");//colocamos cuatro elementos: "M", "i", "s", "p"
console.log(setFour.size);
setOne.add(1);
setOne.add(1);
setOne.add(true);
setOne.add([1, 2, 3]);
setOne.add("Texto");
console.log(setOne.size);
setOne.delete(1);
console.log(setOne.size);
setOne.delete("Texto");
console.log(setOne.size);
setOne.clear();
console.log(setOne.size);
setOne.add("a").add("b").add("c");
console.log(setOne.size);

//Verificar si un valor es miembro del set
let digitsPrimes = new Set([2, 3, 5, 7]);
console.log(digitsPrimes.has(2));
console.log(digitsPrimes.has("2"));
console.log(digitsPrimes.has(70));

let sum = 0;
for (let prime of digitsPrimes) {
    sum += prime;
}
console.log(sum);

//conversion a matrices
console.log([...digitsPrimes]);
console.log(Math.max(...digitsPrimes));

//foreach
let product = 1;
digitsPrimes.forEach(prime => product *= prime);
console.log(product);


///////////////////////////////////////////////////////////////////////////////

/*
map class: 
*/

let mapOne = new Map();//Map vacio
let mapTwo = new Map([
    ["one", 1],
    ["two", 2]
]);//un nuevo mapa inicializado con claves de tipo string y mapeadas a nuemros
let mapThree = new Map(mapTwo);
let obj = { x: 1, y: 2 };
let mapFour = new Map(Object.entries(obj));//igual a new Map([["x",1],["y",2]]);

let mapFive = new Map();
console.log(mapFive.size);
mapFive.set("one", 1);
mapFive.set("two", 2);
console.log(mapFive.size);
console.log(mapFive.get("two"));
mapFive.set("one", true);
console.log(mapFive.get("one"));
console.log(mapFive.has("one"));
console.log(mapFive.has(true));
mapFive.delete("one");
console.log(mapFive.size);
mapFive.clear();
console.log(mapFive.size);
mapFive.set("one", 1).set("two", 2).set("three", 3);
console.log(mapFive.size);

let mapSix = new Map();
mapSix.set({}, 1);
mapSix.set({}, 2);
console.log(mapSix.get({}));
mapSix.set("one", undefined);
console.log(mapSix.get("one"));
console.log(mapSix.get("two"));

let mapSeven = new Map();
mapSeven.set("one", 1).set("two", 2).set("three", 3);
console.log([...mapSeven]);
for (let [key, value] of mapSeven) {
    console.log(`clave ${key} - valor ${value}`);
}
//console.log([...mapSeven.keys]);
//console.log([...mapSeven.values]);

mapSeven.forEach((value, key) => console.log(`clave ${key} - valor ${value}`));


///////////////////////////////////////////////////////////////////////////////

/*
Arrays typed: Los elementos de una typed arrays son todos numeros. permiten especificar
tipo y el tamaño de los numeros que se almacenaran en la raiz, se debe especificar la 
longitud de una matriz con tipo cuando se crea y esa longitud nunca puede cambiar,
los elementos de una matriz con tipo siempre se inicializan en 0 cuando se crea.
*/


let bytes = new Uint8Array(1024);//1024 bytes
let matrix = new Float64Array(9);//matriz 3 x 3
let point = new Int16Array(3);//un punto en un espacio de 3d
let rgba = new Uint8ClampedArray(4);//un valor de pixel rgba de 4 bytes

let white = Uint8ClampedArray.of(255, 255, 255, 0);//creamos el color blanco
let ints = Uint32Array.from(white);//los mismos 4 numeros como enteros

console.log(Uint8Array.of(1.23, 2.99, 45000));

/*
* Referencia opaca
*/

let buffer = new ArrayBuffer(1024 * 1024);//
console.log(buffer.byteLength);//IMprime el tamaño en bytes de buffer
let asBytes = new Uint8Array(buffer);
let asInts = new Int32Array(buffer);


/*
* Regular expressions:
* una expresion regular es un objeto que describe un patron textual
*/

let pattern = /s$/i;//utilizando literales 
let pattern2 = new RegExp("s$");//Utilizando constructor de regular expressions RegExp


/*
* ^ $ . * + ? = ! :   / \ ( ) [ ] { }
* caracteres de puntuaciòn "" @ , no tienen significado especial 
*/


/*
* Clases de caracteres:
* una clase de caracter coincide cin cualquier caracter que contenga los corchetes
* . :  Cualquier carácter excepto nueva línea u otro terminador de línea Unicode. O, 
*      si la expresión regular usa la marca s, entonces un punto coincide con cualquier carácter, 
*      incluidos los terminadores de línea.
* ^ :  Haga coincidir el comienzo de la cadena o, con la bandera m, el comienzo de una línea.
* $ :  Haga coincidir el final de la cadena y, con la bandera m, el final de una línea.
* \b : Coincide con el límite de una palabra. Es decir, haga coincidir la posición entre un carácter \w y un carácter \W o 
       entre un carácter \w y el principio o el final de una cadena. (Tenga en cuenta, sin embargo, que [\b] coincide con retroceso).
* \B : Coincidir con una posición que no sea un límite de palabras.
* (? = p) : Una afirmación de anticipación positiva. Requiere que los siguientes caracteres coincidan con el patrón p, 
            pero no los incluyas en la coincidencia.
* (?!p) : Una afirmación de anticipación negativa. Requiere que los siguientes caracteres no coincidan con el patrón p.
*/

let pattern3 = /[abc]/; // coincide con cualquier letra a, b o c
let pattern4 = /[^abc]/; // coincide con cualquier caracter que no sea a, b o c
let pattern5 = /[a-z]/; // Coincide con cualquier caracter en minuscula del alfabeto latino
let pattern6 = /[a-zA-Z]/; // Coincide con cualquier caracter ...
let pattern7 = /[a-zA-Z0-9]/; // Coincide con cualquier caracter ...
let pattern8 = /[...]/; // Coincide con cualquier caracter entre corchetes
let pattern9 = /[^...]/; // coincide con cualquier caracter que no este entre corchetes

/*
* Repeticiones en expresiones regulares:
* Son patrones mas complejos que utilizan una sintaxis que simplifica
* cuantas veces se puede repetir un elemento
* {n,m} Coincide con el elemento anterior al menos n veces pero no mas de m veces
* {n,} Coincide con el elemento anterior n o màs veces
* {n} Coincide con n apariciones con el elemento anterior
* ? Coincide con 0 o 1 apariciones del elemento anterior
*   Similar a colocar {0,1}
* + Significa que coincide con 1 o mas ocurrencias del elemento anterior. equivale a {1,}
* * Significa que coincide con 0 o mas ocurrencias del elemento anterior. equivale a {0,}
*/

let pattern10 = /\d/;//Coincide con un digito entre 0 y 9
let pattern11 = /\d\d/;//coincide con 2 dgitos entre 0 y 9
let pattern12 = /\d{2,4}/;//coincide entre 2 y no mas de 4 digitos
let pattern13 = /\w{3}\d?/;//Coincide con tres caracteres de palabras ASCII y un digito opcional
let pattern14 = /\s+java\s+/; //coincide con java con uno o mas espacios antes y despues
let pattern15 = /[^(]*/; //coincide con uno o mas caracteres que no sean parentesis abiertos


/*
* Flags en expresiones regulares:
* g Significa global, es decir que se usa para encontrar todas las coincidencias en una cadena 
*   en lugar de encontrar la primera coincidencia
* i Especifica que la coincidencia no debe distinguir entre mayusculas y minusculas
* m Especifica que la coincidencia debe realizarse en modo multilinea
* s Es util cuando se trabaja con texto que incluye nuevas lineas, similar a la m
* u Significa unicode. hace que la expresion regular coincida con los puntos de codigo unicode 
*   completos en lugar de coincidir cin los valores de 16 bits, si no se usa este flag las 
*   expresiones regulares no funcionaran bien con texto que incluya emojis y otros caracteres 
*   como caracteres chinos.
* y Indica que la expresion regular es sticky debe coincidir al principio de una cadena o en el 
*   primer caracter que sigue a la coincidencia anterior
*/



/*
* Metodos de String para coincidencia de patrones:
* search: Toma un argumento de la expresion regular y devuelve la primera subcadena coincidente o -1
*         si no encuentra, coincidencias no admite busquedas globales por lo tanto ignora el flag g
* replace: Hace una operacion de busqueda y remplazo. como primer argumento toma una expresion regular 
*          y como segundo argumento una cadena de reemplazo.
* Match: Toma una expresion regular como unico argumento y devuelve una matriz que contiene los resultados
*        de la coincidencia
* 
*/

console.log("JavaScript".search(/script/ui));
console.log("Python".search(/script/ui));

let text = "javascript";
text = text.replace(/javascript/gi, "JavaScript");
console.log(text);

let times = "15 times 15 is 225";
console.log(times.replace(/\d+/gu, n => parseInt(n).toString(16)));//transforma los numeros en exagecimal
console.log(times.replace(/\d+/gu, n => parseInt(n).toString(16)));

let text2 = "7 plus 8 equals 15";
console.log(text2.match(/\d+/g));

//Ejemplo funcion match
let url = /(\w+):\/\/([\w.]+)\/(\S+)/;
let text3 = "https://app.slack.com/client/T01PNKEEQSZ/C01PAUN1F7H";
let match = text3.match(url);
let fullUrl, protocol, host, path;
console.log(match);
if (match != null) {
    fullUrl = match[0];
    protocol = match[1];
    host = match[2];
    path = match[3]
}
console.log("fullUrl: " + fullUrl);
console.log("protocol: " + protocol);
console.log("host: " + host);
console.log("path: " + path);

/*
* Ejemplo buscar vocales en un texto, match
*/
let vocales = /[aeiou]/g;
let text4 = "hola";
matchText4 = text4.match(vocales);
console.log(matchText4);
if (matchText4 != null) {
    for (let vocal of matchText4) {
        console.log(vocal);
    }
}

/**
 * Funcion split 
 */
console.log("1,2,3".split(","));
console.log("1.2.3".split("."));
console.log("1, 2, 3,\n4, 5".split(/\s*,\s*/));

const htmlTag = /<([^>]+)>/;  // < followed by one or more non->, followed by >
console.log("Testing<br/>1,2,3".split(htmlTag)); // => ["Testing", "br/", "1,2,3"]


/**
 * Date and Times:
 * La clase date es la api de javascript para trabajar con fechas y horas.
 */
let now = new Date();//toma la fecha de la maquina local
console.log(now);

let epoch = new Date(0);//toma el numero de milisegundos desde 1970
console.log(epoch);

let century = new Date(2100, //año 2100 
    0, //enero
    1, //primero del mes
    2, 3, 4, 5); //02:03:04.005 hora local
console.log(century);

let century2 = new Date(2100, //año 2100 
    0, //enero
    1, //primero del mes
); //deja las horas en cero, media noche
console.log(century2);

/**
 * UTC: tiempo universar cordinado:
 * Es el principal estandar de tiempo por el cual el mundo regula los relojes
 */

let century3 = Date.UTC(2100, 0, 1);//Devuelve una marca de tiempo en milisegundos
console.log(century3);

let century4 = new Date(Date.UTC(2100, 0, 1));//convierte los milisegundos en una fecha normal
console.log(century4);

console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getDate());

/**
 * Se utiliza el UTC para hora internacional
 */
console.log(now.getUTCDay());
console.log(now.getUTCMonth());
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());
console.log(now.getUTCMinutes());
console.log(now.getUTCSeconds());
console.log(now.getUTCMilliseconds());
console.log(now.getUTCDate());

/**
 * set de los metodos 
 */
/*console.log(now.setMonth(2));
console.log(now.setFullYear(2021));
console.log(now.setHours(12));
console.log(now.setMinutes(3));
console.log(now.setSeconds());
console.log(now.setMilliseconds());
console.log(now.setTime());
console.log(now.setDate());*/

/**
 * set de los metodos UTC
 */
/*
console.log(now.setUTCMonth(3));
console.log(now.setUTCFullYear(2021));
console.log(now.setUTCHours());
console.log(now.setUTCMinutes());
console.log(now.setUTCSeconds());
console.log(now.setUTCMilliseconds(123));
console.log(now.setUTCDate(3));
console.log(now); */

console.log(now);
now.setTime(now.getTime() + 30000);
console.log(now);

let startTime = Date.now();
let endTime = Date.now();
console.log(`Tiempo de ejecución ${startTime - endTime}`);

/**
 * Formato de fechas convertir los objetos de fechaen cadenas
 * toString() : Transforma la fecha a texto usando la zona horaria local
 */
let fechaText = now.toString();
console.log(fechaText);
let fechaTextUTC = now.toUTCString();
console.log(fechaTextUTC);

let toIsoString = now.toISOString();
//este formato imprime año-mes-dia hora:minutos:segundos.milisegundos
//T: Separa la fecha y la hora
//Z: Especifica hora local 
console.log(toIsoString);

console.log(now.toLocaleString());//Hora en texto local
console.log(now.toDateString());//Transforma solo la fecha a string
console.log(now.toLocaleDateString());//
console.log(now.toTimeString());//
console.log(now.toLocaleTimeString());//

let fechaTransform = Date.parse("2021/03/12");//Transformacion de cadena a fecha. queda en milisegundos
console.log(fechaTransform);

/**
 * 
 * EXCEPCIONES 
 * 
 * clase error: se recomienda ponerla antes de throw
 * Se pueden definir subclases de error como en java
 * Se pueden definir propiedades propias
 * No usar codigos de error quemados en if, siempre manejar excepciones con throw.
 */

class HTTPError extends Error {
    constructor(status, statusText, url) {
        super(`${status} ${statusText}: ${url}`);
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }
    get name() {
        return "HTTPerror";
    }
}

let error = new HTTPError(404, "Not Found", "http://example.cohttps://app.slack.com/client/T01PNKEEQSZ/C01PAUN1F7Hm");
console.log(error.status);
console.log(error.message);
console.log(error.name);


/**
 * Serializaciones:
 * Cuando se va a transmitir datos a traves de la red, necesitamos convertr estructuras de datos en cadenas y para esto necesitamos serializar
 * la mejor forma para serializar estructuras de datos es utilizando JSON 
 * Qué admit JSON? cadenas, numeros primitivos(enteros, double, float...),  matrices y objetos JavaScript
 * Qué no admite? Maps, Sets, objetos de tipo RegExp(regular expresion), Typed Arrays y Dates
 * JSON.stringify() : para serializar
 * JSON.parse() : para desserializar
 */
let object = { s: "", n: 0, a: [true, false, null] };
let serializacion = JSON.stringify(object);
console.log(serializacion);
let desserializacion = JSON.parse(serializacion);
console.log(desserializacion);

console.log(JSON.stringify(object, null, 2));//recomendado 2 espacios de sangria
console.log(JSON.parse(JSON.stringify(object, null, 2)));//el parse ignora los espacios (sangria) que se le asignan en stringify

/**
 * API de internacionalizacion:
 * Nos permite formatear numeros, formatearlos con formatos moneda, %, etc.
 */
let euro = Intl.NumberFormat("es", { style: "currency", currency: "EUR" });
console.log(euro.format(10));


/**
 * Api de internacionalzación: 
 */
let euro1 = Intl.NumberFormat("es", { style: "currency", currency: "COP" });
console.log(euro1.format(100000));

let data = [0.05, 0.75, 1];
let formatData = Intl.NumberFormat(undefined, { style: "percent", minimunFractionDigits: 1 }).format;
console.log(data.map(formatData));

let arabic = Intl.NumberFormat("ar", { useGrouping: false }).format;//Numeros arabes
console.log(1234567890);

let indi = Intl.NumberFormat("hi-IN-u-nu-deva").format;//Numeros indios
console.log(indi(1234567890));


let date = new Date("2021-03-16T08:54:15Z");
console.log(date);
console.log(Intl.DateTimeFormat("en-US").format(date));//estados unidos
console.log(Intl.DateTimeFormat("fr-FR").format(date));//Francia
console.log(Intl.DateTimeFormat("es-ES").format(date));//España

//deletrear numero de la semana y mes
let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" }
console.log(Intl.DateTimeFormat("en-Us", opts).format(date));
opts = { hour: "numeric", minute: "2-digit", hour12: true, hourCycle: "h11" };//Digitos de los minutos
console.log(Intl.DateTimeFormat("en-Us", opts).format(date));

//Calendarios no cristianos
console.log(Intl.DateTimeFormat("en-u-ca-hebrew", opts).format(date));//hora hebrea
let opts2 = { year: "numeric", era: "short" }//en era son validos long, narrow.
console.log(Intl.DateTimeFormat("en-u-ca-hebrew", opts2).format(date));//año ebreo
console.log(Intl.DateTimeFormat("en-u-ca-buddhist", opts2).format(date));//año budista
console.log(Intl.DateTimeFormat("en-u-ca-chinese", opts2).format(date));//año chino
console.log(Intl.DateTimeFormat("en-u-ca-persian", opts2).format(date));//Año persa

/**
 * propiedad hourCycle:
 * h11: Media noche 00:00 y 11 de la noche 11:00pm 
 * h12: Media noche 12:00pm
 * h23: Media noche 00:00 y 11 de la noche 23:00
 * h24: Media noche 24:00
 */

/**
 * API de URL:
 * Es una clase que se usa para dividir una URL en varias partes
 */

let url2 = new URL("https://example.com:8000/path/name?q=term#fragment ");
console.log(url2.href);
console.log(url2.protocol);
console.log(url2.hostname);
console.log(url2.port);
console.log(url2.pathname);
console.log(url2.search);
console.log(url2.hash);

let url3 = new URL("ftp://admin:1337!@ftp.example.com/");
console.log(url3.username);
console.log(url3.password);
console.log(url3.protocol);

let url4 = "https://example.com";
console.log(url4.pathname = "api/search");
console.log(url4.search = "q-test");
console.log(url4.toString());

let url5 = new URL("https://example.com/search");
console.log(url5.search);
console.log(url5.searchParams.append("q", "test"));
console.log(url5.search);
url5.searchParams.set("q", "x");
console.log(url5.searchParams.get("q"));
console.log(url5.searchParams.has("q"));
url5.searchParams.append("others", "w");
console.log(url5.search);
url5.searchParams.append("others", "s");
console.log(url5.search);
console.log(url5.searchParams.getAll("others"));
console.log(url5.searchParams.sort());
console.log(url5.search);
console.log([...url5.searchParams]);
console.log(url5.searchParams.delete("others"));
console.log(url5.search);

/**
 * TIMERS:
 * Son funciones callback que permiten al nevegador invocar una funcion en intervalos de tiempo.
 * Funciona en los navegadores mas importantes
 */

setTimeout(() => {
    console.log("Ready...");
}, 1000);//argumento 1 es una funcion, argumento 2 un valor en milisegundos
setTimeout(() => {
    console.log("Set...");
}, 2000)
setTimeout(() => {
    console.log("Go...");
}, 3000);

let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(clock);
}, 10000);



/**
 * Funcion para comparar textos
 * Intl.Collator()
 */






