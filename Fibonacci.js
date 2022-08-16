let fib1 = 0, fib2 = 1 , nextNr;
let fibArray = [];
let fibString = "";

for(let i = 1; i <= 10000; i++) {
    fibArray[i] = fib1;
    nextNr = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextNr; 
}

const inputNumber = parseInt(prompt('Enter a number: '));
if (fibArray.includes(inputNumber) === true){
    fib1 = inputNumber;
}
else {
    var closestNr = 
        fibArray.reduce(function(prev, curr){
            return (Math.abs(curr - inputNumber) < Math.abs(prev - inputNumber) ? curr : prev)
        });
    fib1 = closestNr;
};

let fibIndex = fibArray.indexOf(fib1) + 1;
for (let i = 1; i <= 5; i++) {
    if (i === 5) {
        fibString = fibString.concat(fibArray[fibIndex]);
    } else{ 
    fibString = fibString.concat(fibArray[fibIndex] + ",  ");
    fibIndex++;
    }
}
console.log(fibString);
