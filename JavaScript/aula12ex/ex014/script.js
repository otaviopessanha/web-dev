function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var otavio = document.getElementById('otavio')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if (hora >= 5 && hora < 12) {
        //bom dia
        img.src = '../imagens/manha.png'
        document.body.style.background = '#E9BF91'
        otavio.onmouseover = function dentro() {
            otavio.style.color = '#E9BF91'
            otavio.style.backgroundColor = 'white'
            otavio.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.3)'
        }
        otavio.onmouseout = function fora() {
            otavio.style.color = 'white'
            otavio.style.backgroundColor = 'transparent'
            otavio.style.boxShadow = '0px 0px 0px'
        }
    } else if (hora < 18 && hora >= 12) {
        //boa tarde
        img.src = '../imagens/tarde.png'
        document.body.style.background = '#FB7200'
        otavio.onmouseover = function dentro() {
            otavio.style.color = '#FB7200'
            otavio.style.backgroundColor = 'white'
            otavio.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.3)'
        }
        otavio.onmouseout = function fora() {
            otavio.style.color = 'white'
            otavio.style.backgroundColor = 'transparent'
            otavio.style.boxShadow = '0px 0px 0px'
        }
    } else {
        //boa noite
        img.src = '../imagens/noite.png'
        document.body.style.background = '#0F4870'
        otavio.onmouseover = function dentro() {
            otavio.style.color = '#0F4870'
            otavio.style.backgroundColor = 'white'
            otavio.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.3)'
        }
        otavio.onmouseout = function fora() {
            otavio.style.color = 'white'
            otavio.style.backgroundColor = 'transparent'
            otavio.style.boxShadow = '0px 0px 0px'
        }
    }
}