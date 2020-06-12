'use strict'
// УСЛОЖНЕННОЕ

let lang = 'eng';

let engDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let ruDays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
if (lang === 'ru') {
  console.log(ruDays);
} else if (lang === 'eng') {
  console.log(engDays);
} else {
  console.log('choose your languge');
}

switch(lang) {
  case 'ru': 
   console.log(ruDays);
   break
  case 'eng':
   console.log(engDays);
   break
  default:
  console.log('choose your languge');
  break
}

let days = [engDays, ruDays];
let i = lang === 'ru' ? 1 : 0;
console.log(days[i]);

let namePerson = 'Артем'


let message = namePerson === 'Артем' ? 'директор' : 
              namePerson === 'Максим'? 'преподаватель': 'студент';

console.log(message);