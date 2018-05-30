var number = 5; //число
var string = 'Hello'; //строка
var sym = 'Symbol()' //символ
var boolean = true; //логическое значение
null; //когда в коде просто не существует 
undefined;	// есть объект но нет значения
var obj = {}; //объект

console.log(4/0); //number
console.log('string' * 9); // string обязательно ковычки
//console.log(n1); //null такого нет
var und;
console.log(und); //undefined ничего не задано 
/*obj = {
	name: 'John',
	age: 25,
	isMarried: false
}
console.log(obj.name);
console.log(obj['name']);*/ //используется реже, но если нужно добраться до отдеольной строки



var arr = ['plum', 'ggg', 'gagag'];
console.log(arr[0]);

var answer = prompt('dfffff67?', '16');
console.log(typeof(arr));

// инкримент и дискремент ? одно равно означает что мы присвайваем
var incr = 15,
				decr = 10;
// incr++;
// decr--;
console.log(incr);
console.log(decr);
//два == означчает оператор сравнения
console.log(incr == 10)
//три === днелает сравнение по типам данных 
console.log("10" === 10);

//
var isChecked  = true;
var isClose = true;
//&& оператор 'и' выдаст правду только тогда когда два значния переменнных будет true
//! инверсия
// '||' оператор 'или' проверяет если хотя бы одно из наих сравнений будет тtrue выдаст true
console.log(isChecked && isClose); //true
console.log(isChecked && !isClose); //false
console.log(isChecked || !isClose); //false

//порядок выполнения операторов 


//дз
// var budget = ['Ваш бюджет на месяц?', 'Название вашего магазина?' ];
// alert(budget[0]);
// alert(budget[1]);

prompt('Ваш бюджет на месяц?');
prompt('Название вашего магазина?');
/*
mainList = {
	name: 'Имя магазина',
	age: 'Бюджет',

}
}
console.log(mainList.name);
console.log(mainList['age']);

var shopGoods = ['plum', 'orange', 'apple'];
console.log(shopGoods[0]);
console.log(shopGoods[2]);

employers = {
	name: '',
}
console.log(employers.name);
*/

var mainList = new Object();

	name: 'Имя магазина';
	mainList.open = 'open';
	open: true;


var shopGoods = [];

var employers = new Object();





