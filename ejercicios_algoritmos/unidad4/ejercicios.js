/*4.1 Un profesor tiene un salario inicial de $1500, y recibe un incremento 
de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 
años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el 
algoritmo y represente la solución mediante el diagrama de flujo, el 
pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.*/

//salario = 1500
//incrementoAnual = 10%
//años = 6;

/*let salarioInicial = 1500;
let incrementoAnual = 0.1;
let totalAnios = 6;

let salariosPorAnio = [];

// Calcular el salario en cada año
for (let i = 1; i <= totalAnios; i++) {
  salarioInicial += salarioInicial * incrementoAnual;
  salariosPorAnio.push(salarioInicial);
}
//salario al cabo de 6 años
console.log("El salario del profesor al cabo de 6 años es:", salarioInicial);

//salarios recibidos en cada uno de los 6 años
for (let i = 0; i < salariosPorAnio.length; i++) {
  console.log("Año", i + 1, "Salario:", salariosPorAnio[i]);
}

/*4.2 “El náufrago satisfecho” ofrece hamburguesas sencillas (S), dobles 
(D) y triples (T), las cuales tienen un costo de $20, $25 y $28 
respectivamente. La empresa acepta tarjetas de crédito con un cargo 
de 5 % sobre la compra. Suponiendo que los clientes adquieren N 
hamburguesas, las cuales pueden ser de diferente tipo, realice un 
algoritmo para determinar cuánto deben pagar. Represéntelo en 
diagrama de flujo, pseudocódigo y diagrama N/S.*/

//hamburgueSencillas = 20
//hambuergueDobles =25
//hamburgueTriple =28

/*let S = 20;
let D = 25;
let T = 28;

let pedClasica = parseInt(prompt("Desea hamburguesa clasica y cuantas"));

let pedDouble = parseInt(prompt("Desea hamburguesa doble y cuantas")); 

let pedTriple = parseInt(prompt("Desea hamburguesa triple y cuantas"));

let tarjeta =prompt("Pagaras con tarjeta");

function totalHam(s1, d1, t1, tarjeta){
  let total = (s1*S) + (d1*D) + (t1*T);
  if(tarjeta === "si"){
    total = (total * 0.05) + total;
  }
  return total;
}

console.log(totalHam(pedClasica, pedDouble, pedTriple, tarjeta));





/*4.3 Se requiere un algoritmo para determinar, de N cantidades, cuántas 
son cero, cuántas son menores a cero, y cuántas son mayores a cero. 
Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para 
representarlo, utilizando el ciclo apropiado.*/

/*function contarCantidades(cantidades) {
  let cero = 0;
  let menoresACero = 0;
  let mayoresACero = 0;

  for (let i = 0; i < cantidades.length; i++) {
    if (cantidades[i] === 0) {
      cero++;
    } else if (cantidades[i] < 0) {
      menoresACero++;
    } else {
      mayoresACero++;
    }
  }

  return [cero, menoresACero, mayoresACero];
}
console.log("Conteo: ", contarCantidades([0]));

/*4.4 Una compañía fabrica focos de colores (verdes, blancos y rojos). Se 
desea contabilizar, de un lote de N focos, el número de focos de cada 
color que hay en existencia. Desarrolle un algoritmo para determinar 
esto y represéntelo mediante el diagrama de flujo, el pseudocódigo 
y el diagrama N/S, utilizando el ciclo apropiado.*/

/*let focos = [
  "rojo",
  "blancos",
  "azul",
  "blancos",
  "rojo",
  "blancos",
  "rojo",
  "azul",
  "blancos",
  "rojo",
  "azul",
];

blanco = 0;
rojo = 0;
azul = 0;

let valores = [
  [0], //blancos
  [0], //rojo
  [0], //azul
];
1
1
focos.map((foco, index, focos) => {
  if (foco === "blanco") {
    blanco++;
  }
  if (foco === "azul") {
    azul++;
  }
  if (foco === "rojo") {
    rojo++;
  }
  if (index === focos.length - 1) {
    valores[0][0] = blanco;
    valores[1][0] = rojo;
    valores[2][0] = azul;
  }
});
console.log(valores);

/*4.5 Se requiere un algoritmo para determinar cuánto ahorrará en pesos 
una persona diariamente, y en un año, si ahorra 3¢ el primero de 
enero, 9¢ el dos de enero, 27¢ el 3 de enero y así sucesivamente 
todo el año. Represente la solución mediante el diagrama de flujo, 
el pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.*/


