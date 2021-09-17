
//TAREA CON PROMESA no hace falta try catch porque el error se mete en el reject
const fs = require('fs');

const crearArchivo2 = ( base = 5 ) => {
    return new Promise( ( resolve, reject ) => {
    
        console.log('===================')
        console.log('    Tabla del ',base)
        console.log('===================')

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            //const element = array[index];
            salida += `${base} por ${i} es igual a ${ base * i}\n`;
            //salida = salida + ...   \n se pone parahacer un salto de linea.         
        }

        console.log(salida)
    
        //Con writeFile
        fs.writeFile( `tabla-${base}.txt`, salida, ( err ) => {
            
            resolve(`Tabla-${base}.txt creado`)
            //Solo hay que poner en el resolve el string de la confirmacion de lo creado.
            
            reject (`ERROR`);
            //DUDA AQUI, COMO HACER PARA QUE SI PONGO UNAS LETRAS EN BASE SALTE UN ERROR
        } )        
    });
}

module.exports = {
    crearArchivo2
}


