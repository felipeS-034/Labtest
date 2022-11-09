/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 */ 

 const letras1 = ['e', 'd', 'f'];
 const letras2 = ['a', 'c', 'b'];
 const letras3 = ['m', 'o', 'n'];
 
 const letrasOrdenadas = letras1.concat(letras2, letras3);
 
 const ordenarLetras = (nuevoOrden:Array<string>) => {
     const ordenado = [];
     nuevoOrden.sort();
 
     for (let i = 0; i < nuevoOrden.length; i++) {
         const element = nuevoOrden[i];
         ordenado.push(element);
     }
     return ordenado;
 };
 
 console.log(ordenarLetras(letrasOrdenadas));