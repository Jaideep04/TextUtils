import React, { useState } from 'react';

export default function TextForm(props) {
    const [Text, setText] = useState('Enter Text Here');
    const [isBold, setBold] = useState(false);
    const [isItalic, setItalic] = useState(false);
    const [isUnderline, setUnderline] = useState(false);

    const handleOnChange = (event) => {
        console.log("handleOnChange");
        setText(event.target.value);
    }

    function Bold() {
        setBold(!isBold);
    }

    function Italic() {
        setItalic(!isItalic);
    }

    function Underline() {
        setUnderline(!isUnderline);
    }

    const handleUpClick = () => {
        console.log("Upper Case Was Clicked");
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into UpperCase", "success");
    }

    const handleLoClick = () => {
        console.log("Lower Case Was Clicked");
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into LowerCase", "success");
    }

    const handleClClick = () => {
        console.log("Clear Was Clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy = () => {
        console.log("Copy Was Clicked");
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");
    }

    const handleRemoveWhiteSpace = () => {
        console.log("Remove White Space Was Clicked");
        let newText = Text.replace(/\s+/g, '');
        setText(newText);
        props.showAlert("Whitespace Removed", "success");
    }

    const textareas = {
        fontWeight: isBold ? "bold" : "normal",
        fontStyle: isItalic ? "italic" : "normal",
        textDecoration: isUnderline ? "underline" : "none"
    };

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : '#e0e0e0', color: props.mode === 'dark' ? '#e0e0e0' : 'black', ...textareas }} id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveWhiteSpace}>Remove Space</button>
                <button className="btn btn-primary mx-2" onClick={Bold}>Bold</button>
                <button className="btn btn-primary mx-2" onClick={Italic}>Italic</button>
                <button className="btn btn-primary mx-2" onClick={Underline}>Underline</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? '#e0e0e0' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{Text.split(/\s+/).filter((word) => word.length > 0).length} words and {Text.length} characters</p>
                <p>It will take {0.08 * Text.split(/\s+/).filter((word) => word.length > 0).length} minutes to read.</p>
                <h3>Preview</h3>
                <p>{Text}</p>
            </div>
        </>
    );
}
