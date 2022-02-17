
// console.log(`ygycugv ${10 + 23}`);
// console.log('10' > 15);
// console.log(5 && 7);
// const x1 = -100;
// let x2;
// if (x1 > 0) {
//   x2 = "positiv";
// } else {
//   x2 = "negative";
// }
// console.log(x2);


// const x1 = 1;
// let price;
// switch (x1) {
//   case 1:
//   case 2:
//     price = 20;
//     break;
//   case 3:
//   case 4:
//     price = 50;
//     break;
//   default:
//   console.log('illegal number');
// }
// console.log(price);

// const x1 = -10;
// const res = x1 > 0 ? 50 : 40;
// console.log(res);


// const colors = ['blue', 'teal', 'red', 'yellow'];
// const max = colors.length - 1;
// const min = 0;


// const i = Math.round(Math.random() * (max - min) + min);
// const color = colors[i];
// console.log(color);

// document.body.style.background = color;

// let base = prompt('let number');
// base = Number(base);
// console.log(base);
// let quant = prompt('let quant');
// quant = Number(quant);
// console.log(quant);
// let result = (base ** quant);
// console.log(result);
// for (let i = 0; i <= 51; i += 3) {
//   console.log('i =', i);
// }


// --------------------Генератр случайніх чисел -----------------------------------------
// const minSalary = 500;
// const maxSalary = 2000;
// const employees = 10;
// let totalSalary = 0;
 
// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`ЗП работника  ${i}  равна`, salary);
//   totalSalary += salary;
//   console.log(`пром итог`, totalSalary);
// }
// console.log(`итого`, totalSalary);


// const min = 4;
// const max = 17;
// let total = 0;

// for (let i = min; i <= max; i += 1) {

//   if (i % 2 !== 0) {
//     // console.log(`нечетное`, i);
//     continue;
//   }
//   console.log(`четное`, i);
//     total += i;

//  console.log(`total`, total);
// }


// const payment = 110000;
// let ballance = 10000;

// console.log(`order: ${payment} ballance: ${ballance}`);
// if (payment > ballance) {
//   console.log(`bad transaction`);
// } else {
//   ballance -= payment;
//   console.log(`good transaction, remainder: ${ballance}`);
// }

// let totalSpent = 1000;
// let payment = 500;
// let discount = 0;

// if (totalSpent < 100) {
//   console.log(`you are not client, discount: ${discount}`);
// } else if (totalSpent < 1000) {
//   discount = 0.02;
//   payment *= discount;  console.log(`you are not client, discount: ${discount} order: ${payment}`);
// } else if (totalSpent <= 5000) {
//   discount = 0.05;
//   console.log(`you are not client, discount: ${discount} order: ${payment}`);
// } else  {
//   discount = 0.1;
//   console.log(`you are not client, discount: ${discount} order: ${payment}`);
// }
// payment -= discount * payment;
// totalSpent += payment;
// console.log(`your Total spent =`, totalSpent);

// const friends = ['arta', 'tank', 'infantry', 'air', 'wwwwwww', 'ttttttt', 'gdgjg', 'hdhdddk1111'];
// friends[2] = 'lvvuhvhuv++++';
// friends[4] += '66666666666';

// console.table(friends.slice(0, 7));
// for (let i = 0; i <= friends.length; i += 1) {
//   friends[i] += `ll`;
//   console.log(friends[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

// const numbers = [20, 25, 86, 65, 94, 125, 301, 87];
// let total = 0;
// let subresult = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`numbers[${i}] =`, numbers[i]);
//   if (numbers[i] % 2 !== 0) {
//     total += numbers[i];
//     console.log('total = ', total);
//   }
// }

// let name = "12";
// let meessage = name ? "jvkjv" : "11111";
// console.log(name);
// console.log(meessage);

// console.log(NaN === NaN);
// console.log(null === null);

// function multiply(x, y, z) {
//   console.log(`mult x * y * z = ${x * y * z}`);
// }

