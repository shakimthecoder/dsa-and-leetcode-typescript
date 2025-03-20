// Check to see if two provided strings are anagrams of each other. An anagram is valid if two strings have the same characters in the same quantity
// ex "anagram" and "nagaram" are valid anagrams        

export default function anagram(str1: string, str2: string): boolean {
  const sort1 = str1.split("").sort().join("");
  const sort2 = str2.split("").sort().join("");

  if(sort1 === sort2){
    return true;
  } else 
    return false;
}

function charMap(str: string): any {
    let charmap: any = {};
    str = str.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
    for(let char of str){
        charmap[char] = ++charmap[char] || 1;
    }
    return charmap;
}

export function anagram2(strA: any, strB: any): any {
    // Build charmap for stringA
const charMapA = charMap(strA);
   
const charMapB = charMap(strB);
    // compare charMaps
    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
    for(let key in charMap){
        if(charMapA[key] !== charMapB[key]) return false;
    }
   return true;

}
// O(N) solution