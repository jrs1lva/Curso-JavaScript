let vet = [4,1,35]
vet[3] = 2
vet.push(19)

console.log(`Array: ${vet}`)
vet.sort()
console.log(`Array: ${vet}`)
console.log(`O vetor tem ${vet.length} posições`)
console.log(`Quarto valor ${vet[3]}`)
console.log(`${vet.sort()}`)
console.log(vet[3])

/*for (let i = 0; i < vet.length; i++) {
    console.log(`A posição ${i} tem o valor ${vet[i]}`)
}*/
vet.sort()
for (let i in vet) {
    console.log(`A posição ${i} tem o valor ${vet[i]}`)
}

let indice = vet.indexOf(1)
console.log(indice)

if (indice == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log('O valor está na posição ' + indice)
}