/*const calcularAhorro = (dias) => {
    let ahorroDiario = 0.03;
    let ahorroAnual = 0;
  
    for (let dia = 1; dia <= dias; dia++) {
      ahorroAnual += ahorroDiario;
      ahorroDiario *= 3; 
    }
  
    return { ahorroDiario, ahorroAnual };
  };
  const diasEnAnio = 365;
  
  const { ahorroDiario, ahorroAnual } = calcularAhorro(diasEnAnio);
  
  console.log(`Ahorro diario al final del año: $${ahorroDiario.toFixed(2)}`);
  console.log(`Ahorro total en un año: $${ahorroAnual.toFixed(2)}`);
 


/*4.6 Resuelva el problema 4.1, mediante: a) un ciclo Repite y b) un ciclo 
Desde.*/

/*let su = 0;
let c = 1;

while(c <= 10){
  let va = parseInt(prompt("Ingrese un número"));
  su = su + va;
  c = c + 1;
}

console.log(su);



/*4.7 Resuelva el problema 4.2, mediante: a) un ciclo Mientras y b) un 
ciclo Desde.*/

/*let su = 0;
let c = 1;

do{
    let va = parseInt(prompt("Ingrese un número"));
    su = su + va;
    c = c + 1;
 } while(c <= 10)

console.log(su);





/*4.8 Realice el algoritmo para determinar cuánto pagará una persona que 
adquiere N artículos, los cuales están de promoción. Considere que 
si su precio es mayor o igual a $200 se le aplica un descuento de 15%, 
y si su precio es mayor a $100 pero menor a $200, el descuento es de 
12%; de lo contrario, sólo se le aplica 10%. Se debe saber cuál es el 
costo y el descuento que tendrá cada uno de los artículos y finalmete 
cuánto se pagará por todos los artículos obtenidos. Represente la 
solución mediante el diagrama de flujo, el pseudocódigo y el diagrma N/S.
UNIDAD IV. SOLUCIÓN DE PROBLEMAS CON ESTRUCTURAS REPETITIVAS 139*/

/*function compras(precio){
    if( precio > 100 && precio < 200){
      return precio - (precio * 0.12);
    }else if (precio >= 200){
      return precio - (precio * 0.15);
    }else{
      return precio - (precio * 0.10);
    }
  }
  
  console.log(compras(200));





/*4.9 Un cliente de un banco deposita equis cantidad de pesos cada mes 
en una cuenta de ahorros. La cuenta percibe un interés fijo durante 
un año de 10 % anual. Realice un algoritmo para determinar el total 
de la inversión final de cada año en los próximos N años. 
Represente la solución mediante el diagrama de flujo, el pseudocódigo y 
diagrama N/S.*/

/*let interes = 0.10;

function genera(dinero, años){
  let resultado = dinero + (dinero * (interes * años));
  return resultado;
}

console.log(genera(1000, 1));




/*4.10 Los directivos de equis escuela requieren determinar cuál es la edad 
promedio de cada uno de los M salones y cuál es la edad promedio 
de toda la escuela. Realice un algoritmo para determinar estos */


