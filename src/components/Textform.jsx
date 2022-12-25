import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('')
    const convertToUpperCase = () => {
        var newText = text;
        setText(newText.toUpperCase());
        props.showAlert("Converted to Upper Case", "success")
    }
    const convertToLowerCase = () => {
        var newText = text;
        setText(newText.toLowerCase());
        props.showAlert("Converted to Lower Case", "success")
    }
    const convertToToggleCase = () => {
        var newText = text;
        var words = '';
        //console.log(newText.split(" ").filter(o=>o).map(o=>o.charAt(0).toLowerCase + o.substring(1, o.length).toUpperCase));
        //console.log(newText);
        newText.split(" ").forEach(word => {
            if (word.length===1) {
                words += word.toLowerCase() + " ";
            }
            else {
                words += word.charAt(0).toLowerCase() + word.substring(1, word.length).toUpperCase() + " ";
            }
        })
        //console.log(words);
        setText(words);
        props.showAlert("Converted to Toggle Case", "success")
    }
    const clearText = () => {
        var newText = '';
        setText(newText);
        props.showAlert("Text is cleared", "success")
    }
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }
    const countVowels = (count) => {
        var newText = text;
        // var count = 0;
        newText.split("").forEach(char => {
            if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
                count ++;
            }
        })
        return count;
    }
    const countConsonants = (count) => {
        var newText = text;
        // var count = 0;
        newText.split("").forEach(char => {
            if (!(char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U' || char === ' ')) {
                count ++;
            }
        })
        return count;
    }

    const copyToClipboard = () => {
        // Copy the text inside the text field
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleExtraSpaces = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>{props.title}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" placeholder='Enter Text' value={text} style={{backgroundColor : props.mode==='dark'?'#042743':'white', color : props.mode==='dark'?'white':'black'}} onChange={onChangeHandler} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={convertToUpperCase}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={convertToLowerCase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={convertToToggleCase}>Convert to ToggleCase</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-2' onClick={copyToClipboard}>Copy to Clipboard</button>
        <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
        
        
    </div>
    <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary Here :</h2>
        <p>Your Text has {text.split(" ").filter(o=>o).length} words and {text.length} characters</p>
        <p>You will finish reading it in {0.005 * text.split(" ").filter(o=>o).length} minutes</p>
        <p>Your Text has {countVowels(0)} vowels and {countConsonants(0)} consonants</p>
        <h2>Preview :</h2>
        <p>{text}</p>
    </div>
    </>
  )
}