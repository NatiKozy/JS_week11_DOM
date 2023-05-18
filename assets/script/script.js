let price1 = document.getElementById("price1");
console.log(price1.innerHTML);

let price2 = document.getElementById("price2");
console.log(price2.innerHTML);

let price3 = document.getElementById("price3");
console.log(price3.innerHTML);

let price4 = document.getElementById("price4");
console.log(price4.innerHTML);

let totalPrice = +price1.innerHTML + +price2.innerHTML + +price3.innerHTML + +price4.innerHTML;
console.log (totalPrice);

document.getElementById("basket__result").textContent = totalPrice;

function percents(){
    let sale = 20;
    let total = totalPrice - (totalPrice / 100 * sale);
    console.log(total.toFixed(2));
    document.getElementById("basket__result").textContent = total.toFixed(2);
}

let button = document.getElementById("basket__sales-btn");
button.addEventListener('click', percents);






// У нас есть элементы, в которых записаны цены айтимов из корзины. Нужно записать их все в переменные.
// Взять значение из них (метод innerHTML)
// Привести значение переменных к числу (вспомним про унарный плюс)
// Сложить значения переменных
// Вставить полученное значение в элемент (предварительно найти его и записать в переменную)
// Создать функцию, которая будет вычитать 20%  от общей стоимости
// Добавить метод onclick или addEventListener на кнопку ”Использовать купон на 20%”