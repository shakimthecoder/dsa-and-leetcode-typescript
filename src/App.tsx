import { useState } from 'react'
import './App.css'
import Reverse, { reverseStr, reverseString } from './algorithms/reverse';
import Palindrome from './algorithms/palindrome';
import maxChar from './algorithms/maxchar';
import Chunk from './algorithms/arraychunk';

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

Chunk([1,2,3,4,5,6,7,8,9], 3);
export default App
