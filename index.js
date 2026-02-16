let $visor = document.querySelector('#visor')
function escrever(e) {
    $visor.value += e
}

function limpar(){
    $visor.value = ""
}

function escrever_verdade(){
    $visor.value = "{Verdadeiro}"
}

function escrever_falso(){
    $visor.value = "{Falso}"
}

function apagar(){
    $visor.value = $visor.value.slice(0, -1)
}