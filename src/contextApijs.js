
const NameContext=(initialValue)=>{
    let contextValue = initialValue

    const Provider=(props)=>{
        contextValue = props.value
        return props.children;
    }

    const ConsumeText=()=>{
        return contextValue
    }

    
    return  {Provider,ConsumeText}

}

const DummyComponent=()=>{
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
    const textInherited = NameContext.ConsumeText()
    return(
        <>
        <br/>
        DummyComponent2
        <br/>
        <p>{textInherited}</p>
        </>
    )
}

export  {DummyComponent};
