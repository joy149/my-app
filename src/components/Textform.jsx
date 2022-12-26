import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState('')
    const convertToUpperCase = () => {
        var newText = text;
        if (text.length!==0) {
            setText(newText.toUpperCase());
            props.showAlert("Converted to Upper Case", "success");
        }
        else {
            props.showAlert("Please enter text to analyze", "warning");
        }
    }
    const convertToLowerCase = () => {
        var newText = text;
        if (text.length!==0) {
            setText(newText.toLowerCase());
            props.showAlert("Converted to Lower Case", "success");
        }
        else {
            props.showAlert("Please enter text to analyze", "warning");
        }
    }
    const convertToToggleCase = () => {
        var newText = text;
        var words = '';
        //console.log(words);
        if (text.length!==0) {
            newText.split(" ").filter(o=>o).forEach(word => {
                if (word.length===1) {
                    words += word.toLowerCase() + " ";
                }
                else {
                    words += word.charAt(0).toLowerCase() + word.substring(1, word.length).toUpperCase() + " ";
                }
            })
            setText(words);
            props.showAlert("Converted to Toggle Case", "success");
        }
        else {
            props.showAlert("Please enter text to analyze", "warning");
        }
    }
    const clearText = () => {
        var newText = '';
        if (text.length!==0) {
            setText(newText);
            props.showAlert("Cleared Text", "success");
        }
        else {
            props.showAlert("No Text to clear", "warning");
        }
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
        if (text.length!==0) {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard", "success");
        }
        else {
            props.showAlert("Nothing to copy", "warning");
        }
    }
    const handleExtraSpaces = () => {
        var newText = text.split(/[ ]+/);
        if (text.length!==0) {
            setText(newText.join(" "));
            props.showAlert("Extra Spaces Removed", "success");
        }
        else {
            props.showAlert("Kindly provide the text to remove spaces", "warning");
        }
    }
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>{props.title}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" placeholder='Enter Text' value={text} style={{backgroundColor : props.mode==='dark'?'#042743':'white', color : props.mode==='dark'?'white':'black'}} onChange={onChangeHandler} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={convertToUpperCase}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={convertToLowerCase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={convertToToggleCase}>Convert to ToggleCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-1 my-1' onClick={copyToClipboard}>Copy to Clipboard</button>
        <button className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear Text</button>
        
        
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