/*const calcularEdadPromedio = (edades) => {
    const totalEdades = edades.length;
    if (totalEdades === 0) {
      return 0;
    }
    const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
    return sumaEdades / totalEdades;
  };
  const numeroSalones = 3; 
  const edadesPorSalon = [
    [25, 30, 28, 27],
    [22, 24, 23],
    [29, 26, 27, 28, 30]
  ];
  
  let edadPromedioTotal = 0;
  
  console.log("Edades promedio por salón:");
  
  for (let i = 0; i < numeroSalones; i++) {
    const edadPromedioSalon = calcularEdadPromedio(edadesPorSalon[i]);
    console.log(`Salón ${i + 1}: ${edadPromedioSalon.toFixed(2)}`);
    edadPromedioTotal += edadPromedioSalon;
  };
  const edadPromedioEscuela = edadPromedioTotal / numeroSalones;
  console.log(`\nEdad promedio de toda la escuela: ${edadPromedioEscuela.toFixed(2)}`);



/*4.11 Realice un algoritmo y represéntelo mediante un diagrama de flujo 
para obtener una función exponencial, la cual está dada por:*/

/*function factorial(a) {
  if (a == 0) {
    return 1;
  }
  return a * factorial(a - 1);
}

let x = 2;
let resultado = 1 + ((x/factorial(1)) + ((x**2)/factorial(2)) + (x**3/factorial(3)));

console.log(resultado);



/*4.12 Se desea saber el total de una caja registradora de un almacén, se 
conoce el número de billetes y monedas, así como su valor. Realice 
un algoritmo para determinar el total. Represente la solución mdiante 
el diagrama de flujo, el pseudocódigo y el diagrama N/S.*/

/*let dinero = [
    {"billetes": 10,
     "monedas": 5
    },
    {"billetes": 20,
     "monedas": 2
    },
    {"billetes": 30,
     "monedas": 3
    }
  ]
  
  let total = dinero.reduce((total, nextDinero) =>{
    return total + nextDinero.billetes + nextDinero.monedas;
  },0);
  
  console.log(total);



/*4.13 Un vendedor ha realizado N ventas y desea saber cuántas fueron 
por 10,000 o menos, cuántas fueron por más de 10,000 pero por 
menos de 20,000, y cuánto fue el monto de las ventas de cada una y 
el monto global. Realice un algoritmo para determinar los totales. 
Represente la solución mediante diagrama de flujo, pseudocódigo y 
diagrama N/S.*/

/*const ventas = [10000, 8000, 15000, 12000, 5000, 18000];

let cant10k = 0; 
let cant10a20k = 0;
let total10a20k = 0;
let montoGlobal = 0;

ventas.forEach(function(monto) {
  if(monto === 10000){
    cant10k++;
  }else if(monto > 10000 && monto < 20000){
    cant10a20k++;
    total10a20k = total10a20k + monto;
  }
});

let total10k = cant10k * 10000
console.log(total10k);
console.log(total10a20k);
console.log(total10a20k + total10k);



/*4.14 Realice un algoritmo para leer las calificaciones de N alumnos y determine 
el número de aprobados y reprobados. Represéntelo mediante 
diagrama de flujo, pseudocódigo y diagrama N/S.*/

/*function calificacionAlumnos(numAlumnos) {
    let reprobados = 0;
    let aprobados = 0;
  
    for (let i = 0; i < numAlumnos; i++) {
      nomNota = "nota " + (i+1);
      const notaAlum=prompt(nomNota);
      if(notaAlum<=10){
          reprobados= reprobados+1;
      }else{
          aprobados= aprobados+1;
      };
    };
    console.log("El total de alumnos reprobados:", reprobados);
    console.log("El total de alumnos aprobados:", aprobados);  
}
calificacionAlumnos(3);



/*4.15 Realice un algoritmo que determine el sueldo semanal de N trabajadores 
considerando que se les descuenta 5% de su sueldo si ganan 
entre 0 y 150 pesos. Se les descuenta 7% si ganan más de 150 pero 
menos de 300, y 9% si ganan más de 300 pero menos de 450. Los 
datos son horas trabajadas, sueldo por hora y nombre de cada trabajador. Represéntelo mediante diagrama de flujo, pseudocódigo y 
diagrama N/S.*/

