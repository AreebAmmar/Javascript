const readline = require("readline-sync");
let n=readline.question("Enter Number");
// For Loop
let sum=0
for (let i = 0; i < n; i++) {
    sum+=(i+1)
}
console.log("Sum for the",n,"is",sum)


// while loop
i=0
while(i<n){
    console.log(i)
    i++
}


// do while loop
i=0
do{
console.log(i)
i++
}while(i<n)