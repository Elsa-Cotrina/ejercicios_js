/*3.1 Realice un algoritmo para determinar si una persona puede votar 
con base en su edad en las próximas elecciones. Construya el diagrama 
de flujo, el pseudocódigo y el diagrama N/S.*/

const canVote = (edad) => edad >= 18;
console.log(canVote);
  
  

/*3.2 Realice un algoritmo para determinar el sueldo semanal de un trabajador con base 
en las horas trabajadas y el pago pderando que después de las 40 horas cada hora se considera como 
excedente y se paga el doble. Construya el diagrama de flujo, el 
pseudocódigo y el diagrama N/S.*/

const calculaSalario = (horas, salarioPersonasDias) =>
  horas <= 40 ? horas * salarioPersonasDias : 40 * salarioPersonasDias + (horas - 40) * salarioPersonasDias * 2;



/*3.3 El 14 de febrero una persona desea comprarle un regalo al ser querido que más 
aprecia en ese momento, su dilema radica en qué regalo 
puede hacerle, las alternativas que tiene son las siguientes:
Se requiere un diagrama de flujo con el algoritmo que ayude 
a determinar qué regalo se le puede comprar a ese ser tan especial por el 
día del amor y la amistad.*/

function sugerirRegalo(presupuesto) {
    if (presupuesto <= 10) {
      return "Tarjeta";
    } else if (presupuesto <= 100) {
      return "Chocolates";
    } else if (presupuesto <= 250) {
      return "Flores";
    } else {
      return "Anillo";
    }
  }
  
let presupuestoUsuario = parseFloat(prompt("Ingresa tu presupuesto disponible:")); 
let regaloSugerido = sugerirRegalo(presupuestoUsuario);
console.log("Te sugerimos regalar: ", regaloSugerido);
  

  

/*3.4 El dueño de un estacionamiento requiere un diagrama de flujo con 
el algoritmo que le permita determinar cuánto debe cobrar por el 
uso del estacionamiento a sus clientes. Las tarifas que se tienen son 
las siguientes:
Las dos primeras horas a $5.00 c/u.
Las siguientes tres a $4.00 c/u.
Las cinco siguientes a $3.00 c/u.
Después de diez horas el costo por cada una es de dos pesos.*/

const calculaParking = (horas) => {
  if(horas <= 2){
    return 5 * horas;
  }else if(horas <= 5){
    return 4 * horas;
  }else if(horas <= 10){
    return 3 * horas;
  }else{
    return 2 * horas;
  }
};
console.log(calculaParking(2) + ' pesos');



/*3.5 Se tiene el nombre y la edad de tres personas. Se desea saber el 
nombre y la edad de la persona de menor edad. Realice el algoritmo 
correspondiente y represéntelo con un diagrama de flujo, 
pseudocódigo y diagrama N/S.*/

//nombre y edad = 3
//se desea saber el nombre de la persona<

const personaMasJoven = personas => {
  let personaMenorEdad = personas[0];

  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad < personaMenorEdad.edad) {
      personaMenorEdad = personas[i];
    }
  }

  return personaMenorEdad;
};
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 21 },
  { nombre: "Carlos", edad: 30 }
];

const personaMenor = personaMasJoven(personas);

console.log("La persona más joven es:", personaMenor.nombre);
console.log("Edad:", personaMenor.edad);




/*3.6 Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S que 
muestren el algoritmo para determinar el costo y el descuento que 
tendrá un artículo. Considere que si su precio es mayor o igual a 
$200 se le aplica un descuento de 15%, y si su precio es mayor a $100 
pero menor a $200, el descuento es de 12%, y si es menor a $100, 
sólo 10%.*/

let determinarCosto = (precio) => {

  if(precio < 100){
    return precio - (precio * 0.10);
  }else if(precio < 200){
    return precio - (precio*0.12);
  }else{
    return precio - (precio *0.15);
  };  
}
console.log( "El precio del articulo es:", determinarCosto(90) + " dolares");




