let nombre = "Fabian";
let apellido = "Fastillo";
let sueldoActual = 20000;
let porcentajeAumento = 25;

let calculoAumento = (sueldoActual * porcentajeAumento) / 100;

let nuevoSueldo = sueldoActual + calculoAumento;

console.log("Hola estomad@" + " " + nombre + " " + apellido);
console.log("En base a su sueldo actual: $" + sueldoActual);
console.log("Ha recibido un aumento del 25%: " + calculoAumento);
console.log("Su nuevo sueldo es de: %" + nuevoSueldo);