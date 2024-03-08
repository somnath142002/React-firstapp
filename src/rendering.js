import { useState } from "react"
import ChildComponentRender from "./ChildComponentRender"

const Rendering=()=>{
    const [count,setCount]=useState(0)
    console.log("Render parent comnent")
    return(
        <>
        count:{count}<br/>
        Parent component
        <button onClick={()=>setCount(count+1)}>Submit</button>
        <br/>
        <ChildComponentRender/>
        
        
        </>
    )
}
export default Rendering;
