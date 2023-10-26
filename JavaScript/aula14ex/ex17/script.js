function gerar() {

    let txtnum = document.getElementById('txtnum')
    let res = document.getElementById('res')

    if (txtnum.value.length == 0) {
        alert('Por favor digite um número!')

    } else {

        res.innerHTML = ``

        let num = Number(txtnum.value) 

        for (let c = 0; c <= 10; c++) {

            let item = document.createElement('option')
            item.text = `${c} x ${num} = ${num*c}`
            res.appendChild(item)

        }
    }
}