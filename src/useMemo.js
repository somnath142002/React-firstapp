import { useMemo,useState } from "react"

const UseMemo=()=>{
    const [number,setNumber]=useState(0)
    const[dark,setDark]=useState(false)
 
    const themeStyles={
        backgroundColor:dark?"black":"red",
        color:dark?"red":"Black"
    }
    
    const doubleNumber = slowMyUIRender(number)

    return(
        <>
        <input type={"number"} value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        
        <button onClick={()=>setDark(e=>!e)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}----Theme TEXT</div>
        
        </>
    )


}
export default UseMemo;


const slowMyUIRender =(data)=>{
    console.log("calling slow process")
    for(let i=0;i<=100000;i++){
        console.log(i)
    }
    return data *2
} 










