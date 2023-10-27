let txtn = document.getElementById('txtnum')
let sel = document.getElementById('sel')
let res = document.getElementById('res')
let vet = []
let maior = 0
let total = 0

function isNmb(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return false
    } else {
        return true
    }
}

function adc() {
    
    if (isNmb(txtn.value) && !inList(txtn.value, vet)) {

        window.alert('Valor inválido ou já adicionado! Por favor digite novamente.')

    } else {
        
        res.innerHTML = ``
        let num = Number(txtn.value)
        let item = document.createElement('option')
        item.text = `Número ${num} adicionado`
        sel.appendChild(item)
        vet.push(num)
        total = total + num

        if (maior < num) {
            maior = num
        }

        vet.sort()
    }
    txtn.value = ``
    txtn.focus()
}

function cont() {
    let pa = document.createElement('p')
    pa.innerHTML = `No total, temos ${vet.length} números. <br> O maior valor é ${maior}. <br> O menor valor é ${vet[0]}. <br> Somando todos os valores temos ${total}. <br> A média de todos os valores é ${total / vet.length}.`
    res.appendChild(pa)
}