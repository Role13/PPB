let n = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        n++;
    }
    
}

console.log("Numero de pares: ", n);