/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

 const listaNumerosLetras = ['b', 6, 'a', 'q', 7, 2];

 function ordenadora(listaNumerosLetras:Array<any>) {
  
     let arreglo = listaNumerosLetras;
     const listaOrganizada: any[] = [];
  
     listaNumerosLetras = listaNumerosLetras.filter(number => Number.isInteger(number));
     arreglo = arreglo.filter(string => !Number.isInteger(string));
  
     listaNumerosLetras.sort();
     arreglo.sort();
     arreglo.forEach(element => {
         listaOrganizada.push(element);
        });
  
     listaNumerosLetras.forEach(element => {
         listaOrganizada.push(element);
        });
     return listaOrganizada;
 }
  
  console.log(ordenadora(listaNumerosLetras));