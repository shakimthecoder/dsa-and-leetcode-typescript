import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reverse from './algorithms/reverse';

function App() {
 const string = Reverse("Shakim");
 console.log(string);

}
export default App
