let firstNumber = prompt('Digite o primeiro valor')
let secondNumber = prompt('Digite o segundo valor')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const mod = firstNumber % secondNumber


alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + mod)
if (sum % 2 == 0) {
  alert("A soma é par: " + sum);
} else {
  alert("A soma é impar: " + sum);
}

if (firstNumber == secondNumber) {
  alert("Os numeros inseridos são iguais.")
} else {
  alert("Os numeros inseridos são diferentes.")
}
