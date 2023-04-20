const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

console.log("Ingresa 'S' o 'N'")

function revisar() {
    readline.question('', respuesta => {

        if (respuesta !== 'S' && respuesta !== 'N') {
            console.log("Ingresa una respuesta válida");
            revisar();

        } else {
            readline.close();
        }
    });
}

revisar();