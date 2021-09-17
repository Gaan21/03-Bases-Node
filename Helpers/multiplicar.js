//Tabla del 5 con ciclo for
const fs = require('fs');
//Se importa todo lo necesario para grabar a un archivo.





//TAREA PARA METER TODO EN ASYNC O PROMESA.
const crearArchivo = ( base = 5 ) => {

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
        
        if (err) throw err;
        
        console.log(`Tabla-${base}.txt se ha `)
    } )  
   
    //Con writeFileSync
    //fs.writeFileSync (`tabla-${base}.txt`, salida)

    //console.log(`Tabla-${base}.txt creado`) 
}

//Para exportar un objeto con una funcion como propiedad
module.exports = {
    //crearArchivo = crearArchivo
    crearArchivo
    // Una propiedad que apunta a una constante o variable con el mismo nombre
    //es redundante y se puede poner solo una vez
}