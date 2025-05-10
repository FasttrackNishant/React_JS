import React, { useState } from 'react'



export default function Textform(props) {

    const handleUpClick = () => {

        // console.log('upper case is clicked'+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");


    }
    const handleOnChage = (event) => {
        // console.log('on change ');
        setText(event.target.value);

    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);

    }

    const handleCopy = () => {
        console.log("handle copy clicked");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied ", "Success");
    }

    const cleardata = () => {

        let data = document.getElementById("myBox")
        data.value = "";
        props.showAlert("Data Cleared", "success");
       
        


    }
    const removeSpaces = () => {

        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
props.showAlert("Extra Spaces Removed", "success");

    }
    const [text, setText] = useState('');
    // text ="newtext" this is not allowdw 
    // setText("new text");

    return (

        <><div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
            <h1>{props.title}</h1>

            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChage} id="myBox" rows="10"
                    style={
                        {
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }
                    } ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={cleardata} >Clear Data</button>
            <button className="btn btn-primary mx-2" onClick={removeSpaces}> Remove Extra Spaces</button>
        </div>

            <div className="container-lg my-4 rounded" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} word , {text.length} charcter </p>
                <p>Minutes to Read the words :- {0.008 * text.split(" ").length}</p>
                <h3>Preview :-</h3>
                <p>{text.length > 0 ? text : "Type Something to Preview"}</p>
 
            </div>

        </>)
}
