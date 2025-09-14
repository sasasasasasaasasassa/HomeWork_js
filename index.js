// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let number_start = parseInt(prompt("Enter start number"));
// let number_end = parseInt(prompt("Enter end number"));
// let sum = 0;
// for(let i = number_start; i <= number_end; i++) {
//     sum += i;
// }

// 2. Запросить 2 числа и найти только наибольший общий делитель.
let num_start = parseInt(prompt("Enter start number"));
let num_end = parseInt(prompt("Enter end number"));
while (num2 !== 0) {
    let temp = num_end;
    num_end = num_start % num_end;
    num_start = temp;
}
alert(num_start);

// 3. Запросить у пользователя число и вывести все делители этого числа.


// 4. Определить количество цифр в введенном числе.