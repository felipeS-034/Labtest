/**
 * Ejercicio 4
 * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
 * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
 * palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
 *
 * ejem:
 * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
 */

 const palabrasRepetidas = (lista1: string[], lista2:string[]) => {
  const listaNueva = lista1.filter(element => lista2.includes(element));
  return listaNueva;
};

console.log(palabrasRepetidas);