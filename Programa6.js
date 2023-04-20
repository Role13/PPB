const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

readline.question('Proporciona el valor a utilizar: ',valor => {
    for (var i = 0; i <= valor; i++) {
        console.log(i);
    }
    readline.close();
});



