import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('Placeholder text')
    const convertToUpperCase = () => {
        var newText = text;
        setText(newText.toUpperCase());
    }
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

  return (
    <div>
        <h2>{props.title}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} onChange={onChangeHandler} rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={convertToUpperCase}>Convert to UpperCase</button>
    </div>
  )
}