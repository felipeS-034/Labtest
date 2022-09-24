let numeros : number [ ] = [ 1 , 2 , 3 , 4 , 5 ] ;

function Ejercicio2 ( array : Array < number > ) {
    let pares : Array < number > = [ ] ;
    let impares : Array < number > = [ ] ;
    array.forEach ( element => {

        if ( element % 2 == 0 ) {
            pares.push ( element );
        }else {  
            impares.push ( element ) ;
        } 
    });
}
module.exports = Ejercicio2;