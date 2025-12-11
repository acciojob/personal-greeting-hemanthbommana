import React,{useState}from "react";



export const InputComponents = ()=>{\
    const [text,setText] = useState("");

    return (<div id="inputText">
        <p>Enter your name:</p>
        <input type="text" onChange={(e)=>
        {
            setText(e.target.value)
            
        }
        }></input>
        <h1>Hello {text}</h1>
        
        

    </div>
    )
}

export default InputComponents;
