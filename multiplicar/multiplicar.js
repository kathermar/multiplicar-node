//reuieres

const fs = require('fs');
const colors = require('colors');

//const fs = require('express'); // paquete que se isntala
//const fs = require('./fs'); //archivos creados por nostros mismo

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`==tabla de ${base}==`.green);
    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` el resultado de ${i} * ${base} es ${i * base}\n`;
        }

        // informacion de paquetes que ya vienen instalados en node
        //https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
        // este codigo nos permite guardar en un archivo .txt el resultado de un proceso
        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`);
        });


    });
}

module.exports = {

    crearArchivo,
    listarTabla
}