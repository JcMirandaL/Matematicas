function sumar(a, b) {
  return a + b;
}

// La resta se puede hacer con el operador - o con la función Math.subtract
function restar(a, b) {
  return a - b;
}

// Esto suma y resta dos números
sumar(5, 3);
restar(10, 4);

// Nota: la multiplicación se puede hacer con el operador * o con la función Math.multiply
export function multiplicar(a, b) {
  return a * b;
}

// Nota: la división se puede hacer con el operador / o con la función Math.divide
export function dividir(a, b) {
  if (b === 0) throw new Error("División por cero");
  return a / b;
}

// Llamadas de prueba (opcional, solo si quieres probar las funciones localmente)
multiplicar(2, 3);
dividir(10, 2);