/*3.7 El presidente de la república ha decidido estimular a todos 
los estudiantes de una universidad mediante la asignación de becas 
mensuales, para esto se tomarán en consideración los siguientes criterios:
Para alumnos mayores de 18 años con promedio mayor o igual a 
9, la beca será de $2000.00; con promedio mayor o igual a 7.5, de 
$1000.00; para los promedios menores de 7.5 pero mayores o iguales a 6.0, de $500.00; 
a los demás se les enviará una carta de invitación incitándolos 
a que estudien más en el próximo ciclo escolar.
A los alumnos de 18 años o menores de esta edad, con promedios 
mayores o iguales a 9, se les dará $3000; con promedios menores a 
9 pero mayores o iguales a 8, $2000; para los alumnos con promedios 
menores a 8 pero mayores o iguales a 6, se les dará $100, y a los 
alumnos que tengan promedios menores a 6 se les enviará carta de 
invitación. Realice el algoritmo correspondiente y represéntelo con 
un diagrama de flujo*/

function recibirEdad(edad, promedio){
  if(edad < 18){
    if(promedio < 6){
      return 100;
    }
    if(promedio >= 6 && promedio < 8){
      return 2000;
    }
    if(promedio >= 9){
      return 3000;
    }

  }else{
    if(promedio >= 6 && promedio < 7.5){
      return 500;
    }
    if(promedio >= 7.5){
      return 1000;
    }
    if(promedio >= 9){
      return 2000;
    }
  }
};
console.log(recibirEdad(15, 9) + " dolares");




/*3.8 Cierta empresa proporciona un bono mensual a sus trabajadores, el 
cual puede ser por su antigüedad o bien por el monto de su sueldo 
(el que sea mayor), de la siguiente forma:
Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga 
20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el 
bono por concepto de sueldo, si éste es menor a $1000, se da 25 % 
de éste, cuando éste es mayor a $1000, pero menor o igual a $3500, 
se otorga 15% de su sueldo, para más de $3500. 10%. Realice el 
algoritmo correspondiente para calcular los dos tipos de bono, asignando el mayor, 
y represéntelo con un diagrama de flujo y pseudocódigo.*/

function bonoFinal(sueldo, bono1, bono2) {
  let sueldoBono = sueldo + sueldo * bono1;
  console.log(sueldoBono + ' sueldo bono');
  let sueldoFinal = sueldoBono * bono2 + sueldoBono;
  return sueldoFinal;
}

function sueldoBono(sueldo, años) {
  if (años > 2 && años < 5) {
    if (sueldo < 1000) {
      return bonoFinal(sueldo, 0.25, 0.2);
    } else if (sueldo > 1000 && sueldo <= 3500) {
      return bonoFinal(sueldo, 0.15, 0.2);
    } else if (sueldo > 3500) {
      return bonoFinal(sueldo, 0.1, 0.2);
    } 
  }else {
    if (sueldo < 1000) { 
      return bonoFinal(sueldo, 0.25, 0.3);
    } else if (sueldo > 1000 && sueldo <= 3500) {
      return bonoFinal(sueldo, 0.15, 0.3);
    } else if (sueldo > 3500) {
      return bonoFinal(sueldo, 0.1, 0.3);
    }
  }
};
console.log(sueldoBono(800, 8) + " sueldo final");

/*3.9 Una compañía de seguros para autos ofrece dos tipos de póliza: 
cobertura amplia (A) y daños a terceros (B). Para el plan A, la cuota 
base es de $1,200, y para el B, de $950. A ambos planes se les carga 
10% del costo si la persona que conduce tiene por hábito beber alcohol, 
5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia 
cardiaca o diabetes–, y si tiene más de 40 años, se le carga 
20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre 
el costo base. Realice diagrama de flujo y diagrama N/S que represente 
el algoritmo para determinar cuánto le cuesta a una persona contratar una póliza.*/

const calcularCostoPoliza = (
  tipoPoliza,
  habitos,
  usaLentes,
  enfermedad,
  edad
) => {
  let costoBase = tipoPoliza === "A" ? 1200 : 950;

  if (habitos.includes("alcohol")) {
    costoBase *= 1.1;
  }
  if (usaLentes) {
    costoBase *= 1.05;
  }
  if (enfermedad) {
    costoBase *= 1.05;
  }
  if (edad > 40) {
    costoBase *= 1.2;
  } else {
    costoBase *= 1.1;
  }
  return costoBase;
};
const tipoPoliza = "A"; 
const habitos = ["alcohol"]; 
const usaLentes = false; 
const enfermedad = true; 
const edad = 45; 

