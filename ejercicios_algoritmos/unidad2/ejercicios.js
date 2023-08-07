/*2.1 Realice un diagrama de flujo y pseudocódigo 
que representen el algoritmo para obtener el área de un triángulo.*/

function areaRectangulo(base, altura){
    let area = (base * altura) / 2;
    return area;
}
let base = parseInt(prompt('Ingresa la medida de la base:'));
let altura = parseInt(prompt('La altura del triangulo es:'));
console.log('El area del rectangulo es: ', areaRectangulo(base, altura) + ' m2');



/*2.2 Una empresa importadora desea determinar cuántos dólares puede 
adquirir con equis cantidad de dinero mexicano. Realice un diagrama 
de flujo y pseudocódigo que representen el algoritmo para tal fin.*/

function adquirirDollars(dineroMexicano, dolares){
    
    let cantidad = dineroMexicano / dolares;
    return cantidad.toFixed(2);
};
let dineroMexicano = parseInt(prompt('Ingresa la cantidad de dinero mexicano:'));
let dolares = parseInt(prompt('El tipo de cambio de dolares es:'));
console.log('La cantidad de dolares que obtiene es: ', adquirirDollars(dineroMexicano, dolares) + ' dolares');



/*2.3 Una empresa que contrata personal requiere determinar la edad de 
las personas que solicitan trabajo, pero cuando se les realiza la entrevista
sólo se les pregunta el año en que nacieron. Realice el diagrama 
de flujo y pseudocódigo que representen el algoritmo para solucionar 
este problema.*/

function determinarAge(año){
  //Obtener la fecha actual
      var fechaActual = new Date();
  // Obtener el año local
      var añoLocal = fechaActual.getFullYear();
      const edad = añoLocal - año;
      return edad;
  }
  console.log('Una persona tiene ', determinarAge(1971) + " años");




/*2.4 Un estacionamiento requiere determinar el cobro que debe aplicar a 
las personas que lo utilizan. Considere que el cobro es con base en las 
horas que lo disponen y que las fracciones de hora se toman como 
completas y realice un diagrama de flujo y pseudocódigo que representen 
el algoritmo que permita determinar el cobro.*/


function cobro(horas, precioPorHora){

let resultado = horas * precioPorHora;
return resultado;

};

console.log(cobro(9, 12) + ' soles');



/*2.5 Pinturas “La brocha gorda” requiere determinar cuánto cobrar por 
trabajos de pintura. Considere que se cobra por m2 y realice un diagrama
de flujo y pseudocódigo que representen el algoritmo que le 
permita ir generando presupuestos para cada cliente*/


function costoTrabajo(totalMetros2, costo){

let resultado = totalMetros2 * costo;
return resultado;

};

console.log(costoTrabajo(15, 55) + ' soles');


/*2.6 Se requiere determinar la hipotenusa de un triángulo rectángulo. 
¿Cómo sería el diagrama de flujo y el pseudocódigo que representen 
el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene 
que: C2= A2 + B2*/


function calcularHipotenusa(catetoA, catetoB) {
//Math.sqrt() es una función en JavaScript que se utiliza para calcular la raíz cuadrada de un número.
    let hipotenusa = Math.sqrt( catetoA * catetoA + catetoB *  catetoB);
    return hipotenusa.toFixed(2);
  }

  let catetoA = + prompt('Ingresa el valor del cateto A:');
  let catetoB = + prompt('Ingresa el valor del cateto B: ');
  let resultado = calcularHipotenusa(catetoA, catetoB);
  console.log('La hipotenusa del triángulo rectángulo es:', resultado);




/*2.7 La compañía de autobuses “La curva loca” requiere determinar 
el costo que tendrá el boleto de un viaje sencillo, esto basado 
en los kilómetros por recorrer y en el costo por kilómetro. Realice un diagrama de 
flujo y pseudocódigo que representen el algoritmo para tal fin.*/


function costoBoleto(kilomertros, precioKm){

let resultado = kilomertros * precioKm;
return resultado ;
}
console.log(costoBoleto(12, 3) + ' soles');




/*2.8 Se requiere determinar el tiempo que tarda una persona en llegar de 
una ciudad a otra en bicicleta, considerando que lleva una velocidad 
constante. Realice un diagrama de flujo y pseudocódigo que 
representen el algoritmo para tal fin.*/


function tiempoRecorrido(distancia, velocidad){
//distancia = kilometros
//kilometros*hora
//tiempo = hora
  let tiempo = distancia / velocidad;

console.log('El tiempo recorrido es: ', tiempo + ' horas');
}
tiempoRecorrido(20, 100);



