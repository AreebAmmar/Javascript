const readline = require("readline-sync");
let age=readline.question("Enter your Age");


//P1
// if(age>10 && age<20){
//     console.log("Your age lies between 10 and 20")
// }
// else{
//     console.log("Your age does not lie between 10 and 20")
// }


// p2
// switch(age){
//     case '12':
//         console.log("Your age is 12")
//         break
//     case '13':
//         console.log("Your age is 13")
//         break
//     case '14':
//         console.log("Your age is 14")
//         break
//     default:
//         console.log("Your age is not special")
// }




// p3 & p4
// let Number=readline.question("Enter Number");
// if(Number%2==0 && Number%3==0)
//     console.log(Number, "is divisible by both 2 and 3")
// else
//     console.log(Number, "is not divisible by both 2 and 3")



console.log("You can", age<18? "Not Dive" : "Drive")