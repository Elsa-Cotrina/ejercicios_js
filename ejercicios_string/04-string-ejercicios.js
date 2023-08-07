/**
 * EJERCICIO 1
 */
const isString = (test) => {
  if (typeof test === "string") {
    return true;
  } else {
    return false;
  }
};
console.log(isString(true));

//const isString = (test) => typeof test === 'string';
//console.log(isString(true));

/*EJERCICIO 2*/

const esCadenaEnBlanco = cadena => cadena.trim() === '';
const texto1 = "   ";
const texto2 = "Hola, esto no está en blanco";

console.log(esCadenaEnBlanco(texto1));
console.log(esCadenaEnBlanco(texto2));


/**
 * EJERCICIO 3
 * split=> Divide la cadena en palabras
 */
const dividirNombre = (cadena) => cadena.split(" ");

const nombreCompleto = "Elsa Cotrina";
const matrizPlabras = dividirNombre(nombreCompleto);

console.log(matrizPlabras);

/**
 * EJERCICO 4
 */
const extraerCaracteres = (cadena, cantidad) => cadena.slice(0, cantidad);

const text = "Esta es una cadena de ejemplo";
const caracteresExtraidos = extraerCaracteres(text, 11);

console.log(caracteresExtraidos);




/**
 * EJERCICIO 8
 */
//charAt=>Obtiene la primera letra
//slice(1)=>Obtiene el resto de la cadena
//tambien obtiene una porcion de la cadena
const primeraLetraMayuscula = (cadena) =>
  cadena.charAt(0).toUpperCase() + cadena.slice(1);

const texto = "hola, este es un ejemplo";
const textoConPrimeraMayuscula = primeraLetraMayuscula(texto);

console.log(textoConPrimeraMayuscula);



/**
 * EJERCICIO 13
 */

const concatenarCadena = (cadena, repeticiones = 1) =>
  repeticiones > 0 ? cadena.repeat(repeticiones) : '';

const textO = "ElsaCotrina";
const resultado1 = concatenarCadena(textO);          
const resultado2 = concatenarCadena(texto, 3);      
 const resultado3 = concatenarCadena(texto, 0);       

console.log(resultado1); 
console.log(resultado2); 
console.log(resultado3); 




/**
 * EJERCICIO 23
 */

const eliminarEspacios = cadena => cadena.trim();

const textoConEspacios = "   Esto es una cadena con espacios en blanco   ";
const resultado = eliminarEspacios(textoConEspacios);

console.log(resultado);


/**
 * EJERCICIO 34: Escriba una función de JavaScript para convertir una cadena en mayúsculas y minúsculas.
 */


const convertirMayusculasMinusculas = cadena => ({
  mayusculas: cadena.toUpperCase(),
  minusculas: cadena.toLowerCase()
});

const tex = "Este es mi perro que tiene hambre";

const resultad = convertirMayusculasMinusculas(tex);

console.log(resultad.mayusculas); 
console.log(resultad.minusculas)