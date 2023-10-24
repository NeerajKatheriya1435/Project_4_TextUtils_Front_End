import React, { useState } from 'react';
export default function Textform(props) {
    const handleonclickUpper = () => {
        // console.log("Upper case button was clicked")
        // settext("hello bhai rahul bhai")
        const newtext = text.toUpperCase();
        settext(newtext)
        props.setAlert("Converted to Uppercase ! ","success")
    }
    const handleonclickLower = () => {
        const newtext = text.toLowerCase();
        settext(newtext)
        props.setAlert("Converted to Lowercase ! ","success")
    }
    const handleonclickCopy = () => {
        const text =document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.setAlert("Copied to Clipboard ! ","success")
    }
    const handleonclickClear = () => {
        const newtext = "";
        settext(newtext)
        props.setAlert("Cleared Text ! ","success")
    }
    const handleonclickExspace = () => {
        const newtext = text.split(/[ ]+/)
        settext(newtext.join(" "))
        props.setAlert("Cleared Extra spaces ! ","success")
    }
    const handleonchange = (event) => {
        // console.log("clicked button")
        settext(event.target.value)
    }
    const [text, settext] = useState("");
    return (
        <>
            <div className="container" >
                <h1 style={props.mystyle1}>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control" style={props.mystyle1} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="12"></textarea>
                </div>
                <button disabled={(text.length===0)} className="btn btn-danger mx-2 my-2" onClick={handleonclickUpper}>
                    Convert to Uppercase
                </button>
                <button disabled={(text.length===0)} className="btn btn-danger mx-2 my-2" onClick={handleonclickLower}>
                    Convert to Lowercase
                </button>
                <button disabled={(text.length===0)} className="btn btn-danger mx-2 my-2" onClick={handleonclickCopy}>
                    Copy Text
                </button>
                <button disabled={(text.length===0)} className="btn btn-danger mx-2 my-2" onClick={handleonclickClear}>
                    Clear Text
                </button>
                <button disabled={(text.length===0)} className="btn btn-danger mx-2 my-2" onClick={handleonclickExspace}>
                    Remove Extra Space
                </button>
            </div>
            <div className="container" style={props.mystyle1}>
                <h4 className="my-2">
                    Your text summary
                </h4>
                <p>Total words: {text.split(" ").filter((element)=>{return element.length!==0}).length} & The total characters: {text.length} </p>
                <h4>
                    Your content preview
                </h4>
                <p>{text}</p>
            </div>
        </>
    )
}
