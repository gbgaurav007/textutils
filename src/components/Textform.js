import React, { useState, useEffect } from "react";
// import axios from "axios";

export default function Textform(props) {
  const handleUp = () => {
    console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };

  const handleLow = () => {
    console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };

  const handleClear = () => {
    console.log("button clicked");
    setText("");
    props.showAlert("Text Cleared","success");
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "hi-IN";
    window.speechSynthesis.speak(msg);
    props.showAlert("Audio is activated","success");
  };

  const handleCopy = () => {
    // let t=document.getElementById("exampleFormControlTextarea1");
    // t.select();
    // navigator.clipboard.writeText(t.value);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
  };

  const handleSpaces = () =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }












//   const handleHindi = () => {
//     axios
//       .post(`https://libretranslate.de/detect`, {
//         q: text,
//       })
//       .then((response) => {
//         setdetectedLanguageKey(response.data[0].language);
//       });
//   };

//   useEffect(() => {
//     axios.get(`https://libretranslate.de/languages`)
//     .then((response) => {
//      setLanguagesList(response.data)
//     })

//     getLanguageSource()
//  }, [text]);

//   const languageKey = (selectedLanguage) => {
//     setLanguageKey(selectedLanguage.target.value);
//   };

//   const translateText = () => {
//     getLanguageSource();

//     let data = {
//       q: text,
//       source: detectLanguageKey,
//       target: selectedLanguageKey,
//     };
//     axios.post(`https://libretranslate.de/translate`, data).then((response) => {
//       setText(response.data.translatedText);
//     });
//   };










  const handleOnChange = (event) => {
    console.log("changed");
    setText(event.target.value);
  };











  const [text, setText] = useState("Enter text here");
  const [detectLanguageKey, setdetectedLanguageKey] = useState("");
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
 
  return (
    <>
      <h1> {props.heading}</h1>
      <div className="container">
        <h1>TEXTVERT-Text Converter</h1>
        <div className="mb-3">
          <textarea
            className="form-control" 
            // style={{backgroundColor: props.mode==='light'?'white':'#93B1A6' , color: props.mode==='light'?'black':'#FAF1E4'}}
            style={{backgroundColor:props.col==='blue'?'#3faae8e7': (props.col==='grey'?'#5C5470': props.col==='red'?'#EF9595':props.col==='yellow'?'#FFB000':props.mode==='light'?'white':'#93B1A6') , color: props.mode==='light'?'black':'#FAF1E4'}}
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-secondary mx-2" style={{backgroundColor: props.col==='grey'?'#5C5470': (props.col==='red'?'#EF9595':props.col==='yellow'?'#FFB000':'#0d6efd') ,borderColor: props.col==='grey'||"red"?'black':'blue'}} onClick={handleUp}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" style={{backgroundColor: props.col==='grey'?'#5C5470':
        (props.col==='red'?'#EF9595': props.col==='yellow'?'#FFB000':'#0d6efd') , borderColor: props.col==='grey'||"red"?'black':'blue'?'black':'blue'}} onClick={handleLow}>
          {" "}
          Convert To Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" style={{backgroundColor: props.col==='grey'?'#5C5470':(props.col==='red'?'#EF9595':props.col==='yellow'?'#FFB000':'#0d6efd') , borderColor: props.col==='grey'||"red"?'black':'blue'?'black':'blue'}} onClick={handleClear}>
          {" "}
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" style={{backgroundColor: props.col==='grey'?'#5C5470':(props.col==='red'?'#EF9595':props.col==='yellow'?'#FFB000':'#0d6efd') , borderColor: props.col==='grey'||"red"?'black':'blue'?'black':'blue'}} onClick={handleSpeak}>
          {" "}
          Speak
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" style={{backgroundColor: props.col==='grey'?'#5C5470':(props.col==='red'?'#EF9595':props.col==='yellow'?'#FFB000':'#0d6efd') , borderColor: props.col==='grey'||"red"?'black':'blue'?'black':'blue'}} onClick={handleCopy}>
          {" "}
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" style={{backgroundColor: props.col==='grey'?'#5C5470':(props.col==='red'?'#EF9595':props.col==='yellow'?'#FFB000':'#0d6efd') , borderColor: props.col==='grey'||"red"?'black':'blue'?'black':'blue'}} onClick={handleSpaces}>
          {" "}
          Remove Extra Spaces
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={handleHindi}>
          {" "}
          Translate To Hindi
        </button> */}
        {/* <select className="language-select mx-2">
          <option>Please Select Language</option>
          {languagesList.map((language) => {
            return <option value={language.code}>{language.name}</option>;
          })}
        </select> */}
      <div className="conatiner my-4">
        {/* <pre> */}
          <h2>
            {" "}
            Your Text Summary :
             {/* {text.length<=0?"0":String(text.trim()).split(" ").length}  */}
             {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
            words and{" "}
            {text.length} characters{" "}
          </h2>
          <h3> Time to read text : {text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} min </h3>
          <h4> Preview :</h4>
          <p>  {text.length>0?text:"Enter Something in the textbox"}</p>

        {/* </pre> */}
      </div>
      </div>
    </>
  );
}
