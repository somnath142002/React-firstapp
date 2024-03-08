import { useContext, createContext } from "react";

const NameContext = createContext("Somnath")


const ParentComponent=()=>{
    // var text="Hello world"
    return(
        <NameContext.Provider value={"Hello world"} >
        <>
        DummyComponent
        <br/>
        <DummyComponent1 />
        </></NameContext.Provider>
    )
}
const DummyComponent1=()=>{
    return(
        <>
        DummyComponent1
        <br/>
        <DummyComponent2/>
        </>
    )
}
const DummyComponent2=()=>{
    const textInherited = useContext(NameContext)
    return(
        <>
        <br/>
        DummyComponent2
        <br/>
        <p>{textInherited}</p>
        </>
    )
}
export default ParentComponent;
