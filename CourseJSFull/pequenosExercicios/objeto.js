let amigo = {nome: 'Jr',
sexo: 'M',
peso: 43.3,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(4)
console.log(amigo.nome + ' pesa ' + amigo.peso + ' Kg')
