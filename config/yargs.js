let opt = {
    base: {
        demand: true,
        alias: 'n',
        description: 'Nombre del archivo que se desea abrir'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'El limite de la tabla de multiplicar'
    }
};


const argv = require('yargs')
    .command('leer', 'leer un archivo csv', opt).help().argv;

module.exports = {
    argv
};