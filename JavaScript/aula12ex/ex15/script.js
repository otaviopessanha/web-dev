function verif() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('foto')

    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
        window.alert('Digite um ano válido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade <= 12) {
                img.setAttribute('src', 'imagens-edit/homem-crianca.png')
            } else if (idade <= 26) {
                img.setAttribute('src', 'imagens-edit/homem-jovem.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens-edit/homem-adulto.png')
            } else {
                img.setAttribute('src', 'imagens-edit/homem-idoso.png')
            }
        } else {
            gen = 'Mulher'
            if (idade <= 12) {
                img.setAttribute('src', 'imagens-edit/mulher-crianca.png')
            } else if (idade <= 26) {
                img.setAttribute('src', 'imagens-edit/mulher-jovem.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'imagens-edit/mulher-adulta.png')
            } else {
                img.setAttribute('src', 'imagens-edit/mulher-idosa.png')
            }
        }
    }

    res.innerHTML = `${gen} com ${idade} anos.`

}