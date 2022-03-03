// import logo from './logo.svg';
import './App.css';

function App() {
 
  // const data = ["google","iphone","mcdonald"];
  const data = [
    {name:"Mobile Operating System" , 
     mobiles:["Android" , "blackberry","iphone","windows"],  
    },
    {name:"Mobile Manufacturers" ,
    mobiles:["Samsung" , "HTC","Micromax","Apple"],
    },
    
    
  ]
  return (
    
  <div>
    <h1 id='head'>React Mobile app</h1>
    {data.map((user) => usercomponent(user))}
    </div>)
 
}

function usercomponent({name,mobiles}){
  return (
  <div>
    <h1 id="mobopr">{name}</h1>
    <div>
     {mobiles.map((e) => (
       <li id="mobname">{e}</li>
     ))}
    </div>
  </div>
  )
}



export default App;
