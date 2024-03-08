import { useState } from "react";

const ParentText = () =>{
    const[text,setText] = useState("______")

    const ChangeText = (data)=>{
        setText(data)

    }
    return(
        <div>
            <p>Parent Component</p>
            <p>{text}</p>
            < ChildFunction UpdateParentProb = {ChangeText}/>
        </div>
    )
}

const ChildFunction = ({UpdateParentProb})=>{
    const [childText,setchildText] = useState("")

    const sendDataToParent=()=>{
        UpdateParentProb(childText)
    }

    return(
        <div>
            Child Component
            <input type="text" value={childText} onChange={(e)=>setchildText(e.target.value)}></input>
            <button onClick={()=>sendDataToParent()}>send data</button>
        </div>
        
    )   
}
export default ParentText;
