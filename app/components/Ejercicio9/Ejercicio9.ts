/**
 * Ejercicio 9
 * calcular el factorial de un número
 */

 type CalularFac = (n: number) => number
 const factorial: CalularFac = (n: number) => {
     if(n === 1) return 1;
     factorial(1);
     return n * factorial(n-1);
 };
 
 console.log(factorial(10));