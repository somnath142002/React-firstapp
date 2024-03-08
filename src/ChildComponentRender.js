import { memo } from "react";



const ChildComponentRender=()=>{
    console.log("child component rendered");
    return(
        <>
        This is Children
        </>
    )
}
export default memo(ChildComponentRender);