// multiply(5, 8, 12);

// let x = 5;

// let y = x < 7 ? x = 'true' : x = 'false';
// console.log(x);
// console.log(typeof (5 + "kii"));
// for (let i = 0;  i < 12; i += 1) {
//   console.log(i);
// }


// улитка выбирается из колодка на 7 см  за ночь, и сполазет на 2 за день, за сколько суток вылезет
// function main(value) {
//   let totalFeet = 0;
//   const up = 7;
//   const down = 2;
//   let days = 0;
//   while (totalFeet < value) {
//     days += 1;
//     totalFeet += up;
//     if (totalFeet >= value) {
//       break;
//     }
//       totalFeet -= down;
//   }
//   return days;
// }

// поиск в массиве примитивов заданного примитива
// console.log(main(128));
// const logins = ['gdbcbhdhd', 'kjbdcs7cadbc', 'hh77hhTG', 'bcgR56cv', 'bdb8hg5Er'];
// const loginToFind = 'bcgR56cv';
// let message = 'user ${loginToFind} not found';

// for (const login of logins) {
//   console.log(login);
//   console.log(`${login} === ${loginToFind}, `, login === loginToFind);
//   if (login === loginToFind) {
//     message = `user ${loginToFind} is in logins`;
//     break;
//   }
// }

// message = logins.includes(loginToFind)
//   ? `${loginToFind} - yes`
//   : `${loginToFind} - no`;

// console.log(message);



// перебор массива
// const numbers = [4, 7, 2, 94, 12, 90, 8, 35, 83, 3];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);
//   if (number < smallestNumber) {
//     smallestNumber = number;
//       }
// }

// console.log('smallest Number = ', smallestNumber);

//обьединить все єлементі массива в одну строку
// const friends = ['Anna', 'Ola', 'Tom', 'Mike'];

// let string = '';
// for (const friend of friends) {
//   string += friend + ', ';
// }
// string = string.slice(0, string.length - 2);

// const string = friends.join(', ');
// console.log(string);

// изменить регистр каждого символа в строке на противоположный
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);
  //   if (letter === letter.toLowerCase()) {
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     invertedString += letter.toLowerCase();
  //   }
  
//   const isEqual = letter === letter.toLowerCase();
//   invertedString += isEqual
//     ? letter.toUpperCase()
//     : letter.toLowerCase();
// }
// console.log(invertedString);

//делаем slug в URL из названия статьи
// const title = 'Top 10 benefits of React Frameworks';
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-');
// console.log(slug);
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// сумма значений 2-х массивов
// const array1 = [6, 13, 32, 39, 41];
// const array2 = [87, 34, 100, 3, 8];
// let total = 0;
// const numbers = array1.concat(array2, [5, 67, 13]);
// for (const number of numbers) {
//   total = total + number;
// }
// console.log(total);

// работаем с коллекцией карточек в трелло
// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
//   'Карточка-6',
//   'Карточка-7'
// ];
// console.table(cards);
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 2);
// console.table(cards);
// const cardToInsert = 'Карточка-8';
// cards.splice(2, 0, cardToInsert);
// console.table(cards);
// const cardToUpdate = 'Карточка-17';
// cards.splice(2, 1, cardToUpdate);
// console.table(cards);

// let message = "JavaScript is in my blood";
// let pricePerWord = 10;
// let total = 0;
// function calculateEngravingPrice(message, pricePerWord) {
// let words = message.split(' ');
// console.log(words);
// let calc = words.length;
// console.log(calc);
//   total = calc * pricePerWord;
 // return total;

// }
// console.log(total);

// let title = "Arrays for begginers";
// let words = title.toLowerCase();
// console.log(words);
// let arrayWords = words.split(' ');
// console.log(arrayWords);
// let slug = arrayWords.join('-');
// console.log(slug);

