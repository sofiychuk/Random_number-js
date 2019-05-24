function doRandomNumber(x, y){
    var rand = x + Math.random() * (y + 1 - x);
    rand = Math.floor(rand);
    return alert('Отже, ваше число буде: ' + rand);
}
alert("Згенеруємо будь-яке число від першого до другого яке введете далі!")
var x = +prompt('Перше число?', "");
var y = +prompt('Друге число?', ""); 

if (x >= y){
    alert("Не правильно, перше число має бути більше хочаб на 1 за друге!!");
} else {
    doRandomNumber(x, y);
}
