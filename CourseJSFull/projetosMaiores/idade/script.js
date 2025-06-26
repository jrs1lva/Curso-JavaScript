function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()

    var txtano = document.getElementById('txtano')
    var ano = Number(txtano.value)

    var res = document.querySelector('div#res')
    var img = document.getElementById('img')
    
    if (ano > anoAtual || ano <= 0) {
        res.innerHTML = ('[ERRO] Digite um valor válido')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - ano
        var genero = ''

        /*
        Adicionando elemento diretamente no JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', 'imagens/adulta.png') 
        */
        if (sexo[0].checked) {
            genero = 'Homem'
            res.innerHTML = `Detectamos ${genero} de ${idade} anos`
            if (ano <= 1975) {
                img.src = 'imagens/idoso.png'
            } else if (ano <= 2007) {
                img.src = 'imagens/adulto.png'
            } else if (ano <= 2020) {
                img.src = 'imagens/criançaM.png'
            } else if (ano <= 2025) {
                img.src = 'imagens/bebêM.png'
            }
        } else {
            genero = 'Mulher'
            res.innerHTML = `Detectamos ${genero} de ${idade} anos`
            if (ano <= 1975) {
                img.src = 'imagens/idosa.png'
            } else if (ano <= 2007) {
                img.src = 'imagens/adulta.png'
            } else if (ano <= 2020) {
                img.src = 'imagens/criançaF.png'
            } else if (ano <= 2025) {
                img.src = 'imagens/bebêF.png'
            }
        }
        
    }

}   
