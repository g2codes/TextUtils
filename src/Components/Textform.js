import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("text changed to UPPERCASE");
    let res = text.toUpperCase();
    setText(res);
    props.showAlert("TEXT CHANGED TO UPPERCASE", "success");
  };

  const handleTitleClick = () => {
    // console.log("Running title case function");
    let arr = text.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let res = arr.join(" ");
    setText(res);
    props.showAlert("Text Changed To Title Case", "success");
  };

  const handleLowerClick = () => {
    // console.log("Lower case function running");
    let res = text.toLowerCase();
    setText(res);
    props.showAlert("text changed to lowercase", "success");
  };

  const handleOnChange = (event) => {
    console.log("Handle On Change");
    setText(event.target.value);
  };

  const handleOnClear = () => {
    setText("");
    props.showAlert("Cleared Text", "success");
  };

  const handleOnInverse = () => {
    let str = text.split(" ");
    for (let i = 0; i < str.length; i++) {
      let s = str[i],
        curr = "";
      for (let j = 0; j < s.length; j++) {
        if (s.charAt(j) === s.charAt(j).toUpperCase())
          curr += s.charAt(j).toLowerCase();
        else curr += s.charAt(j).toUpperCase();
      }
      str[i] = curr;
    }
    let res = str.join(" ");
    setText(res);
    props.showAlert("Inversed Case of the text", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <h1
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        {props.heading}
      </h1>
      <div className="mb-3">
        <label htmlFor="inputBox" className="form-label"></label>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="inputBox"
          rows="8"
          placeholder="Enter text here"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleTitleClick}>
        Convert to Title Case
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLowerClick}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-3" onClick={handleOnClear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-3" onClick={handleOnInverse}>
        Inverse Case
      </button>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h4 className="my-3 mx-10">Your Text Summary</h4>
        <p>
          {text.split(" ").length}{" "}
          <i>
            words <b>and </b>
          </i>
          {text.length}
          <i> characters</i>
        </p>
        <p>
          {0.008 * text.split(" ").length}
          <i> Minutes to read</i>
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
