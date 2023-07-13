const M = 90000;
const C = 60000;
const n = 24;

const i = (((M / C) ** (1 / n)) - 1);
console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${(i * 100).toFixed(3)}%, pois após ${n} meses você teve que pagar ${M} reais.`);