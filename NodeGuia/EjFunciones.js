//////EJERCICIO////////////777
//Hacer:
//- 1 lider técnico: Wilmer
//- 3 equipos
//- 1 tester: Gustavo
//- 
/**
Nivel Facil:
1. https://edabit.com/challenge/3kcrnpHk7krNZdnKK
Nivel Intermedio:
1. https://edabit.com/challenge/RMZiERz2cbjmbXruY
2. https://edabit.com/challenge/ejfdLAp673DwxSg5R
Nivel Dificil:
1. https://edabit.com/challenge/wmdanmJkaT9waTg3y
 */


/**
 * Nivel medio:
 * 2. https://edabit.com/challenge/ejfdLAp673DwxSg5R
 * 
 * Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion 
 * of the total world's landmass.
 * 
 */
function areaOfCountry(name, area){
    let porcentaje = `${name} is ${(area/148940000 * 100).toFixed(2)}% of the total world's landmass`;
    return porcentaje;
}
console.log(areaOfCountry("Russia",17098242));
console.log(areaOfCountry("USA",9372610));
console.log(areaOfCountry("Iran",1648195));

