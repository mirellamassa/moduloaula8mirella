// Importando as funções dos módulos
import { somar } from './somar.mjs';
import { multiplicar } from './multiplicar.mjs';
import { subtrair } from './subtracao.mjs';
import { dividir } from './divisao.mjs';

// Utilizando as funções importadas
const numero1 = 5;
const numero2 = 3;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoSubtracao = subtrair(numero1, numero2);
const resultadoDivisao = dividir(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtracao}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivisao}`);