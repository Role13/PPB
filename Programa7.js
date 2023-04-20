const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

console.log("Para detener el programa introduce 'Salir'")
console.log("Ingresa una frase")

let i = 0;
function nFrase() {
    readline.question('',frase => {

        if (frase !== 'Salir') {
            nFrase();
            i++;
            console.log("Numero de frases: ", i);
        } else {
            readline.close();
        }
    });
}

nFrase();