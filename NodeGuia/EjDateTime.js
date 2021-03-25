/**
 * Calcular la edad a partir de la fecha de nacimiento
 */
function calcularEdad(fecha) {
    let hoy = new Date();
    let fechaNac = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}
console.log(calcularEdad("12/31/1999")+" años");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Ejercicio 5 Librerias JavaScript: Date and Time
 * 
 */
function agregarMinutoFecha(fecha, minuto) {
    //now.setTime(now.getTime()+30000);
    fecha.setTime(fecha.getTime() + minuto * 60000);
    return fecha.toLocaleString();
}
let now = new Date();
let fecha2 = new Date(2021, 2, 12, 11, 40);
console.log(fecha2);
console.log(agregarMinutoFecha(now, 20));
/**
 * Funcion que da un saludo al usuario nombre, dependiendo del parametro de fecha
 * @param {*} fecha2 fecha para el saludo
 * @param {*} nombre nombre del usuario
 * @returns saludo
 */
function saludo(fecha2, nombre) {
    let greeting = "";
    let greeting2 = "";
    if (fecha2.toLocaleTimeString('es-CO').match(/p.\sm/gi) == null) {
        greeting = "Buenas días";
    } else if (fecha2.toLocaleTimeString('es-CO', { hour12: false }).match(/\d{2}/)[0] < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
    greeting2 =
        fecha2.toLocaleString('es-CO', {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
        }) +
        " y son las " + fecha2.getHours() + " horas y " + fecha2.getMinutes() + " minutos";
    return `${greeting}, ${nombre}. Hoy es ${greeting2} de ${greeting.match(/(?<=Buenas\s)\w*[^s]/)}`;
}
console.log(saludo(new Date(2021,2,2,19,23), "Wilman"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Ejemplo 3 Manejo de Horas en JavaScript
 Tienes un reloj digital con LEDs de 7 segmentos. Un día, al despertar de un sueño de ciencia-ficción,
 te preguntas: ¿cuántos segmentos se han encendido DESPUÉS DE X segundos, desde la posición 00:00:00?
 Considera que en cada segundo, todos los led se apagan y luego se encienden los correspondientes al instante actual.
 */
 let numeroSegmentos;
 resolver(1);
 function resolver (segundos)
 {
 nuemeroSegmentos=0;
 while (segundos>=0) {
  hora_actual = segundosToDate(segundos);
  console.log("hora_actual "+hora_actual);
  expresion = /[0-9]/g;
  hora = hora_actual.match(expresion);
  console.log("hora string "+hora);
     for(j = 0; j < hora.length; j++){
                 numero = hora[j];
                 switch(numero){
                     case 0: case 6: case 9: numeroSegmentos += 6;break;
                     case 1: numeroSegmentos += 2;break;
                     case 2: case 3: case 5: numeroSegmentos += 5;break;
                     case 4: numeroSegmentos += 4;break;
                     case 7: numeroSegmentos += 3;break;
                     case 8: numeroSegmentos += 7;break;
                 }
     }
  segundos--;
  }
  console.log("Segmentos "+numeroSegmentos);
 }
 function segundosToDate(segundos) {
   let hora= new Date();
   var hour = Math.floor(segundos / 3600);
   hour = (hour < 10)? '0' + hour : hour;
   hora.setHours(hour);
   var minute = Math.floor((segundos / 60) % 60);
   minute = (minute < 10)? '0' + minute : minute;
   hora.setMinutes(minute);
   var second = segundos % 60;
   second = (second < 10)? '0' + second : second;
   hora.setSeconds(second);
   return hora.toLocaleTimeString();
 }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


