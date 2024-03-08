import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignUpForm = () => {
  const data = useSelector((e) => e);
  console.log(data, "reducer dta");

  const updatedData = useDispatch();

  const [firstName, setFirstName] = useState("");

  const handleForm = () => {
    console.log("entered here");
    updatedData({ type:'FIRST-NAME', payload:firstName});
    setFlag(true);
  };
  console.log(data, "reudced data");

  const [flag, setFlag] = useState(false);
  return (
    <>
      <label>firstname</label>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type={"text"}
      ></input>
      <label>lastname</label>
      <input type={"text"}></input>
      <label>address</label>
      <input type={"text"}></input>
      <label>phonenumber</label>
      <input type={"number"}></input>
      <button onClick={()=>handleForm()}>Submit</button>
      {flag && <div>{firstName}</div>}
    </>
  );
};

export default SignUpForm;
