function verificar() {
    var txtn1 = document.getElementById('txtn1')
    var n1 = Number(txtn1.value)
    var txtn2 = document.getElementById('txtn2')
    var n2 = Number(txtn2.value)
    var res = document.getElementById('res')
    var radsoma = document.getElementById('soma')
    var radsubtrai = document.getElementById('subtrai')
    var radmult = document.getElementById('multiplica')
    var raddiv = document.getElementById('divide')
     if (radsoma.checked) {
        var soma = n1 + n2
        res.innerHTML = `${n1} + ${n2} = <strong>${soma}</strong>`
    } else if (radsubtrai.checked) {
        var subtrai = n1 - n2
        res.innerHTML = `${n1} - ${n2} = <strong>${subtrai}</strong>`
    } else if (radmult.checked) {
        var multiplica = n1 * n2
        res.innerHTML = `${n1} x ${n2} = <strong>${multiplica}</strong>`
    } else if (raddiv.checked) {
        if (n2 === 0) {
            res.innerHTML = `<strong>Erro:</strong> Divisão por zero não é permitida.`
        } else {
            var divide = n1 / n2
            res.innerHTML = `${n1} / ${n2} = <strong>${divide}</strong>`
        }
    } else {
        res.innerHTML = `<strong>Selecione uma operação!</strong>`
    }

    
    /*if (radsoma.checked) {
        somar()
    } if (radsubtrai.checked) {
        subtrair()
    } if (radmult.checked) {
        multiplicar()
    } if (raddiv.checked) {
        dividir()
    }*/
}
/*
function somar() {
    var soma = n1 + n2
    res.innerHTML = `${n1} + ${n2} = <strong>${soma}</strong>`
}

function subtrair() {
    var subtrai = n1 - n2
    res.innerHTML = `${n1} - ${n2} = <strong>${subtrai}</strong>`
}

function multiplicar() {
    var multiplica = n1 * n2
    res.innerHTML = `${n1} x ${n2} = <strong>${multiplica}</strong>`
}

function dividir () {
    var divide = n1 / n2
    res.innerHTML = `${n1} / ${n2} = <strong>${divide}</strong>`
}*/