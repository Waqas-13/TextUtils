import React,{useState}from 'react'

function TextForm(props) {

    const[text,settext] = useState('');
    const[uppercase,setuppercase] = useState(false);
    const wordCount = text.split(/\s+/).filter(word => word !== '').length;
    const charCount = text.replace(/\s/g, '').length;;



    const toupperandlower = ()=>{
        // let newtext = uppercase ?  text.toLowerCase() : text.toUpperCase();

        if(text === text.toUpperCase()){
          settext(text.toLowerCase())
        }
        else{
          settext(text.toUpperCase())
        }

        // settext(newtext);
        // setuppercase(!uppercase);
        props.showalert("text has been to upper and lower",'sucess')
    }
    const tocleartext = ()=>{
      let newtext =('');
      settext(newtext);
      props.showalert("text has been cleared",'sucess')
    }
    const handlespace=()=>{
      let newtext = text.split(/[ ]+/);
      settext(newtext.join(' '))
      props.showalert("space have been removed",'sucess')
    }
    const handleCopyToClipboard = () => {
      // Copy the text to the clipboard
      navigator.clipboard.writeText(text);
      alert('Text copied to clipboard!');
      props.showalert("copy to clipbord",'sucess')
    };
  

// function TextForm(props) {
//     const [text, setText] = useState('');
//     const [isUpperCase, setIsUpperCase] = useState(true);
  
//     const toupperandlower = () => {
//       // Split the text into an array of words
//       const words = text.split(' ');
  
//       // Toggle the case of each word based on the current state
//       const toggledWords = words.map((word) =>
//         isUpperCase ? word.toLowerCase() : word.toUpperCase()
//       );
  
//       // Join the words back together into a single string
//       const newText = toggledWords.join(' ');
  
//       // Update the text and toggle the state
//       setText(newText);
//       setIsUpperCase(!isUpperCase);
//     };

    return (
<>
<div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.Heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text}style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':''}} onChange={(event)=>settext(event.target.value)} rows="8"></textarea>
    <button style={{marginTop:"10px"}} className="btn btn-primary" value={text} onClick={toupperandlower}>Upper & Lower</button>
    <button style={{marginTop:"10px", marginLeft:"5px"}} className="btn btn-primary" value={text}  onClick={tocleartext}>Clear Text</button>
    <button style={{marginTop:"10px", marginLeft:"5px"}} className="btn btn-primary" value={text}  onClick={handlespace}>Remove Space</button>
    <button style={{marginTop:"10px", marginLeft:"5px"}} className="btn btn-primary" value={text} onClick={handleCopyToClipboard}>Copy Text</button>
    {/* <button style={{marginTop:"10px", marginLeft:"5px"}} className="btn btn-primary" value={text} onClick={handleincriment}>incriment</button> */}
    </div>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.summery}</h1>
    <p>{wordCount} word and {charCount} character</p>
    <p>{0.008 * text.split(" ").length} Minutus Read</p>
    <h2>Preview</h2>
    <p>{text}</p>

</div> 
</> 
    )
}

export default TextForm
