import React,{useState}from "react";



export const InputComponents = ()=>{
    const [text,setText] = useState("");

    return (
    <div id="inputText">
        <label>Enter your name:</label><br/>
        <input type="text" onChange={(e)=>{
            setText(e.target.value);
            
        }}>
            
        </input>
        {text && <h2>Hello {text}</h2>}
    </div>
    )
}

export default InputComponents;
