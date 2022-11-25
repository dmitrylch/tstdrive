/* 
const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 3; // 2 * 2 * 2
console.log(volume);

//strings
const city = 'Moscow';
const street = 'Pushkina';
console.log(city + ', ' + street + ' ' + 5);

//операторы
let age = 18 + 5;
age += 2; //age = age + 2
age -= 3; //age = age - 2 
age *= 2; //age = age * 2
age /= 2; //age = age / 2

age++; //age = age + 1
age--; //age = age - 1
console.log(age);

// операторы сравнения
const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

// Порядок операторов
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

// 100 - (12) 10 > (10) 90 - (12) 5

const a = 5 + 10 / 2;
console.log(a);

let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);

// Типы данных
let a = 5;
let b = 5.6;
console.log(typeof a);
console.log(typeof b);
a = 'stroke';
console.log(typeof a);

e= 'fuckdick'
console.log(typeof e)

let isAdmin = false;
console.log(typeof isAdmin);

let c;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;
console.log(d == null);

*/

/*
Упражнение епс
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите? 

//Решение от курса:
const rate = 80;
const offer = 40;
const workAvailable = (11 - 2) * 5;

console.log('Do I have hours?' + (workAvailable > offer));
console.log('Cost will be:' + offer * rate + '$');

// Мое решение
const rate2 = 80;
let workDay = 5; // на кой-то хуй объявил кол-во дней вместо подсчета часов
const hrWeek = workDay * 5; 
let holid = (11 - 2) * 5;
const ofr = 40;
let cst = offer * rate;
let chnc = holid >= ofr;

console.log(chnc); // забыл как выводить сразу в лог поэтому наебашил let 
*/


/*
// Шаблонные строки
const projectName = 'fisting';
const price = '$300';
const author = 'Georgy Zalupa';

const template = author + ' order ' + projectName + ' for ' + price;
console.log(template)

const template2 = `${author} order ${projectName} for ${price}`;
console.log(template2);

const template3 = 'Project \n' + 'price:' + price;
console.log(template3);

const template4 = `${author} order ${projectName}
for ${price}`;
console.log(template4);
*/

//Преобразование типов
const age = '18';
console.log(Number(age) + 5);
console.log(age - 3)