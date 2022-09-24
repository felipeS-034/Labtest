const Ejercicio2 = require ('./Ejercicio2');

test("Ejercicio2", () =>{
    let numeros: number [] = [];
    numeros = [ 1 , 2 , 3 , 4 , 5 ];

    let resultado: any[] = [[1], [3,5]];
    expect(Ejercicio2(numeros)).not.toEqual(resultado);
})