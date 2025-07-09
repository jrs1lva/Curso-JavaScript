function verificar() {
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let vet = [num]
    let select = document.getElementById('info')

    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${num*i}`
        item.value = `tab${i}`
        tab.appendChild(item)
        
    }


}
