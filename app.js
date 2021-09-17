
const { crearArchivo } = require('./Helpers/multiplicar');
const { crearArchivo2 } = require('./Helpers/TareaPromesa');
const { crearArchivo3 } = require('./Helpers/tareaAsync');
const argv = require ('./config/yargs');
const colors = require('colors');
//Recibimos el objeto con la funcion que hemos exportado

//console.log(process.argv);  //Argv que se encuentra en los procesos de node.

console.clear();
console.log('hola'.red);
//console.log( argv );        //Argv que viene de yargs

//console.log('Base de yargs:', argv.base); //Se lee la base del argv

 crearArchivo3(argv.base, argv.listar, argv.hasta) 
 //La base se lee de la lista de argumentos del argv de yargs.
.then ( nombreArchivo => console.log(nombreArchivo.rainbow))
.catch ( err => console.log( err ));   



//FORMA RECOMENDADA CON  .JSON   (En consola) npm run base3 (Ayuda de Comandos con npm)


//FORMA NO RECOMENDADA PARA QUE DESDE LA CONSOLA PONIENDO --base=5 podamos crear la tabla del 5

//Desestructuracion de Arrays donde le damos por defecto un valor al arg3
//para que no devuelva undefined si no ponemos nada
  //const [ , , arg3 = 'base = 5'] = process.argv;
//Dividimos el arg3 en dos strings usando el =
  //const [ , base = 5 ] = arg3.split('=');





