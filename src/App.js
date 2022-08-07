import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

import React,{useState} from 'react';
import {
  
  Route,
  Routes}
  from "react-router-dom";

import Alert from './Components/Alert';

function App() {
const [mode,setMode] = useState('light')

const [alert,setAlert] = useState(null)


const toggleMode = () =>{
if(mode === 'light'){
setMode('dark')
console.log(mode)
document.body.style.backgroundColor = 'grey'
document.title = 'textUtils - Dark Mode'
showAlert("dark mode on","success")
}
else{
  console.log(mode)
setMode('light')
document.body.style.backgroundColor = 'white'
document.title = 'textUtils - Light Mode'
showAlert("light mode on","success")
}
}


const showAlert = (message,type) => {
  setAlert({
    msg:message ,
    type : type
  })

  setTimeout(
    ()=>{
      setAlert(null);
    },2000
  );
}

  return (
   <>
   <Navbar title="Text Analyzer" mode ={mode}  toggleMode = {toggleMode} />
   <Alert alert={alert}/>
   <div className='container my-3'>
  
   <Routes>
<Route  path="/about"  element={<About/> }/>
<Route  path="/" element={<TextForm heading = "Enter the text to analyze" mode={mode} alert={alert} showAlert2={showAlert}/>
 }/>

   </Routes>
   

   </div>
   
   </>
  );
}

export default App;
