const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

console.log("Ingresa un número positivo o negativo")

function revisar() {
    readline.question('Número: ', respuesta => {

        if (isNaN(respuesta)) {
            console.log("Ingresa un número válido");
            revisar();
            
        }else if (respuesta < 0) {
            console.log('El numero que ingresaste es negativo');
            readline.close();

        }else if (respuesta > 0) {
            console.log('El numero que ingresaste es positivo');
            readline.close();
            
        } else {
            console.log('El numero que ingresaste cero');
            readline.close();
        }
    });
}

revisar();