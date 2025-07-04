function contar() {
    var txtnum = document.getElementById('txtnum')
    var n1 = Number(txtnum.value)
    var res = document.querySelector('div#res')

    for (let i = 0; i < n1; i++) {
        if (i == 0) {
            res.innerHTML = 'Contando...'
        } else {
            res.innerHTML = `Passo ${i}`
        }

    }
}