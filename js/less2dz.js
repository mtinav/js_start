let money = prompt('Ваш бюджет на месяц?');
let name = prompt('Название вашего магазина?');
let time = 19;
//
let mainList = {
	shopName: name,
	shopGoods: [],
	open: false
} 

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
