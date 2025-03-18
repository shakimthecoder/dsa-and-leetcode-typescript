import { useState } from 'react'
import './App.css'
import Reverse, { reverseStr, reverseString } from './algorithms/reverse';

function App() {
 const string = Reverse("Shakim");
 console.log(string);

 reverseString("Millions");
 console.log(reverseString("Millions"));

 reverseStr("News");
 console.log(reverseStr("News"));

}
export default App
