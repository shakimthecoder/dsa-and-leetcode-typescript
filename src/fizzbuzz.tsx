// Write a program that console logs all numbers from 1 to n. But for multiples of 3 print fizz instead of the number and for   multiples of 5 print buzz. For numbers which are multiples of both three and five print fizzbuzz.   

// For example, if n is 15, the program should print: fizz buzz

export default function fizzbuzz(n: number) : void {
    for(let i=1; i < n; i++){
        if (i%3 === 0 && i%5 === 0) {
            console.log("fizzbuzz");
        }
        else if (i%3 === 0) {
            console.log("fizz");
        }
        else if(i%5 === 0) {
            console.log("buzz");
        }
    
    }
}