
//const { option } = require('yargs');
//const { argv } = require('process'); //No se que es esta linea, creo que de la forma anterior de hacerlo.
//const { argv, options } = require('yargs');

//CONFIGURACION para añadir -b VIENE TODO EN LA DOCU DE YARGS
const argv = require ('yargs')
          .option('b', {
            alias :'base',
            type: 'number',
            demandOption: true,
            describe: 'Toma la base para la multiplicacion'
          })        
          //Las option se ponen seguidas
          .option('l', {
            alias : 'listar',
            type: 'boolean',
            default: false,
            describe: 'Enseña la tabla de multiplicar'
          })

          .option('h',{
            alias: 'hasta',
            type: 'numbers',
            default: 10,
            describe: 'Multiplica hasta este numero'
          })
          
          //PARA COMPROBAR, VIENE EN LA DOCUMENTACION
          .check ( (argv , options) => {

              if (isNaN ( argv.base )) {
                throw 'La base tiene que ser un numero'
              }
              return true; //Devolver true si no hay ningun error.
          })
          .argv;


//const yargs = require('yargs');
//console.log(yargs);

module.exports = argv;
//Se exporta todo el contenido del archivo y no como un objeto