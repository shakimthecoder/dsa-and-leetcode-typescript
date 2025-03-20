// Given a string, return the character most commonly used in the string.

/*export default function maxChar(str: string): string {
    const charMap: any = {};
    let max = 0;
    let maxChar =''
    for(let char of str){
        if(charMap[char]){
            charMap[char] = charMap[char] + 1;
        }
        else {
            charMap[char] = 1;
        }
    for(let key in charMap){
        if(charMap[key] > max){
            max = charMap[key];
            maxChar = key;
        }
    }      

    return charMap;
    */