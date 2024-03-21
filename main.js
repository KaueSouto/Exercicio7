const form = document.getElementById('form')

const numero_1 = document.getElementById('numero1')
const numero_2 = document.getElementById('numero2')
const botao = document.getElementById('enviar');

function verificaNumero(){
    if (parseFloat(numero_2.value) > parseFloat(numero_1.value)) {
        return true;
    } else {
        return false;
    }
}
form.addEventListener('submit', function(e){
    e.preventDefault()


    const resultado = verificaNumero();
    if(resultado){
        document.querySelector('.tudoCerto').innerHTML = 'Tudo Certo'
        document.querySelector('.tudoCerto').style.display = 'block'
        document.querySelector('.erro').style.display = 'none'


        numero_1.value = ''
        numero_2.value = ''
    }else{
        document.querySelector('.erro').innerHTML = 'O segundo número deve ser maior que o primeiro'
        document.querySelector('.erro').style.display = 'block'
        document.querySelector('.tudoCerto').style.display = 'none'
    }
})
form.addEventListener('keyup', function(e){
    const resultado = verificaNumero();
    if(!resultado){
        botao.disabled = true;
        document.querySelector('.erro').innerHTML = 'O segundo número deve ser maior que o primeiro'
        document.querySelector('.erro').style.display = 'block'
        document.querySelector('.tudoCerto').style.display = 'none'
        document.getElementById('enviar').style.backgroundColor = 'rgba(3, 3, 194, 0.39'
    }else{
        botao.disabled = false;
        document.querySelector('.erro').style.display = 'none'
        document.getElementById('enviar').style.backgroundColor = 'blue'
    }
})

