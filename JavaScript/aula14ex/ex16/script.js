function contar() {

    let txtinicio = document.getElementById
    ('txtinicio')
    let txtfim = document.getElementById('txtfim')
    let txtpasso = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
    res.innerHTML = ``
    
    let inicio = Number(txtinicio.value)
    let fim = Number(txtfim.value)
    let passo = Number(txtpasso.value)

    if (txtpasso.value.length == 0 || txtfim.value.length == 0  || txtinicio.value.length == 0) {

        window.alert('Por favor preencha todos os espaços. Iniciando com passo 1')
        passo = 1

    } else {

        if (passo == 0) {
            window.alert('Passo inválido! Iniciando com passo igual a 1.')
            passo = 1
        }

        if (inicio < fim) {
            while (inicio <= fim) {
                res.innerHTML += ` ${inicio} \u{1F449}`
                inicio = inicio + passo
            }
        } else {
            while (inicio >= fim) {
                res.innerHTML += ` ${inicio} \u{1F449}`
                inicio = inicio - passo
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}