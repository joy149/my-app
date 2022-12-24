import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('')
    const convertToUpperCase = () => {
        var newText = text;
        setText(newText.toUpperCase());
    }
    const convertToLowerCase = () => {
        var newText = text;
        setText(newText.toLowerCase());
    }
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

  return (
    <>
    <div className='container'>
        <h2>{props.title}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" placeholder='Enter Text' value={text} onChange={onChangeHandler} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={convertToUpperCase}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={convertToLowerCase}>Convert to Lowercase</button>
    </div>
    <div className='container my-3'>
        <h2>Your Text Summary Here :</h2>
        <p>Your Text has {text.split(" ").filter(o=>o).length} words and {text.length} characters</p>
        <p>You will finish reading it in {0.005 * text.split(" ").filter(o=>o).length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}