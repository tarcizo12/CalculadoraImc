const form = document.querySelector('#formulario');


form.addEventListener('submit', funcao = (e) => {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    


    if (!peso) {
        setResultado('Você digitou o peso errado.', false)
        return;
    }
    if (!altura) {
        setResultado('Você digitou a altura errada.', false)
        return;
    }

    function fazImc(peso, altura) {
        const imc = peso / (altura ** 2)
        return imc.toFixed(2);
    }

    const imc = fazImc(peso, altura);
    const nivelImc= getNivelImc(imc);
    const exibir = `Seu imc é de ${imc} (${nivelImc}).`
    setResultado(exibir, true);
});

function fazP() {
    const p = document.createElement('p');
    return p;
}

function getNivelImc(imc) {
    const nivel = ['Baixo Peso', 'Peso Normal', 'Sobrepeso', 'Obeso 1', 'Obeso 2', 'Obeso 3']
    if(imc<=18.5){return nivel[0]}
    else if(imc>18.5 && imc <= 24.9 ){return nivel[1]}
    else if(imc>24.9 && imc <= 29.9){return nivel[2]}
    else if(imc>29.9 && imc <= 34.9){return nivel[3]}
    else if(imc>34.9 && imc <= 39.9){return nivel[4]}
    else if(imc>39.9){return nivel[5]} 
}

function setResultado(msg, fake) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = fazP();
   
   if(fake){
       p.classList.add('ok')
   }else{
       p.classList.add('bad')
   }

    p.innerHTML = msg;
    resultado.appendChild(p);


}
