// #1

// let num = 0;
// for(let i = 0; i <= 1000; i++){
//     num = num + i
// }
// console.log(num)

// #2

//let num = 0;
// for(let i = 93; i <= 843; i++){
//     if(i % 2 != 0){
//         continue;
//     }
//     num = num + i
// }
// console.log(num)

// #3

// let num = 1;
// for(let i = 0; i <= 400; i++){
//     if(i % 6 != 0){
//         continue;
//     }
//     num = num * i
// }
// console.log(num)

// #4

// let num = (Math.floor(Math.random() * 100) + 1);
// let check = true;
// let i = 2;

// while(i < num){
//     if(num % i == 0){
//         check = false
//         break;
//     }
//     i++
// }
// if(check == true){
//     console.log(`${num} is a prime number`)
// }

// #5

// let check = true;
// let i = 2;
// for(let num = 1; num <= 100; num++){
//     i = 2;
//     check = true;
//     while(i < num){
//         if(num % i == 0){
//             check = false
//             break;
//         }
//         i++
//     }
//     if(check == true){
//         console.log(`${num} is a prime number`)
//     }
// }

// #6

// let num = (Math.floor(Math.random() * 100) + 1);
// let answer = 1;
// for(let i = num; i > 1; i--){
//     answer = answer * i
// }
// console.log(`The factorial of ${num} is ${answer}`)

// #7

// let num1 = (Math.floor(Math.random() * 100) + 1);
// let num2 = (Math.floor(Math.random() * 100) + 1);
// let temp = 1;
// let small = 0;
// if(num1 < num2){
//     small = num1
// }else{
//     small = num2
// }
// for(let i = 1; i <= small; i++){
//     if(num1 % i == 0 && num2 % i == 0){
//         temp = i
//     }
// }
// console.log(`The gcf of ${num1} and ${num2} is ${temp}`)

// #8

// let num = (Math.floor(Math.random() * 10) + 1);
// let temp = 0;
// let patern = '';
// console.log(`Imput - ${num}`)
// for(let i = 0; i <= num; i++){
//     temp = i;
//     patern = '';
//     while(temp > 0){
//         patern = patern += '*'
//         temp --
//     }
//     console.log(patern)
//     if(i == num){
//         for(let temp2 = i; temp2 > 0; temp2--){
//             temp = temp2;
//             patern = ''
//             temp--
//             while(temp > 0){
//                 patern = patern += '*'
//                 temp --
//             }
//             console.log(patern)
//         }
//     }
// }

// #9

// let num = (Math.floor(Math.random() * 10) + 1);
// let temp = 0;
// let patern = '';
// console.log(`Imput - ${num}`)
// for(let i = 0; i <= num; i++){
//     temp = i;
//     patern = '';
//     while(temp > 0){
//         patern = patern += '*'
//         temp--
//     }
//     console.log(patern)
// }

// #10

// let num = (Math.floor(Math.random() * 10) + 1);
// let final = 0;
// let temp = 0;
// let temp2 = 0;
// let problem1 = "";
// let problem2 = "";
// console.log(`Input - ${num}`);
// console.log();

// for(let i = 1; i <= num; i++){
//     temp = temp + 1
//     temp2 = temp2 + i
//     if(i != num){
//         final = final + temp2
//         if(i == 1){
//             problem1 = "1"
//             problem2 = "1"
//         }else{
//             problem1 = problem1 += " + "
//             problem1 = problem1 += temp
//             problem2 = problem2 += " + "
//             problem2 = problem2 += temp2
//         }
//         console.log(`${problem1} = ${temp2}`)
//     }else{
//         console.log()
//         console.log(`${problem2} = ${final}`)
//         console.log(`Your output is ${final}`)
//     }
// }

// #11

// let input = (Math.floor(Math.random() * 10) + 5);
// let temp1 = 1;
// let temp2 = 1;
// let temp3 = 1;
// let final = "";
// console.log(`Input - ${input}`);
// console.log();

// for(let i = 1; i <= input; i++){
//     if(i == 1){
//         final = "0";
//     }else if(i == 2 || i == 3){
//         final = final += " ";
//         final = final += 1;
//     }else{
//         temp2 = temp1 + temp3;
//         temp1 = temp3;
//         temp3 = temp2;
//         final = final += " ";
//         final = final += temp3;
//     }
// }
// console.log(final)

// #12

// let input = (Math.floor(Math.random() * 10) + 1);
// let final = "";
// let temp = 0;
// let temp2 = 0;
// let count = 0;
// console.log(`Input - ${input}`);
// console.log();

// for(let i = 0; i <= input; i++){
//     temp = i;
//     final = "";
//     count = 0;
//     while(count <= input){
//         if(temp > 0){
//             final = final += temp
//             final = final += " "
//             temp--
//             count++
//         }else if(temp == 0){
//             final = final += temp
//             final = final += " "
//             temp--
//             count++
//             temp2 = 1
//         }else{
//             final = final += temp2
//             final = final += " "
//             count++
//             temp2++
//         }
//     }
//     console.log(final)
// }