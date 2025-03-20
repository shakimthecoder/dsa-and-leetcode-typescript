// Write a function that accepts a string. The function should capitalize the first letter of every string then return the capitalized string
// ex "hello world" => "Hello World"

export default function Capitalize(str: string): string {
    const words = str.split(''); 
    let result: string[] = [];
    for(let word of words){
        result.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join("");
}

export function Capital(str: string): string {
    const words = str.split('');
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join('');
}