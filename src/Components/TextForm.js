import React,{useState} from 'react'

export default function TextForm(props) {

  const[text,setText] = useState('Enter text here');
  
  const handleUpClick =  () =>{
  console.log("to uppercase")
  let newText = text.toUpperCase()
  setText(newText)
  props.showAlert2("converted to uppercase","success")
  } 

  const handleDownClick =  () =>{
    console.log("to uppercase")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert2("converted to lowercase","success")
    } 
  const handleOnChange =  (event) =>{
    console.log(text)
    
    setText(event.target.value)
  } 
  const handleClearClick =  () =>{
   // console.log("to uppercase")
    let newText = ""
    setText(newText)
    props.showAlert2("text cleared","success")
     
    } 

    const handleCopyClick =  () =>{
      console.log("copying")
      var text = document.getElementById('myBox')
      navigator.clipboard.writeText(text.value)
      props.showAlert2("copied to clipboard","success")
     
      } 
      
    const handleExtraSpaceClick = () =>{
      let newText = text.split(/[  ]+/)
      setText(newText.join(" "))
      props.showAlert2("Extra space removed","success")
     
    }
  
  return (
    <div>
    <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
  
   
    <h1>{props.heading}</h1>
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <div className="mb-3" >
  <textarea className="form-control" id="myBox" rows="2" value={text} style={{backgroundColor : props.mode ==='light'?'white':'grey' , color : props.mode === 'dark'?'white':'black'}} onChange={handleOnChange}></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to uppercase</button>
  <button className='btn btn-primary mx-2' onClick={handleDownClick} >Convert to lowercase</button>
  <button className='btn btn-primary mx-2' onClick={handleClearClick} >Clear text</button>
  <button className='btn btn-primary mx-2' onClick={handleCopyClick} >Copy text</button>
  <button type='button' className='btn btn-primary mx-2' onClick={handleExtraSpaceClick} >Remove Extra space</button>

</div>

<div className='container my2' style={{color : props.mode === 'dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words , {text.length} characters</p>
  <p>{text.split(" ").length*0.08} minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"enter something in textbox to preview"}</p>
</div>
</div>
  );
}
