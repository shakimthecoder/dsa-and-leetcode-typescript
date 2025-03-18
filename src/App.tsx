import { useState } from 'react'
import './App.css'
import Reverse, { reverseStr, reverseString } from './algorithms/reverse';
import Palindrome from './algorithms/palindrome';

function App() {
 const string = Reverse("Shakim");
 console.log(string);

 reverseString("Millions");
 console.log(reverseString("Millions"));

 reverseStr("News");
 console.log(reverseStr("News"));

}

Palindrome("kayak");
console.log(Palindrome("kayak"));
export default App
