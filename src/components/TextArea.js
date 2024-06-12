import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from "copy-to-clipboard";

export default function TextArea(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.displayAlert("Changed to Uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.displayAlert("Changed to Lowercase", "success");
    }

    const handleOnTextChange = (e) => {
        setText(e.target.value);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const textReplicate = () => {
        let newText = text + " ";
        setText(newText + text);
        props.displayAlert("Text Got replicated", "success");
    }

    const InvertText = () => {
        let newText = text;
        let modifiedText = newText.split("").map(i => {
            if (i === i.toUpperCase()) {
                i = i.toLowerCase();
            }
            else {
                i = i.toUpperCase();
            }
            return i;
        })
        setText(modifiedText.join(""));
        props.displayAlert("Text Inverted", "success");
    }

    const handleCopyClick = () => {
        copy(text);
        props.displayAlert("Copied Text", "success");
    };

    const wordCounter = () => {
        if (text === "") {
            return 0;
        }
        else {
            let wordCount = 0;
            for (let line of text.split("\n")) {
                for (let word of line.split(" ")) {
                    if (word !== "") {
                        wordCount++;
                    }
                }
            }
            return wordCount;
        }
    }

    return (
        <div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3>{props.heading}</h3>
                <div className="mb-3 my-3">
                    <textarea
                        className="form-control" id="mybox" style={{ backgroundColor: props.mode === "dark" ? "#161b22" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={handleOnTextChange} value={text} rows="8" placeholder='Enter your text here' />
                </div>
                <button className={`btn btn-${props.mode === "light" ? "info" : "primary"} my-2`} disabled={text.length === 0} onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className={`btn btn-${props.mode === "light" ? "info" : "primary"} mx-2 my-2`} disabled={text.length === 0} onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className={`btn btn-${props.mode === "light" ? "info" : "primary"} my-2`} disabled={text.length === 0} onClick={textReplicate}>
                    Replicate Text
                </button>
                <button className={`btn btn-${props.mode === "light" ? "info" : "primary"} mx-2 my-2`} disabled={text.length === 0} onClick={InvertText}>
                    Invert Text
                </button>
                <button className={`btn btn-${props.mode === "light" ? "info" : "primary"} my-2`} disabled={text.length === 0} onClick={handleClearClick}>
                    Clear
                </button>
                <button className={`btn btn-${props.mode === "light" ? "info" : "primary"} mx-2 my-2`} disabled={text.length === 0} onClick={handleCopyClick}>
                    Copy Text
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Your text Summary</h2>
                <p>{wordCounter()} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((ele) => { return ele.length !== 0 }).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </div>
    );
}

TextArea.propTypes = {
    heading: PropTypes.string.isRequired
};
