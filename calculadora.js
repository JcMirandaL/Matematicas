function sumar(a, b) {
  return a + b;
}

//la resta se puede hacer con el operador - o con la función Math.subtract
function restar(a, b) {
  return a - b;
}

//esto suma y resta dos números
sumar(5, 3);
restar(10, 4);

//nota: la multiplicación se puede hacer con el operador * o con la función Math.multiply
function multiplicar(a, b) {
  return a * b;
}

//nota: la división se puede hacer con el operador / o con la función Math.divide
function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}
