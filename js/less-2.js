if(4*2 == 5*1) {  //if преобразует значение в скобках логически, булевый(ой) тип
	console.log('verno')
} else {
	console.log('neverno')
}

if(4*2 == 8*1) {
	console.log('Верно')
} else {
	console.log('неверно ')
}

//----------------------
//переменная 
let num = 50;
if(num < 49) {
	console.log('не правильно')
} else if(num > 100) {
	console.log('не правильно')
} else {
	console.log('верно')
}

//короткий вариант 
//? тернарный оператор 
(num == 50)? console.log('верно') : console.log('не правильно');

//по инструкций switch
switch (num) {
	case 49: 
		console.log('мадo');
		break;
	case 100: 
		console.log('много');
		break;
	case 80: 
		console.log('все равно много');
		break;
	case 50: 
		console.log('в точку');
		break;
}
//-----------------
let mau = 34;
if(mau > 35) {
	console.log('no')
} else if(mau < 33) {
	console.log('no')
} else {
	console.log('yes')
}
//---------------
//циклы
while(num < 49) {
	console.log(num);
	num++
}

//одинаковые только тут идет действие и потом канал условия 
do{
	console.log(num);
	num++;
}
while(num < 55);
//----------------
/*
for(let i = 0; i < 8; i++) {
	console.log(i);
}
*/
//--------------
/*
let money = prompt('Ваш бюджет на месяц?');
let name = prompt('Название вашего магазина?');
let time = 19;
*/
let mainList = {
	shopName: name,
	shopGoods: [],
	open: false
} 

//---------------------

for (let i = 0; i < 3; i++) {
	let a = prompt('Какой тип товара будем продавать?');
	
	let isEmpty = typeof(a) === null || a === ''; // Не пустой ответ
	if (isEmpty) {
		continue;
	}

	let isString = typeof(a) === 'string'; // Ответ является строкой
	let maxLengthAnswer = 50; // Максимальная длина строки ответа
	let isAccessLength = isString ? a.length < maxLengthAnswer : false; // Если строка проверяем проверяем длину 

	if (!isString || !isAccessLength) {
		continue;
	}

	mainList.shopGoods.push(a);
}

console.log(mainList);
/*
var i = 0;
do {
	i++;
	mainList.shopGoods[i] = prompt('какой тип товара будем продовать?');
} while(i < 1);
console.log(mainList);


var i = 0;
while(i < 2) {
	i++
	mainList.shopGoods[i] = prompt('какой тип товара будем продовать?');
}
console.log(mainList);
*/

//--------------

if(time < 0) {
	console.log('не бывает');
} else if (time > 8 && time < 20) { 
	console.log('время работать');
} else if(time < 24) {
	console.log('уже поздно');
} else {
	console.log('в сутках только 24 часа');
};
















