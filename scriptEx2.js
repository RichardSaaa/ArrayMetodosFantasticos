let numeros = [];
    let numerosAbaixo = []; 

    for (let i=1; i<12; i++) {
        let number = parseInt(prompt("Digite um número para ser lido"));

        if(number >= 50) {
            numeros.push(number);
        } else if (number > 0 && number < 50) {
            numerosAbaixo.push(number);
        } else {
            alert("Valor invalido!");
        }   
    }


    document.write("Numeros maiores que cinquenta: " + numerosAbaixo + "<br>");
    document.write("Numeros menores que cinquenta: " + numeros);