const costoPoliza = calcularCostoPoliza(
  tipoPoliza,
  habitos,
  usaLentes,
  enfermedad,
  edad
);
console.log(`El costo de la póliza es: $${costoPoliza}`);

/*3.10 Represente un algoritmo mediante un diagrama de flujo y el pseuocódigo
para determinar a qué lugar podrá ir de vacaciones una 
persona, considerando que la línea de autobuses “La tortuga” cobra 
por kilómetro recorrido. Se debe considerar el costo del pasaje tanto 
de ida, como de vuelta; los datos que se conocen y que son fijos son: 
México, 750 km; P.V., 800 km; Acapulco, 1200 km, y Cancún, 1800 
km. También se debe considerar la posibilidad de tener que quedare en casa.*/

const determinarDestino = (distancia) => {
  const destinos = {
    México: 750,
    "P.V.": 800,
    Acapulco: 1200,
    Cancún: 1800,
  };

  if (distancia === 0) {
    return "Quedarse en casa";
  } else if (distancia < 0) {
    return "Distancia inválida";
  }

  let mejorDestino = "";
  let costoMinimo = Number.MAX_SAFE_INTEGER;

  for (const destino in destinos) {
    const costoIdaVuelta = destinos[destino] * 2;

    if (costoIdaVuelta < costoMinimo && destinos[destino] >= distancia) {
      mejorDestino = destino;
      costoMinimo = costoIdaVuelta;
    }
  }

  return `Mejor destino: ${mejorDestino}, Costo: ${costoMinimo} pesos`;
};
const distanciaViaje = 950;
const resultado = determinarDestino(distanciaViaje);
console.log(resultado);






/*3.11 Se les dará un bono por antigüedad a los empleados de una tiena. 
Si tienen un año, se les dará $100; si tienen 2 años, $200, y así 
sucesivamente hasta los 5 años. Para los que tengan más de 5, el 
bono será de $1000. Realice un algoritmo y represéntelo mediante 
el diagrama de flujo, el pseudocódigo y diagrama N/S que permita 
determinar el bono que recibirá un trabajador. */

function bonoXaños(años){
  switch(años){
      case 1 :
          console.log("Va a recibir  $ 100");
          break;
      case 2 :
          console.log("Va a recibir  $ 200");
          break;
      case 3 :
          console.log("Va a recibir  $ 300");
          break;
      case 4 :
          console.log("Va a recibir  $ 400");
          break;
      case 5 :
          console.log("Va a recibir  $ 500");
          break;
      default : 
          console.log("Va a recibir  $ 1000");
  }
  }
  bonoXaños(3);





/*3.12 Realice un algoritmo que permita determinar el sueldo semanal de 
un trabajador con base en las horas trabajadas y el pago por hora, 
considerando que a partir de la hora número 41 y hasta la 45, cada 
hora se le paga el doble, de la hora 46 a la 50, el triple, y que trabajar 
más de 50 horas no está permitido. Represente el algoritmo meiante 
el diagrama de flujo, el pseudocódigo y el diagrama N/S.*/

function sueldo_semanal(horas, salarioH) {

  if (horas >= 41 && horas <= 45) {
    return horas * (salarioH * 2);
  } else if (horas >= 46 && horas <= 50) {
    return horas * (salarioH * 3);
  } else {
   return "no permitido"; 
  }
};
console.log(sueldo_semanal(50, 1));




/*3.13 Los alumnos de una escuela desean realizar un viaje de estudios, 
pero requieren determinar cuánto les costará el pasaje, considerando que 
las tarifas del autobús son las siguientes: si son más de 100 
alumnos, el costo es de $20; si son entre 50 y 100, $35; entre 20 y 
49, $40, y si son menos de 20 alumnos, $70 por cada uno. Realice 
el algoritmo para determinar el costo del pasaje de cada alumno. 
Represente el algoritmo mediante el diagrama de flujo, el 
pseudoódigo y el diagrama N/S.*/

