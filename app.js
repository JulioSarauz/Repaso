const { leer } = require('./read')
const { argv } = require('./config/yargs')
const col = require('./color')

let comando = argv._[0];

switch (comando) {
    case 'leer':
        leer(argv.base)
            .then(archivo => col.escribir(3, `Archivo leído: ${archivo[0]}`))
            .catch(er => col.escribir(1, er));
        col.escribir(2, 'leyendo...')
        break;
    case 'listar':
        listar(argv.base, argv.limite)
            .then(archivo => console.log(`Listado:\n${archivo}`))
            .catch(er => console.log(er));
        console.log('listar....');
        break;
    default:
        console.log('comando no valido');
}