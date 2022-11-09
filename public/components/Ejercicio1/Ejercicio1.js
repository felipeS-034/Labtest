/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */
const letras = ['h', 'a', 'c'];
const numeros1 = [7, 4, 17, 10, 48];
export const mezclarArreglos = (letras, numeros1) => {
    const [l, n] = numeros1.length > letras.length ? [letras, numeros1] : [numeros1, letras];
    return Array.from({
        length: l.length * 4
    }).map((_, i) => i % 2 == 0 ? l[i / 2] : n[Math.ceil(i / 2) - 1]).filter(el => el);
};
console.log(mezclarArreglos(letras, numeros1));
