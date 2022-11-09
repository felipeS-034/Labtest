/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */

 const arregloDosListas = () => {
        
    const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const resultado = [];

    for (let i = 1; i < numeros2.length; i++) {
        if (numeros2[i] % 2 == 1) {
            resultado.push(i);
        }
    }
    return resultado;
};

console.log(arregloDosListas());