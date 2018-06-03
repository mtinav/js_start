function showFirstMessage(text) {  //в скобках параметры
	alert(text);																						//что будет выполнять функция
}
showFirstMessage('Hello');									//вызываем
//------------------------
let num = 20    																			//локальные переменные нельзя вводит внутри функций, а ак мы можем менять в любой момент
function showFirstMessage(text) {  //в скобках параметры
	alert(text);																						//что будет выполнять функция
}
showFirstMessage('Hello');									//вызываем
console.log(num)                   // если num была внутри функций выходила ошибка что найти не может, видна будет только вутри
//-------------------------

//Function Declaration
//пример
function calc(a, b) {
	return a + b
}
console.log(calc(4,5));
console.log(calc(500,4500));
//-------------------------

//Function Expression
//примеры 
let calcul = function(a, b) {
	return a + b
};
console.log(calcul(500, 40));
/*
var sayHi = function(person) {
	alert('Hello,' + person);
};
sayHi('Yuriy');

var f = function(параметры) {
	//тео функций 
}
let nameGo = function(namefamily) {
	alert('fack' + namefamily);
};
nameGo(' you');
*/
//--------------------------
let calctwo = (a, b) => a + b
console.log(calctwo(5, 4));
//--------------------------

//методы и свойства
let str = 'Test';
console.log(str.lenght) //lenght для получения длины, строки  м других типов данных
console.log(str.toUpperCase()); //сделает текст аглавными буквами
console.log(str.toLowerCase()); // c маленькой буквы 
//--------------------------

let nomer = '12.3';
console.log(Math.round(nomer)); //округляет числя до целого числа

//преобразует строку в число 
let nomerOne = '12.3px';
console.log(parseInt(nomerOne)); 
console.log(parseFloat(nomerOne));
//--------------------------

let money,
			 name,
			 time,
			 price

function start() {
		money = prompt('Ваш бюджет на месяц?');

		//метод isNan если тот параметр который мы ему передали не является числом, то выдает true
		while (isNaN(money) || money == '' || money == null) {  //если пользователь не ввел число или не число|| или ввел пустую строку|| или просто отменил
		money = prompt('Ваш бюджет на месяц?');
	}

	 name = prompt('Название вашего магазина?').toUpperCase();
		time = 21;
};

start();
//-----------------------------
let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
};

function shopGoods() {
		for (let i = 0; i < 3; i++) {
			let a = prompt('Какой тип товаров будем продавать?');

			if(typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50 ) {
				console.log('verno');
				mainList.shopGoods[i] = a;
			} else {
				i = i - i;
			};
	};
};
console.log(mainList.shopGoods);
//----------------------

function workTime(time) {
	if(time < 0) {
		console.log('не бывает');
	} else if (time > 8 && time < 20) { 
		console.log('время работать');
	} else if(time < 24) {
		console.log('уже поздно');
	} else {
		console.log('в сутках только 24 часа');
	};
};
workTime(18);

//------------------------coolbek

function learnJS(lang, callback) {
	console.log('i know ' + lang);
	callback();
};

learnJS('javascript', function(){
	console.log('я прошла 3 урок')
});
//или
/*
learnJS('javascript', done);
function done() {
	console.log('я прошла 3 урок')
}
*/



function giveNameEmpoloyers() {
	for (let i = 0; i < 4; i++) {
		let nameEmployers = prompt('Имя вашего сотрудника?');
		if(typeof(nameEmployers) === 'string' && typeof(nameEmployers) != null && nameEmployers != '' && nameEmployers != '' && nameEmployers.length < 50) {
			console.log('good')
			mainList.employers[i] = nameEmployers;
		} else {
			--i;
		}
	}
};
console.log('giveNameEmpoloyers');

function budgetDay(x) {
 alert("Бюджет на 1 день составляет " +  x / 30);
 mainList.budget = x;
}