function determinarCosto(alumnos){

if(alumnos < 20){
  return 70;
}else if(alumnos <= 20 && alumnos <= 49){
  return 40;
}else if(alumnos >= 50 && alumnos <= 100){
  return 35;
}else{
  return  20;
}

};
console.log('El costo por alumno sera de:', determinarCosto(60) + ' soles');






/*3.14 Realice un algoritmo que, con base en una calificación proporcionaa 
(0-10), indique con letra la calificación que le corresponde: 10 es 
“A”, 9 es “B”, 8 es “C”, 7 y 6 son “D”, y de 5 a 0 son “F”. Represente 
el diagrama de flujo, el pseudocódigo y el diagrama N/S corresponiente.*/

function obtnerCalificacion(nota){
  if(nota > 0  && nota <= 5){
    return 'F';
  }else if(nota < 8){
    return 'D';
  }else if(nota === 8){
    return 'C' ;
  }else if(nota === 9){
    return 'B';
  }else{
    return 'A'
  }
};
console.log('La nota es ', obtnerCalificacion(8));





/*3.15 Realice un algoritmo que, con base en un número proporcionado 
(1-7), indique el día de la semana que le corresponde (L-D). 
Represente el diagrama de flujo, el pseudocódigo y el diagrama N/S 
correspondiente.*/

function semana(dia) {
  switch (dia) {
    case 1:
      console.log("lunes");
      break;
    case 2:
      console.log("martes");
      break;
    case 3:
      console.log("miercoles");
      break;
    case 4:
      console.log("jueves");
      break;
    case 5:
      console.log("viernes");
      break;
    case 6:
      console.log("sabado");
      break;
    case 7:
      console.log("domingo");
      break;
    default:
  }
};
semana(2);

/*3.16 El secretario de educación ha decidido otorgar un bono por desemeño 
a todos los profesores con base en la puntuación siguiente:
Realice un algoritmo que permita determine el monto de bono que 
percibirá un profesor (debe capturar el valor del salario mínimo y 
los puntos del profesor). Represente el algoritmo mediante el diagrama de flujo, 
el pseudocódigo y el diagrama N/S.*/

const calcularBono = (salarioMinimo, puntos) => {
  if (puntos >= 0 && puntos <= 100) {
    return salarioMinimo * 0.1; 
  } else if (puntos > 100 && puntos <= 200) {
    return salarioMinimo * 0.15; 
  } else if (puntos > 200 && puntos <= 300) {
    return salarioMinimo * 0.2; 
  } else {
    return 0;
  }
};
const salarioMinimo = 5000; 
const puntosProfesor = 150; 
const montoBono = calcularBono(salarioMinimo, puntosProfesor);
console.log(`El profesor recibirá un bono de: $${montoBono}`);





/*3.17 Realice un algoritmo y represéntelo mediante el diagrama de flujo, 
el pseudocódigo y el diagrama N/S que permitan determinar qué 
paquete se puede comprar una persona con el dinero que recibirá 
en diciembre, considerando lo siguiente:
• Paquete A. Si recibe $50,000 o más se comprará una televisión, 
un modular, tres pares de zapatos, cinco camisas y cinco pantalones.
• Paquete B. Si recibe menos de $50,000 pero más (o igual) de 
$20,000, se comprará una grabadora, tres pares de zapatos, 
cinco camisas y cinco pantalones.
• Paquete C. Si recibe menos de $20,000 pero más (o igual) de 
$10,000, se comprará dos pares de zapatos, tres camisas y tres 
pantalones.
• Paquete D. Si recibe menos de $10,000, se tendrá que conformar con un par de zapatos, 
dos camisas y dos pantalones.*/

const determinarPaquete = (dineroRecibido) => {
  if (dineroRecibido >= 50000) {
    return "Paquete A: Televisión, Modular, 3 pares de zapatos, 5 camisas, 5 pantalones";
  } else if (dineroRecibido >= 20000) {
    return "Paquete B: Grabadora, 3 pares de zapatos, 5 camisas, 5 pantalones";
  } else if (dineroRecibido >= 10000) {
    return "Paquete C: 2 pares de zapatos, 3 camisas, 3 pantalones";
  } else {
    return "Paquete D: 1 par de zapatos, 2 camisas, 2 pantalones";
  }
};

