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