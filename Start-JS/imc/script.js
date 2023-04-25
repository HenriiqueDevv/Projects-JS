const calcular = document.getElementById('calcular')

function imc() {
    const name      = document.getElementById('name').value
    const altura    = document.getElementById('height').value
    const peso      = document.getElementById('weight').value
    const resultado = document.getElementById('result')

    if (name !== '' && altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if (valorImc < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorImc < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorImc < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorImc < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorImc < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
        
        resultado.textContent = `${name} seu IMC é ${valorImc} e você está ${classificacao}`
        
    } else {
        resultado.textContent = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click', imc);

    // switch (classificacao) {
    //     case valorImc < 18.5:
    //         classificacao = 'abaixo do peso.'
    //         break;
    //     case valorImc < 25:
    //         classificacao = 'com peso ideal. Parabéns!!!'
    //         break;
    //     case valorImc < 30:
    //         classificacao = 'levemente acima do peso.'
    //         break;
    //     case valorImc < 35:
    //         classificacao = 'com obesidade grau I.'
    //         break;
    //     case valorImc < 40:
    //         classificacao = 'com obesidade grau II.'
    //         break;

    //     default:
    //         classificacao = 'com obesidade grau III. Cuidado.'
    //         break;
    // }