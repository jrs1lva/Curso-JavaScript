function tabuada() {
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let tab = document.getElementById('seltab')

    if (txtnum.value.length == 0) {
        window.alert('Digite um valor na caixa de texto')
    } else {
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}