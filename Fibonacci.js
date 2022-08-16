let fib1 = 0, fib2 = 1 , nextNr=0;
let fibArray = [];
let fibString = "";

const inputNumber = parseInt(prompt('Enter a number: '));

while(fib1<= inputNumber+1){
    let i = 1;
    fibArray[i] = fib1;
    nextNr = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextNr; 
    console.log(fibArray[i]); 
    i++;
}
fib2 = fib1;  

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

for( let i = 1; i <= 5;i++) {
    if (i === 5) {
        fibString = fibString.concat(fib2);
    } else{ 
    fibString = fibString.concat(fib2 + ",  ");    
    nextNr = fib1 + fib2;
    fib1 = fib2;
    fib2 = nextNr; 
}
    }
console.log(fibString);
