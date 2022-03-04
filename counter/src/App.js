// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from "./counter/counter.jsx"

function App() {
//   const [counter , setcounter] = React.useState(0)
//   // react.usestate => [value , function to update value or set value]
//  const handleincrement = (value) =>{
//    setcounter(counter+value)
//  }
//  const handledecrement = (value) =>{
//    setcounter(counter-value)
//  }

  return (
    <div className="App">
    <Counter/>
    </div>
  );
}

export default App;
