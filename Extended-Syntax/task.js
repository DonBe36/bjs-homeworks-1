

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    "use strict";
    a = 2;
  b = 4;
  c = 3;
  let D, x1, x2;
  D = b**2 - 4 * a * c;
  if (D > 0) {
    x = (-b - Math.sqrt(D))/(2 * a) && x = (-b + Math.sqrt(D))/(2 * a);
    console.log("х имеет 2 значения: " + x1 + ", " + x2); 
  } else if (D < 0) {
    console.log("x не имеет значений")
  } else if (D = 0) {
    x = -b/2 * a;
    console.log("уравнение имеет 1 значение")
  }
};
    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}
