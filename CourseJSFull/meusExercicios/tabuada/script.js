function tabuada() {
    var num = document.getElementById('txtnum')
    var n1 = Number(num.value)
    var res = document.getElementById('res')

    for (let i = 1; i <= 10; i++) {
        let m = n1 * i
        res.innerHTML += `${n1} x ${i} = ${m}<br>`
        
    }
}