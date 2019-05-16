const {estudiante, obtenerPromedio} = require ('./calculos');
const fs = require('fs');

console.log('Nombre del estudiante es: ' + estudiante.nombre);
console.log('El promedio del estudiante es: ' + obtenerPromedio(estudiante.notas.matematicas,
    estudiante.notas.ingles, estudiante.notas.progrmacion));

let {nombre, edad : anos, notas: {matematicas, ingles, progrmacion}} = estudiante;
console.log('Nombre del estudiante: ' + nombre);
console.log('El promedio del estudiante es: ' + obtenerPromedio(matematicas, ingles, progrmacion));
console.log('Edad estudiante es: ' + anos);

let crearArchivo = (estudiante) => {
    texto = 'El nombre del estudiante es: ' + nombre + '\n' +
             'ha obtenido un promedio de: ' + obtenerPromedio(matematicas, ingles, progrmacion);
    fs.writeFile('promedio.txt', texto, (err) => {
        if (err) throw (err);
        console.log('Se ha creado el archivo');
    });
}

crearArchivo(estudiante);