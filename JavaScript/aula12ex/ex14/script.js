function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var otavio = document.getElementById('otavio')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var frs = document.getElementById('frs')
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if (hora >= 5 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#E9BF91'
        frs.innerHTML = 'Tenha um bom dia!'
        otavio.onmouseover = function dentro() {
            otavio.style.color = '#E9BF91'
        }
        otavio.onmouseout = function fora() {
            otavio.style.color = 'white'
        }
    } else if (hora < 18 && hora >= 12) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FB7200'
        frs.innerHTML = 'Tenha uma boa tarde!'
        otavio.onmouseover = function dentro() {
            otavio.style.color = '#FB7200'
        }
        otavio.onmouseout = function fora() {
            otavio.style.color = 'white'
        }
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#0F4870'
        frs.innerHTML = 'Tenha uma boa noite!'
        otavio.onmouseover = function dentro() {
            otavio.style.color = '#0F4870'
        }
        otavio.onmouseout = function fora() {
            otavio.style.color = 'white'
        }
    }
}