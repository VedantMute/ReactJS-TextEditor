import React, { useState } from "react";

export default function MainContent(props) {
  const ToUpper = () => {
    setText(text.toUpperCase());
  };
  const ToLower = () => {
    setText(text.toLowerCase());
  };
  const ToClear = () => {
    setText("");
  };
  const ToCopy = () => {
    let copiedtext = document.getElementById("exampleFormControlTextarea1");
    copiedtext.select();
    navigator.clipboard.writeText(copiedtext.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}
  const HandleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <form>
        <div className="form-group mx-5 my-5 ">
          <label htmlFor="exampleFormControlTextarea1">
            <h5 className={props.mode === "dark" ? "text-white" : "text-black"}>Text Editor</h5>
          </label>
          <textarea
            className={`form-control ${
              props.mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Yahan pe kuch likho....."
            value={text}
            onChange={HandleChange}
          />
        </div>
      </form>
    <div className="flex">
    <div><button type="button" onClick={ToUpper} className="btn btn-primary">
        Convert to Uppercase
      </button></div> 
     <div> <button type="button" onClick={ToLower} className="btn btn-primary">
        Convert to Lowercase
      </button></div> 
      <div><button type="button" onClick={ToCopy} className="btn btn-primary">
        Copy Text
      </button></div>
      <div><button type="button" onClick={ToClear} className="btn btn-danger">
        Clear
      </button></div>
      <div><button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button></div>
    </div>

      <div className="mx-5 my-5">
        <p className={props.mode === "dark" ? "text-white" : "text-black"}>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className={props.mode === "dark" ? "text-white" : "text-black"}>
          It will take {0.008 * text.split(" ").length} minutes to read the
          words
        </p>
      </div>
    </>
  );
}