/*let trabajadores = [
    { 
      "nombre": "Ibiza",
      "sueldo": 150,
      "horaTrabajas": 48
    },
    {
      "nombre": "Elsa",
      "sueldo": 100,
      "horaTrabajas": 48
    },
    {
      "nombre": "Frozen",
      "sueldo": 10,
      "horaTrabajas": 30
    }
  ];
  function calSueldoConDescuento(sueldo) {
    if (sueldo > 0 && sueldo <= 150) {
      return sueldo - sueldo * 0.05;
    } else if (sueldo > 150 && sueldo < 300) {
      return sueldo - sueldo * 0.07;
    } else if (sueldo >= 300 && sueldo < 450) {
      return sueldo - sueldo * 0.09;
    } else {
      return sueldo;
    }
  };
  trabajadores.forEach((trabajador) => {
    trabajador.sueldoDesc = calSueldoConDescuento(trabajador.sueldo);
  });
  console.log(trabajadores);



/*4.16 Realice un algoritmo donde, dado un grupo de números naturales 
positivos, calcule e imprima el cubo de estos números. Represéntelo 
mediante diagrama de flujo, pseudocódigo y diagrama N/S.*/


/*const calcularCubo = (numero) => {
    return Math.pow(numero, 3);
  };
  const numerosNaturales = [2, 5, 7, 10, 15]; 
  
  console.log("Cubos de los números naturales:");
  
  for (let i = 0; i < numerosNaturales.length; i++) {
    const numero = numerosNaturales[i];
    const cubo = calcularCubo(numero);
    console.log(`Cubo de ${numero}: ${cubo}`);




/*4.17 Realice un algoritmo para obtener la tabla de multiplicar de 
un entero K comenzando desde el 1. Represéntelo mediante diagrama de 
flujo, pseudocódigo y diagrama N/S.*/

/*const tablaDeMultiplicar = (k) => {
    for (let i = 1; i <= 10; i++) {
      const resultado = k * i;
      console.log(`${k} x ${i} = ${resultado}`);
    }
  };

  const enteroK = 5; 
  
  console.log(`Tabla de multiplicar del ${enteroK}:`);
  tablaDeMultiplicar(enteroK);





/*4.18 En 1961, una persona vendió las tierras de su abuelo al gobierno 
por la cantidad de $1500. Suponga que esta persona ha colocado el 
dinero en una cuenta de ahorros que paga 15% anual. ¿Cuánto vale 
ahora su inversión? P(1+i)n
. Realice un algoritmo para obtener este 
valor y represéntelo mediante diagrama de flujo, pseudocódigo y 
diagrama N/S.*/

/*const calcularValorActual = (montoInicial, tasaInteres, años) => {
  const tasaDecimal = tasaInteres / 100;
  const valorActual = montoInicial * Math.pow(1 + tasaDecimal, años);
  return valorActual;
  };
  const montoInicial = 1500; 
  const tasaInteresAnual = 15; 
  const años = 2023 - 1961; 
  
const valorActualInversion = calcularValorActual(montoInicial, tasaInteresAnual, años);
console.log(`El valor actual de la inversión es: $${valorActualInversion.toFixed(2)}`);*/





/*4.19 El gerente de una compañía automotriz desea determinar el 
impuesto que va a pagar por cada uno de los automóviles que posee, 
además del total que va a pagar por cada categoría y por todos los 
vehículos, basándose en la siguiente clasificación:
140 PROBLEMARIO DE ALGORITMOS RESUELTOS CON DIAGRAMAS DE FLUJO Y PSEUDOCÓDIGO
Los vehículos con clave 1 pagan 10% de su valor.
Los vehículos con clave 2 pagan 7% de su valor.
Los vehículos con clave 3 pagan 5% de su valor.
Realice un algoritmo para obtener la información y represéntelo 
mediante diagrama de flujo, pseudocódigo y diagrama N/S.
Los datos son la clave y costo de cada uno.*/


