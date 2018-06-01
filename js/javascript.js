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
let money = prompt('Ваш бюджет на месяц?');
let name = prompt('Название вашего магазина?');


let mainList = {  //создали объект mainList который содежит данные 
				budget: money, //бюджет
				shopName: name, //имя магазина 
				shopGoods: [],  //массив товаров shopGoods
				employers: [], //объект с сотрудниками 
				open: false  //свойство open
}

//записать ответы в массив shopGoods
mainList.shopGoods[0] = prompt("какой тип товара будем продовать?");
mainList.shopGoods[1] = prompt("какой тип товара будем продовать?");
mainList.shopGoods[2] = prompt("какой тип товара будем продовать?"); 

//Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
alert(mainList.budget / 30);
console.log(mainList);