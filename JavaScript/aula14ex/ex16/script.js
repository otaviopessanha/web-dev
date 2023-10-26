var txtinicio = document.getElementById('txtinicio')
var txtfim = document.getElementById('txtfim')
var txtpasso = document.getElementById('txtpasso')
var res = document.getElementById('res')

function contar() {
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)

    if (txtpasso.value.length == 0) {
        window.alert('O passo não pode ser 0 . Iniciando com passo 1')
        passo = 1
    }

    if (passo > fim) {
        window.alert('O passo não pode ser maior que o fim. Iniciando com passo 1')
        passo = 1
    }

    do {
        res.innerHTML += `${inicio}👉`
        inicio = inicio + passo
    } while (inicio <= fim)
    res.innerHTML += '🏁'
}