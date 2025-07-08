function contar() {
    var txtin = document.getElementById('txtin')
    var inicio = Number(txtin.value)
    var txtfim = document.getElementById('txtfim')
    var fim = Number(txtfim.value)
    var txtpass = document.getElementById('txtpass')
    var passo = Number(txtpass.value)
    var res = document.getElementById('res')

    if (txtin.value.length === 0 || txtfim.value.length === 0 || txtpass.value.length === 0 || passo <= 0 || inicio == fim) {
    res.innerHTML = '[ERRO] Reveja os valores digitados e tente novamente.'
    } else {
        if (inicio < fim) {
            for (let i = inicio; i <= fim ; i += passo) {
                if (i==inicio) {
                    res.innerHTML = `${i} 👉`
                }
                if (i > inicio && i < fim) {
                    res.innerHTML += ` ${i} 👉`
                } if (i == fim) {
                    res.innerHTML += ` ${i}`
                }
            }
            res.innerHTML += '🏁'

            
        } else if (inicio > fim) {
            for (let i = inicio; i >= fim ; i -= passo) {
                if (i==inicio) {
                    res.innerHTML = `${i} 👉`
                }
                if (i < inicio && i > fim) {
                    res.innerHTML += ` ${i} 👉`
                } if (i == fim) {
                    res.innerHTML += ` ${i}`
                }
            }
            res.innerHTML += '🏁'

            
        }
        
    }
}