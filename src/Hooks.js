

import { useState } from "react";
import EmployeeDetails from "./propDrillingReact";
import { useNavigate } from "react-router-dom";
const Hooks = () => {
//   console.log("rerendered");
  
  const [flag, setFlag] = useState(false);
  const [fields, setFields] = useState({
    firstName: "",
    lastname: "",
    mobilenum: "",
    address: "",
  });

  const changeEventHandler = (e, id) => {
    setFields({...fields, [id]: e.target.value});
  };


  const Navigate = useNavigate();
  console.log(fields?.firstName,'____', fields?.lastname,'______',fields?.mobilenum,'____',fields?.address);

  const checkValidations=()=>{
    if(fields?.firstName !=="" && fields?.lastname !=="" && fields?.address!=="" && fields?.mobilenum!==""){
      setFlag(true)
    }
    else{
     alert("fill all the fields")
    }
  }

  return (
    <>
      <form onSubmit={(e) => {
        // setFlag(true);
        checkValidations()
        Navigate('/output',{state:{fields}})
        e.preventDefault(); // for page rfendering preventing
      }}>
       
        <label>
          firstName
          <input value={fields?.firstName} onChange={(e) => changeEventHandler(e, "firstName")} />
        </label>
        <label>
          lastname
          <input value={fields?.lastname} onChange={(e) => changeEventHandler(e, "lastname")} />
        </label>
        <label>
          Mobile Number
          <input value={fields?.mobilenum} onChange={(e) => changeEventHandler(e, "mobilenum")} />
        </label>
        <label>
          Address
          <input value={fields?.address} onChange={(e) => changeEventHandler(e, "address")} />
        </label>
       
        <button type="submit">Submit</button>
      </form>
      
      
    </>
  );
};

export default Hooks;