// const number = 2;
// let result = 0;
//   for (let i =1; i <= number; i += 1) {
//     result += i;
//     console.log(result);
//   }
// console.log(result);

// const rez = function (x, y) {
//   return x + y;
// }
// console.log(rez(5, 48));
// console.log(rez(115, 248));


// вывести массив чисел от мин до макс
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
// let difference = max - min;
// let subResult = min;
// for (let i = 0; i <= difference; i += 1) {
//     subResult = min + i;
//     numbers.push(subResult);
//   }
//   console.table(numbers);
//   return numbers;
// }
// createArrayOfNumbers(3, 16);

// функция подсчитать общую сумму массива
// const calculateTotalPrice = function (items) {
//   console.log('items массив =', items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// }
// const result = calculateTotalPrice([5, 7, 12, 45, 22, 3, 5, 6,34,689]);
// console.log(result);


// фунція перебора и логирования массива
// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }

// logItems([4, 6, 7, 12, 45, 76])
// logItems(['jhiv', 'kugcc11', 'hfhf111', 'fhf74jrn']);

//  фунция создает маасив из общих єлементов 2-х массивов
// function getCommonElements(array1, array2) {
//   let arrayResult =[];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       arrayResult.push(array1[i]);
//     }
//   }
//   return arrayResult;
// }

// console.log(getCommonElements([5, 7, 8, 1], [5, 1, 4, 0]));

// функция принимает массив и ищет в нем єлемент

// const logins = ['www2', 'gggggg4', 'hdhdh09', 'bdgdgd25']
// const findLogin = function (allLogins, loginToFind) {
//   console.log(allLogins);

  // first edition
  // for (const login of allLogins) {
  //   if (login === loginToFind) {
  //     return `User ${loginToFind} present`;
  //   }
  // }
  // return `User ${loginToFind} not exist`; 
  
  // second edition - ternar
//   return allLogins.includes(loginToFind)
//     ? `User ${loginToFind} present`
//     : `User ${loginToFind} not exist`;
  
// }

// console.log(findLogin(logins, 'www2'));
// console.log(findLogin(logins, 'lhvjv255'));

// возврат всех четніх єлементов массива

// function getEvenNumbers(start, end) {
//    const numbers = [];
//     for (let i = start; i <= end; i += 1) {
//       if (i % 2 === 0) {
//         numbers.push(i);
//       }
//     }
//     return numbers;
// }
// console.log(getEvenNumbers(3, 27));

// инверсия строки по шрифтам

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';  

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// }
// console.log(changeCase('hdRRTbbDSWWEbbnn'));

// перевод строку в слак

// const slugify = function (string) {
//   const title = string.toLowerCase().split(' ').join('-');

//   return title;
// }

// console.log(slugify('fgThh dghf bfgTY1 cncHHjn67'));

// проебразование псевдомассива arguments

// const fn = function() {
//   console.log(arguments);

//   const arg = Array.from(arguments);

//   console.log(arg);
// }

// console.log(fn(3, 5, 67, 12, 45, 6, 8));

// const fn = function(...args) {

//   return args;
// }

// console.log(fn('hello ',3,5,67,12,45,6,8));

//  функция сложения произвольного количества аргументов

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// }

// console.log(add(3, 5, 6, 8, 12));
// console.log(add(23, 51, 6, 8, 12,45,9));


// функция фильтрует массив и набор чисел - отбирает совпадающие

// const filterNumbers = function (array, ...args) {
//   console.log('array = ', array);
//   console.log('args = ', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//     }    
//   }

//   return uniqueElements;
// }

// console.log(filterNumbers([5, 6, 2, 78, 34], 6, 78, 5));
// console.log(filterNumbers([15, 63, 12, 78, 34], 6, 78, 5, 12));

// Обьект плейлист

// const name = 'PlayList';

// const playlist = {
//   name: name,
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// }
// console.log(playlist);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = 'Jamaica';
// apartment.location.city = "Kingston";

// console.log(apartment);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
}