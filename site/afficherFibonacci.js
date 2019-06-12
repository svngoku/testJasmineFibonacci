let calcul = require('./fibonacci.js')
let readLine = require('readline')

let rl = readLine.createInterface(process.stdin, process.stdout)

rl.question('Entrer un nombre :', function(nombre){
    console.log(`Le terme ${nombre} a pour valeur ${calcul.fibonacci(nombre)}`)
    rl.close()     
})