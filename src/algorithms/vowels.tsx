// Write a function that counts the number of vowels in a string
// ex "hello" => 2

export default function Vowels(str: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count: number = 0;
    for (let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count;
}