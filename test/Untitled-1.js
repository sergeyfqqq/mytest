1. ТРЕУГОЛЬНИК В ЦИКЛЕ 
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
#
##
###
####
#####
######
#######

Ответ: 
let result = "";
for (i=0; i<7; i++) {
  if (result.length < 7) {
    result += "#";
  }
  console.log(result)
}

2. FizzBuzz 
Напишите программу, которая выводит через console.log все цифры от 1 до
100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна
выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.

Ответ: 
for (i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 !== 0) {
      console.log("Buzz");
    }
    console.log(i);
  }

Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех
чисел, которые делятся и на 3 и на 5.

Ответ: 
for (i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    }
    console.log(i);
  }

3. ШАХМАТНАЯ ДОСКА 

let chessBoardSize = 30;

let chessBoard = "";

for (let i = 0; i <= chessBoardSize; i++) {
  for (let y = 0; y <= chessBoardSize; y++) {
    if ((i + y) % 2 == 0) {
      chessBoard += "$";
    } else {
      chessBoard += " ";
    }
  }
  chessBoard += "\n";
}

console.log(chessBoard);

4. Дана строка "I am the easycode", нужно сделать все первые буквы заглавными. 

Ответ:
let str = "I am the easycode"
let arr = str.split(" ");
let result = "";

for (i = 0; i < arr.length; i++) {
  if (i == arr.length -1) {
    result += arr[i][0].toUpperCase() + arr[i].slice(1);
  } else {
    result += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
  }
  
}

console.log(result);

5. Дана строка "tseb eht ma i". Используя цикл, сделать реверсивную строку. 

Ответ: 
let str = "tseb eht ma i";
let result = "";

for (i = str.length; i--; ) {
  result += str[i];
}

console.log(result);

6. Факториал числа от 1 до n. 

Ответ: 

let result = 1;
let num = 10;

for (i = 1; i <= num; i++) {
  result *= i;
}

console.log(result);

7. Создать, с помощью цикла, строку:"Считаем до десяти: 1 2 3 4 5 6 7 8 9 10"

Ответ: 

let str = "Считаем до десяти: ";

for (i = 1; i <= 10; i++) {
  if (i == 10) {
    str += i;
  } else {
  str += i + " ";
  }
}

console.log(str);

8. На основе строки :"JavaScript is pretty good language", создать строку, где все слова начинаются с заглавной буквы, а пробелы удалены. 

Ответ:

let str = "JavaScript is pretty good language"
let arr = str.split(" ");
let result = "";

for (i = 0; i < arr.length; i++) {
    result += arr[i][0].toUpperCase() + arr[i].slice(1);
}
console.log(result);

9. Найти и вывести в консоль все нечётные числа от 1 до 15. 

Ответ: let num = 15; 

for (i = 0; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

10. Функция, которая принимает любое кол-во чисел и возвращает их произведение. 

function multiply() {
  let result = 1;
  for (i = 0; i < arguments.length; i++) {
      result *= arguments[i];
  }
  return result;
}

11. Функция, возвращающая реверсивную строку. 
function reverseStr(a) {
  let result = "";

  for (let i = a.length; i--; ) {
  result += a[i];
  }

  return result;
}

12. Функция, которая принимает строку и заменяет её символы на кодировку юникод, разделяя пробелами.
function uniFunc(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
      if (i == str.length - 1) {
          result += str[i].charCodeAt();
      } else {
          result += str[i].charCodeAt() + " ";
      }
  }

  return result;
}
function firstFunc(arr, secondFunc) {
  let result = "New value: ";
  secondFunc = function (x) {
      let result = "";
      for (i = 0; i < arr.length; i++) {
          result += arr[i] + " ";
      }
  };
  result += secondFunc();
  return result;
};