const dineroDiciembre = 18000; 
const paqueteCompra = determinarPaquete(dineroDiciembre);
console.log(`La persona comprará el siguiente paquete: ${paqueteCompra}`);





/*3.18 Realice un algoritmo y represéntelo mediante el diagrama de flujo, 
el pseudocódigo y el diagrama N/S que permitan determinar la cantidad del
 bono navideño que recibirá un empleado de una tienda, 
considerando que si su antigüedad es mayor a cuatro años o su 
sueldo es menor de dos mil pesos, le corresponderá 25 % de su sueldo, y 
en caso contrario sólo le corresponderá 20 % de éste.*/

const determinarBonoNavideno = (antiguedad, sueldo) => {
  if (antiguedad > 4 || sueldo < 2000) {
    return sueldo * 0.25; 
  } else {
    return sueldo * 0.20; 
  }
};

const antiguedadEmpleado = 5; 
const sueldoEmpleado = 1800;
const bonoNavideno = determinarBonoNavideno(antiguedadEmpleado, sueldoEmpleado);
console.log(`El empleado recibirá un bono navideño de: $${bonoNavideno}`);





/*3.19 La secretaria de salud requiere un diagrama de flujo que le represente 
el algoritmo que permita determinar qué tipo de vacuna (A, B o 
C) debe aplicar a una persona, considerando que si es mayor de 70 
años, sin importar el sexo, se le aplica la tipo C; si tiene entre 16 y 
69 años, y es mujer, se le aplica la B, y si es hombre, la A; si es menor 
de 16 años, se le aplica la tipo A, sin importar el sexo.*/

//VACUNAS(A, B, C)
const determinarTipoVacuna = (edad, genero) => {
  if (edad > 70) {
    return "C";
  } else if (edad >= 16 && edad <= 69) {
    if (genero === "mujer") {
      return "B";
    } else {
      return "A";
    }
  } else {
    return "A";
  }
};

const edadPersona = 30; 
const generoPersona = "mujer"; 
const tipoVacuna = determinarTipoVacuna(edadPersona, generoPersona);
console.log(`Se debe aplicar la vacuna tipo: ${tipoVacuna}`);





/*3.20 Realice un algoritmo para resolver el siguiente problema: 
una fábrica de pantalones desea calcular cuál el precio final de venta 
y cuánto ganará por los N pantalones que produzca con el corte de 
alguno de sus modelos, para esto se cuenta con la siguiente información:
a) Tiene dos modelos A y B, tallas 30, 32 y 36 para ambos modelos.
b) Para el modelo A se utiliza 1.50 m de tela, y para el B 1.80 m.
c) Al modelo A se le carga 80 % del costo de la tela, por mano de 
obra. Al modelo B se le carga 95 % del costo de la tela, por el 
mismo concepto.
92 PROBLEMARIO DE ALGORITMOS RESUELTOS CON DIAGRAMAS DE FLUJO Y PSEUDOCÓDIGO
d) A las tallas 32 y 36 se les carga 4 % del costo generado por 
mano de obra y tela, sin importar el modelo.
e) Cuando se realiza el corte para fabricar una prenda sólo se hace 
de un solo modelo y una sola talla.
f) Finalmente, a la suma de estos costos se les carga 30%, que 
representa la ganancia extra de la tienda.*/


const calcularPrecioYGanancia = (modelo, talla, cantidad) => {
  let costoTela = modelo === 'A' ? 1.5 : 1.8;
  let manoObra = modelo === 'A' ? costoTela * 0.8 : costoTela * 0.95;

  if (talla === 32 || talla === 36) {
    manoObra += (costoTela + manoObra) * 0.04;
  }

  let precioFinal = (costoTela + manoObra) * cantidad;
  precioFinal += precioFinal * 0.3;

  return { precioFinal, ganancia: precioFinal - (costoTela + manoObra) * cantidad };
};
const modeloPantalon = 'B';
const tallaPantalon = 36;
const cantidadPantalones = 100; 

const { precioFinal, ganancia } = calcularPrecioYGanancia(modeloPantalon, tallaPantalon, cantidadPantalones);
console.log(`Precio final de venta: $${precioFinal.toFixed(2)}`);
console.log(`Ganancia total: $${ganancia.toFixed(2)}`);





