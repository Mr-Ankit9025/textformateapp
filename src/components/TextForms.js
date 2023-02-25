import React, {useState} from 'react'

export default function TextForms(props) {
  
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Given text is transformed in uppercase", "primary")
  }
  const handleDownClick =() =>{
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Given text is transformed in lowercase", "warning")
  }
  const handleCopyText =() =>{
    var txt = document.getElementById("myBox")
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Text has been cpied to your clipboard", "success")
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success")
  }
  const handleOnChange =(event) =>{
    setText(event.target.value)
  }
  const [text, setText] = useState('')
  
  return (
    <>
   <div className='container'>
 <h1 className='my-4' style={{color: props.mode ==='dark' ?'white' : 'black'}}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark' ?'grey' : 'white', color: props.mode ==='dark' ?'white' : 'black'}}></textarea> 
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick} style={{color: props.mode ==='dark' ?'white' : 'black'}}>Convert to uppercase</button>
<button className='btn btn-warning mx-2' onClick={handleDownClick} style={{color: props.mode ==='dark' ?'white' : 'black'}}>Convert to lowercase</button>
<button className='btn btn-success mx-2' onClick={handleCopyText} style={{color: props.mode ==='dark' ?'white' : 'black'}}>CopyText</button>
<button className='btn btn-success mx-2' onClick={handleExtraSpaces} style={{color: props.mode ==='dark' ?'white' : 'black'}}>Remove Extra Space</button>
   </div>
   <div className="container my-4">
    <h3 className='fw-bold' style={{color: props.mode ==='dark' ?'white' : 'black'}}>Your text summary </h3>
    <p style={{color: props.mode ==='dark' ?'white' : 'black'}}>{text.split(' ').length} words and {text.length} character </p>
    <p style={{color: props.mode ==='dark' ?'white' : 'black'}}>It takes {0.008 * text.split('').length} minutes to read.</p>
    <h3 className='fw-bold' style={{color: props.mode ==='dark' ?'white' : 'black'}}>Preview</h3>
    <p style={{color: props.mode ==='dark' ?'white' : 'black'}}>{text.length>0?text : 'Enter something in the textbox to preview it here'}</p>
   </div>
    </>
  )
}
