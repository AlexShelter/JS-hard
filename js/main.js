let money = 300000;
console.log(typeof money);

let income = 'freelance';
console.log(typeof income);

let addExpenses = 'Internet, Taxi, Phone';
console.log(addExpenses.length);

let deposit = false;
console.log(typeof deposit);

let mission = 90000000;
let period = 1;

console.log('Период равен ' + period + ' месяцев. ' + 'Цель заработать ' + mission +
 ' долларов.');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = money/30;
console.log(budgetDay);

// УСЛОЖНЕННОЕ

let num = 266219;

num = String(num);
// console.log(typeof num);

num = num.split('');
console.log(num);

function count(num) {
  let result = 1;
  for (let i = 0; i < num.length; i++) {
    result*=num[i];
  }
  return result;
}

let result = count(num);
console.log(result);

result = result ** 3;
console.log(result);

result = String(result);

console.log(result.charAt(0) + result.charAt(1));