/*let autos = [
  { valor: 20000, categoria: "1" },
  { valor: 30000, categoria: "2" },
  { valor: 40000, categoria: "3" },
];

let tasasImpuestos = {
  1 : 0.1,
  2 : 0.15,
  3 : 0.2,
};

let totalPorCategoria = {
  1: 0,
  2: 0,
  3: 0,
};

let totalTodosVehiculos = 0;

for (let auto of autos) {
  let impuesto = auto.valor * tasasImpuestos[auto.categoria];
  totalPorCategoria[auto.categoria] += impuesto;
  totalTodosVehiculos += impuesto;
}

console.log("Impuestos por categoría:", totalPorCategoria);
console.log("Total de impuestos por todos los vehículos:", totalTodosVehiculos);











/*4.20 Realice un algoritmo para obtener el seno de un ángulo y represéntelo 
mediante diagrama de flujo, pseudocódigo y diagrama N/S.*/

/*function factorial(a) {
  if (a == 0) {
    return 1;
  }
  return a * factorial(a - 1);
}
let x = 2;
let senx = (
  (x - ( x**3 ) / factorial(3)) +
  (( x**5 ) / factorial(5)) -
  (( x**7 ) / factorial(7))
);

console.log(senx);





/*4.21 Realice un algoritmo para determinar qué cantidad de dinero hay 
en un monedero, considerando que se tienen monedas de diez, cinco y un peso, 
y billetes de diez, veinte y cincuenta pesos. Represéntelo mediante diagrama de 
flujo, pseudocódigo y diagrama N/S.*/


/*let dinero = [
    { 
      "monedas": [10,5,1],
      "billetes": [10,20,50]
    },    
    { 
      "monedas": [10,5,1],
      "billetes": [10,20,50]
    },     
    {
      "monedas": [10,5,1],
      "billetes": [10,20,50],
    }
  ];
  
  let total = dinero.reduce((total, nextDinero)=> {
    let sumaMonedas = nextDinero.monedas.reduce((acumulado, moneda) => acumulado + moneda, 0);
    let sumaBilletes = nextDinero.billetes.reduce((acumulado, billete) => acumulado + billete, 0);
  
    return total + sumaMonedas + sumaBilletes;
  },0);
  console.log(total);



/*4.22 El banco “Bandido de peluche” desea calcular para cada uno de sus N 
clientes su saldo actual, su pago mínimo y su pago para no generar 
intereses. Además, quiere calcular el monto de lo que ganó por 
concepto interés con los clientes morosos. Los datos que se conocen de 
cada cliente son: saldo anterior, monto de las compras que realizó y 
pago que depositó en el corte anterior. Para calcular el pago mínimo 
se considera 15% del saldo actual, y el pago para no generar intereses 
corresponde a 85% del saldo actual, considerando que el saldo 
actual debe incluir 12% de los intereses causados por no realizar el 
pago mínimo y $200 de multa por el mismo motivo. Realice el algoritmo 
correspondiente y represéntelo mediante diagrama*/


/*function calcularPagos(clientes) {
    let interesesGanados = 0;
  
    clientes.forEach(cliente => {
      const saldoConIntereses = cliente.saldoAnterior * 1.12;
      const pagoMinimo = saldoConIntereses * 0.15;
      const pagoNoIntereses = saldoConIntereses * 0.85;
      
      let saldoActualizado = saldoConIntereses;
      if (cliente.pagoAnterior < pagoMinimo) {
        saldoActualizado += 200;
        interesesGanados += saldoConIntereses * 0.12;
      }
      
      cliente.saldoActual = saldoActualizado;
      cliente.pagoMinimo = pagoMinimo;
      cliente.pagoNoIntereses = pagoNoIntereses;
    });
  
    console.log("Clientes con sus datos actualizados:", clientes);
    console.log("Intereses ganados por clientes morosos:", interesesGanados);
  }
  
  const clientes = [
    { "saldoAnterior": 1000, "compras": 200, "pagoAnterior": 150 },
    { "saldoAnterior": 1500, "compras": 300, "pagoAnterior": 140 },
    { "saldoAnterior": 2000, "compras": 500, "pagoAnterior": 210 }
  ];
  
  calcularPagos(clientes);*/
