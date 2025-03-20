// Given a string, return true if the value is a palindrome or false if it is not.

export default function Palindrome(str: any): boolean {
    let reversed = str.split("").reverse().join("");
    if (reversed === str) {
        return true;
    } else return false;
}

