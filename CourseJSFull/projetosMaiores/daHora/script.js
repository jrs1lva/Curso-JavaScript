function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora < 12) {
        //Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#2a5e9b'
    } else if (hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e3cc2f'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#353344'
    }
}
