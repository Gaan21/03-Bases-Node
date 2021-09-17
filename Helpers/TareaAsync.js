const fs = require('fs');
const colors = require('colors');


//TAREA CON ASYNC, el unico problema es que hay que hacer un try catch porsi da error por algo
const crearArchivo3 = async ( base = 5, listar = false, hasta = 10 ) => {
    //Argumentos de la funcion asincrona(... ... ...)

    //Bloque try catch a todo porque no hay reject, solo devuelve si todo sale bien.
    try {    

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            //const element = array[index];
            salida += `${base} ${'por'.black} ${i} ${'es igual a'.black} ${ base * i}\n`;
            //salida = salida + ...   \n se pone parahacer un salto de linea.  
            
            consola += `${base} por ${i} es igual a ${base * i}\n`;
        }

        if ( listar ) {

            console.log('==================='.red)
            console.log('    Tabla del '.green, colors.green (base) )
            console.log('==================='.red)
            console.log(salida)
        } 
    
        //Con writeFile o con writefileSync
        fs.writeFileSync (`./Salida/tabla-${base}.txt`, consola) //Ruta de la creacion del archivo
            
            return `Tabla-${base}.txt se ha creado`;
            //Solo hay que poner en el resolve el string de la confirmacion de lo creado.    

    }
     catch (err) {
       throw err;
    }      
}   


module.exports = {
    crearArchivo3
}
