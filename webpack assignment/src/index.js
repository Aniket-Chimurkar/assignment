

 import "./index.css";   //for this we needto install loaders
//css loaders
//style loader
//    import img from "../gg.png"



const h1 = document.createElement("h1")
h1.textContent = "TODO LIST"
h1.classList.add("redtext")


const inputtag = document.createElement("input")
inputtag.placeholder="ENTER YOUR TASK"

inputtag.setAttribute("id", "demo");

const buttonn = document.createElement("button")
buttonn.textContent="Click Here"
buttonn.addEventListener("click",add)



//   const image = document.createElement("img")
//  image.src = img
document.getElementById("root").append(h1,inputtag,buttonn)

function add(){
    
   var blas = document.getElementById("blas")
   var data = document.getElementById("demo").value
   
console.log(data)
   blas.append(data , count)
   
    
}


