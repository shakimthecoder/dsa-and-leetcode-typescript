// Given a string return a new string with the reversed order of characters
// ex "hello" => "olleh"

export default function reverseInteger(n: number | string ): any {
    let reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(Number(n));
}
 // Example 1
 export function reverse(str: string): string {
    let reverse = "";
    for(let i = 0; i < str.length; i++) {
        reverse = str[i] + reverse;
    }
    return reverse;
}

// Example with char

export function reverseStr(str: string): string {
    let reversed = "";
    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// Example with chaining, split, and join

export function reverseString(str: string): string {
    return str.split("").reverse().join("")
}

