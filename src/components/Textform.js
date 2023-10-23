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
        // console.log("Upper case button was clicked")
        // settext("hello bhai rahul bhai")
        const newtext = text.toLowerCase();
        settext(newtext)
        props.setAlert("Converted to Lowercase ! ","success")
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
                <div className="mb-3">
                    <textarea className="form-control" style={props.mystyle1} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="12"></textarea>
                </div>
                <button className="btn btn-danger" onClick={handleonclickUpper}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-danger mx-3" onClick={handleonclickLower}>
                    Convert to Lowercase
                </button>
            </div>
            <div className="container" style={props.mystyle1}>
                <h4 className="my-3">
                    Your text summary
                </h4>
                <p>Total words: {text.split(" ").length}& The total characters: {text.length} </p>
                <h4>
                    Your content preview
                </h4>
                <p>{text}</p>
            </div>
        </>
    )
}
