"use strict";
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */
const elementos1 = [1, 4, 6, 7, 8];
const elementos2 = [2, 4, 5, 6, 7];
const comprobarInfo = (elementos1, elementos2) => {
    elementos1.sort();
    elementos2.sort();
    if (elementos1.length == elementos2.length && elementos1.every(function (i, j) { return i === elementos2[j]; })) {
        return 'Son iguales';
    }
    else {
        return 'No son iguales';
    }
};
console.log(comprobarInfo(elementos1, elementos2));
