import  {useState}  from "react" ;
 
function Counter(){
    const [counter , setcounter] = useState(0)

const handleChange =(value)=>{
    
        setcounter(counter + value)
}
const double =(value)=>{
    
    setcounter(counter * value)
}
const half =(value)=>{
    
    setcounter(counter / value)
}
    return (
        <div>
          <h1>counter : {counter}</h1>
          <button onClick ={()=>{handleChange(1)}}>increment</button>
          <button onClick ={()=>{handleChange(-1)}}>decrement</button>
          <button onClick ={()=>{double(2)}}>double</button>
          <button onClick ={()=>{half(2)}}>half</button>
          
        </div>
    )
}
export default Counter