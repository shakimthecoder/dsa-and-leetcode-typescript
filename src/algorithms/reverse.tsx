// Given a string return a new string with the reversed order of characters
// ex "hello" => "olleh"

 // Example 1
 export default function reverse(str: string): string {
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
    const strToArray = str.split(''); // Convert string to array
    strToArray.reverse(); // Reverse the array
    return strToArray.join(''); // convert array back to string
}