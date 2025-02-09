let capital = "dhaka";
console.log(capital.length);
capital[0] = 'f';
console.log(capital) //string is immutable=>not changeable
let yourName = "Sheikh_Minhajul";
myName = yourName.slice(7, 15); //(start index, end before the index)
console.log(myName);
let comment = "I am a good person and working hard for my passion";
let devided = comment.split(' ');
console.log(devided);
console.log(typeof devided);
console.log(devided.join('|'));
console.log(typeof devided);
const first = 'SheikH'; const second = 'MinHajul';
const firstName=first.toLowerCase()
const secondName=second.toLowerCase()
const nameOfMain = firstName.concat(' ').concat(secondName);
console.log(nameOfMain);
console.log(nameOfMain.includes('m'))