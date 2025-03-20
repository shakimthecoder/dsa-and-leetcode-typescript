import { useState } from 'react'
import './App.css'
import Reverse, { reverseStr, reverseString } from './algorithms/reverse';
import Palindrome from './algorithms/palindrome';
import maxChar from './algorithms/maxchar';
import Chunk from './algorithms/arraychunk';
import Capitalize, { Capital } from
  './algorithms/capitalize';
function App() {
 const string = Reverse("Shakim");
 console.log(string);

 reverseString("Millions");
 console.log(reverseString("Millions"));

 reverseStr("News");
 console.log(reverseStr("News"));

}

Palindrome("kayak");
console.log(Palindrome("codingmoney"));
console.log(maxChar("aaajjjjjjjjjlllloooop"));

console.log(Chunk([1,2,3,4,5,6,7,8,9], 3));
console.log(Capitalize("I'm only here until tonight"));
console.log(Capital("I'm only here until tonight"));
export default App
