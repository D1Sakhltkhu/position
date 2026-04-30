//function calculator(a, b, callback) {
// const result = callback(a, b);
//console.log(result);
//}

//const add = (a, b) => a + b;
//const gamokleba = (a, b) => a - b;
//const gamravleba = (a, b) => a * b;
//const gayofa = (a, b) => a / b;

//calculator(a, b, add);
//calculator(a, b, gamokleba);
//calculator(a, b, gamravleba);
//calculator(a, b, gayofa);

const products = [
  { name: "nino", score: 45 },
  { name: "gio", score: 80 },
  { name: "saba", score: 67 },
  { name: "lia", score: 90 },
];

const result = products
  .filter((product) => product.score > 50)
  .sort((a, b) => b.score - a.score)
  .map((product) => product.name);

console.log(result);
