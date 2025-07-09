function tabuada() {
    var num = document.getElementById('txtnum')
    var n1 = Number(num.value)
    var res = document.getElementById('res')
    var limite = 10
    for (let i = 1; i <= limite; i++) {
        let m = n1 * i
        if (i == 1) {
            res.innerHTML = `${n1} x ${i} = <strong>${m}</strong><br>`
        } else {
            res.innerHTML += `${n1} x ${i} = <strong>${m}</strong><br>`
        }
        
    }
}