/*2.9 Se requiere determinar el costo que tendrá realizar una llamada 
telefónica con base en el tiempo que dura la llamada y en el costo por 
minuto. Realice un diagrama de flujo y pseudocódigo que representen 
el algoritmo para tal fin.*/


function costoLlamada(tiempo, costoMinuto){

let resultado = tiempo / costoMinuto;
return resultado;

}
console.log(costoLlamada(1.30, 0.10) + ' soles')



/*2.10 La CONAGUA requiere determinar el pago que debe realizar una 
persona por el total de metros cúbicos que consume de agua. 
Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo que permita determinar ese pago.*/


function pagoPorMetros(metrosCubicos, pago){

let resultado = metrosCubicos * pago
return resultado;

};
console.log('El pago es '+ pagoPorMetros(30, 3) + ' soles');




/*2.11 La compañía de luz y sombras (CLS) requiere determinar el pago 
que debe realizar una persona por el consumo de energía eléctrica, 
la cual se mide en kilowatts (KW). Realice un diagrama de flujo y 
pseudocódigo que representen el algoritmo que permita determinar ese pago.*/

function pagoPorPersona(consumo, precio){

let resultado = consumo * precio;
return resultado;

}
console.log(pagoPorPersona(220, 2.5) + ' soles');



/*2.12 Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo para determinar cuánto pagará finalmente una persona 
por un artículo equis, considerando que tiene un descuento de 20%, 
y debe pagar 15% de IVA (debe mostrar el precio con descuento y el 
precio final).*/

function costoArticulo( precioOriginal, descuento, Iva){

let precioDescuento = precioOriginal - (precioOriginal * descuento);
let precioFinal = (precioDescuento * Iva) + precioDescuento;
console.log(precioDescuento);
console.log('El precio final del articulo es: ', precioFinal);
}
costoArticulo(300, 0.20, 0.15);



/*2.13 Realice un diagrama de flujo y pseudocódigo que representen el
algoritmo para determinar cuánto dinero ahorra una persona en un 
año si considera que cada semana ahorra 15% de su sueldo (considere 
cuatro semanas por mes y que no cambia el sueldo).*/


function calcularAhorroAnual(sueldoMensual){

  const semanasPorMes = 4;
  const porcentajeAhorro = 0.15;
  const mesesAnio = 12;
  
  //monto semana1
  const ahorroSemanal = (sueldoMensual + porcentajeAhorro) / semanasPorMes;
  const ahorroMensual = ahorroSemanal + semanasPorMes;
  const ahorroAnual = ahorroMensual * mesesAnio;
  
  return ahorroAnual;
}
const saldoMensual = 1200;
const ahorroTotal = calcularAhorroAnual(saldoMensual);

console.log('El monto total ahorrado en un año es : ', ahorroTotal + ' soles');




/*2.14 Una empresa desea determinar el monto de un cheque que debe 
proporcionar a uno de sus empleados que tendrá que ir por equis 
número de días a la ciudad de Monterrey; los gastos que cubre la 
empresa son: hotel, comida y 100.00 pesos diarios para otros gastos.
El monto debe estar desglosado para cada concepto. Realice un 
diagrama de flujo y pseudocódigo que representen el algoritmo 
que determine el monto del cheque.*/

function montoCheque(hotel, comida, dias){

let resultado = (hotel + comida + 100) * dias; 
return resultado ;

}
console.log(montoCheque(50, 36, 1) + ' soles');



/*2.15Se desea calcular la potencia eléctrica de circuito de la figura 2.6. 
Realice un diagrama de flujo y el pseudocódigo que representen 
el algoritmo para resolver el problema. Considere que: P = V*I y V = R*I*/


function PotenciaCircuito(){
  
  let corriente = 3;
  let resistencia = 4;
  let voltaje = corriente * resistencia;
  let potencia = voltaje * corriente;

console.log('La corriente de amperios es: ', corriente);
console.log('La resistencia de ohmios es: ', resistencia);
console.log('El voltaje en voltios es: ', voltaje);
console.log('La potencia en watss es: ', potencia);

}
PotenciaCircuito();




/*2.19 Realice el diagrama de flujo y pseudocódigo que representen 
el algoritmo para encontrar el área de un cuadrado.*/

function areaCuadrado(lado1, lado2){
  const area = lado1 * lado2;
  return area;
}
let lado1 = parseInt(prompt('Ingresa la medida del lado1:'));
let lado2 = parseInt(prompt('Ingresa la medida del lado2:'));
console.log('El area del cuadrado es: ', areaCuadrado(lado1, lado2) + ' m2');




