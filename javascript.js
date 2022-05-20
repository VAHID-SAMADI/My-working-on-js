//   let firstNumber = "10.9";
//   firstNumber = +firstNumber;
//   console.log(firstNumber);
//   let array = ["hi", 2, 3, 30, 4, 455, 5, 6, 7, 8, 9, "hooy"];
//   console.log(typeof array);
//   console.log(Array.isArray(array));
//   console.log(array instanceof Array);
//   for (item in array){
//       console.log(array[item])
//   }
//   array.forEach((value) => {
//     console.log(value);
//   });
//   console.log(array.toString())
//   console.log(array.join("|"))
//   console.log(array.pop())
//   console.log(
//     array.filter(function (value, index) {
//       return typeof array[index] === "string";
//     })
//   );
//   let myNumbers = [];
//   for (item in array) {
//     if (typeof array[item] === "number") {
//       myNumbers.push(array[item]);
//     }
//   }
//   console.log("array befor sort", myNumbers);
//   myNumbers.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(
//     "==========================================================="
//   );
//   console.log(
//     "==========================================================="
//   );
//   console.log("array after sort ", myNumbers);
//   console.log(
//     array.sort(function (a, b) {
//       return a - b;
//     })
//   );
//   console.log(typeof array[item])
//   console.log(array.indexOf("hooy"))
//   console.log(...myNumbers);
//   console.log(Math.min(...myNumbers));
//   console.log(Math.max(...myNumbers));
//   let timer = setInterval(function(){
//     console.log("hi")
//     console.log("bye")
//     clearInterval(timer)

//   },1000)

// setTimeout()
// let a = prompt("first number ? ");
// let b = prompt("number two ?");
// let sum = Number(a) + Number(b);
// let minus = a - b;
// let zarb = a * b;
// let taghsim = a / b;

// console.log(sum);
// console.log(minus);
// console.log(zarb);
// console.log(taghsim);
// let inputNumber = prompt("Enter a number");
// let userNumber = +inputNumber;
// if (userNumber % 2 === 0) {
//   console.log("عدد زوج است ");
// } else {
//   console.log("عدد فرد است ");
// }

// let firstNumber = prompt("First number ?");
// let secondNumber = prompt("Second number ?");
// let thirdNumber = prompt("Third Number ?");

// let avrageNumbers = (Number(firstNumber) + Number(secondNumber)+Number(thirdNumber))/3
// console.log("miangin barabar ast ba : " , avrageNumbers)

// let userAge = Number(prompt("what is your age ? ", 1));
// if (userAge <18){
//     console.log("Access denid !!! Your Age kamtar of 18")
// }else{
//     console.log("Welcome :))")
// }
// let firstNumber = Number(prompt("First number ?"));
// let secondNumber = Number(prompt("Second number ?"));

// let powerNumber = firstNumber ** secondNumber;
// console.log("POWER RESULT IS : ", powerNumber);

// let userBirthday = Number(prompt("Enter birthday year"));
// let userAge = 2022 - userBirthday;
// if (isNaN(userAge) || userAge < 2022) {
//   console.log("Wrong input");
// } else {
//   console.log("your Age is : ", userAge);
// }
//  console.log("VaHiD")

let getMinutes = Number(prompt("Enter a minutes : "), 0);
let hoursCalulator = getMinutes / 60;
if (isNaN(hoursCalulator)) {
  console.log("worng number entered");
} else {
  console.log(hoursCalulator);
}
