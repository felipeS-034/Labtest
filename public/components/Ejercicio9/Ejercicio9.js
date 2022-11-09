"use strict";
/**
 * Ejercicio 9
 * calcular el factorial de un número
 */
const factorial = (n) => {
    if (n === 1)
        return 1;
    factorial(1);
    return n * factorial(n - 1);
};
console.log(factorial(10));
