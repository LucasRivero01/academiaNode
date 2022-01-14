const fs = require('fs');

const factor = 5;
let resultado = '';

for (let i = 1; i <= 10; i++) {
    //\n para salto de linea
    resultado += `${factor} x ${i} = ${factor * i}\n`;
}
fs.writeFile('tabla-del-5.txt', resultado, (err) => {
    if (err) throw err;
    console.log('tabla-del-5.txt creada');
})