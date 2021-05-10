// Fibonacci Series
// var i=0;
// var j=1;
// while (i<=100){
//     console.log(i)
//     console.log(j)
//     i=i+j
//     j=j+i
// };

// Armstrong number
// var readlineSync = require("readline-sync");
// let num=readlineSync.question("Enter the number");
// var sum=0;
// var temp=num;
// while (temp>0){
//     var digit=temp%10;
//     sum=sum+digit**3;
//     temp=Math.floor(temp/10);
// }
// if (num==sum){
//     console.log("It is an armstrong number")}
// else{
//     console.log("It is not an armstrong number")}

// Factorail Number
// var readlineSync = require("readline-sync");
// var num=Number(readlineSync.question("Enter the number"));
// var fac = 1;
// while(num>0){
//     fac = fac * (num);
//     num--;
// }
// console.log(fac);

// Factor Number
// var readlineSync = require("readline-sync");
// var num=Number(readlineSync.question("Enter the number"));
// var counter=1;
// while (counter<=100){
//     if (num%counter==0){
//         console.log(counter)}
//     counter+=1}

// Guessing game
// var readlineSync = require("readline-sync");
// var counter=1;
// let num=Math.floor(Math.random()*101);
// while (counter<=10){
//     var guess=readlineSync.question("Enter your guess\n")
//     if (guess==num){
//         console.log("Your guess is right,You won\n");
//         break
//     }
//     else if(guess>num){
//         console.log("Too high.Try Again\n");
//     }
//     else{
//         console.log("Too low.Try Again\n");
//     }
//     counter++
// }

// Table
// var readlineSync = require("readline-sync");
// var start=Number(readlineSync.question("Enter number from where you want to start the table"));
// var end=Number(readlineSync.question("Enter number from where you want to end the table"));
// while (start<=end){
//     i=1
//     while (i<=10){
//         console.log(start, '*' ,i,"=",start*i)
//         i+=1}
//     start+=1
//     console.log(".................")
// }

// Sum of numbers from 1 to 100
// var counter=1;
// var sum = 0;
// while(counter<=100){
//     sum+=counter;
//     counter++
// }
// console.log(sum);