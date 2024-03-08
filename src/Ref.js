

import { useRef, useState } from "react"
import { useEffect } from "react";


const Ref=()=>{

    const [name,setName]=useState("")
    // const [renderCount,setRenderCount] = useState(0)

const reference = useRef()
    console.log(reference,'ref');
    // 
    const focus=()=>{
        reference.current.focus()
    }


    return(
        <>
        <input ref={reference } value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={focus}>Focus</button>
        
        <div>My name is {name}</div>
        <div>UI is rendered {reference.current}</div>
        
        
        </>
    )
}
export default Ref;