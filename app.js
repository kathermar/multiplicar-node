//importamos el archivo multiplicar

//let base = 1;

const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //destructuracion



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.rainbow))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}

console.log(argv);

//console.log(process.argv);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(parametro);

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
    */