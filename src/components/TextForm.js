import React, { useState } from 'react'
//useState is a Hook concept. With the help of this we can use functions like classes.


export default function TextForm(props) {
    //Concept of Hook.
    const [Text, setText] = useState('Enter Text Here');


    //Function to convert into upper case.
    const handleUpClick=()=>{
        console.log("Upper Case Was Clicked");
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted into UpperCase","success");
    }

     //Function to convert into Lower case.
     const handleLoClick=()=>{
      console.log("Lower Case Was Clicked");
      let newText = Text.toLowerCase();
      setText(newText)
      props.showAlert(" Converted into LowerCase","success");
    }

  //Function to clear Text
  const handleClClick=()=>{
    console.log("clear Was Clicked");
    let newText = " ";
    setText(newText)
    props.showAlert(" Text cleared !","success");
  }

  //Function to copy text
  const handleCopy=()=>{
    console.log("Copy Was Clicked");
    var Text =document.getElementById("My Box");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert(" Text Copied !","success");
  }

  
  //onChange is used for event handling without this we can not change default text.
  const handleOnChange=(event)=>{
      console.log("handleOnChange");
      setText(event.target.value);
  }


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? '#e0e0e0': 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={Text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': '#e0e0e0',
      color: props.mode==='dark'? '#e0e0e0': 'black'}} id="My Box" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? '#e0e0e0' : 'black'}}>
  <h2>Your Text Summary</h2>
  <p>{Text.split(/\s+/).filter((word) => word.length > 0).length} words and {Text.length} characters</p>
  <p>It will take {0.08 * Text.split(/\s+/).filter((word) => word.length > 0).length} minutes to read.</p>
  <h3>Preview</h3>
  <p>{Text}</p>
</div>

    </>
  )
}
