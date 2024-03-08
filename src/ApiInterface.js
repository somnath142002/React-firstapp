// import axios from "axios";
// import { useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";
// import { MdOutlineEdit } from "react-icons/md";
// import {DummyData, addData} from "./ApiInterface";


// const ApiInterface=()=>{
//     // const url ="https://jsonplaceholder.typicode.com/todos"
//     // axios.get(url)

//     const[employeeData,setEmployeeData] = useState([])
//     const SynchronousCalls=()=>{
//         console.log("Action1")
//         console.log("Action2")

//     }

//     // const asynchronousCalls1=async()=>{
//     //     const url ="https://jsonplaceholder.typicode.com/todos"
//     //     const response =await axios.get(url)
//     //     // console.log(response)
//     //     setEmployeeData(response?.data)
//     // }

//     const asynchronousCalls=()=>{
//         const url ="https://jsonplaceholder.typicode.com/todos"
//         axios.get(url).then((e)=>{
//             console.log(e,"then");
//             setEmployeeData(e?.data);
//         })
//         .catch((e)=>{
//             alert(e);
//         });

//     const DummyData=(id)=>{
//         axios.delete('https://jsonplaceholder.typicode.com/todos${id}').then((e)=>{
//             const UpdatedDummyData=employeeData.filter((e)=e.id !== id )
//             setEmployeeData(UpdatedDummyData);
            
//         })

//     }


//     const addData=()=>{
//         axios.post('https://jsonplaceholder.typicode.com/todos',{
//             id:"201",
//             title:"CLasses",
//             userId:"1232"
//         }).then((e)=>{
//             setEmployeeData([...employeeData,e.data])
//         })
//     }
//         // console.log(response)
//         // setEmployeeData(response?.data)
//     }

//     useEffect(()=>{
//         console.log("Entered in useeffect")
//         // SynchronousCalls()
//         asynchronousCalls()
       
//     },[]);
//     return(
//         // <>API INTERFACE CALLING
//         // {employeeData.map((e)=>(
//         //    <>
//         //    <div>Title: {e.title}</div>
//         //    <div>UserId: {e.userId}</div>
//         //    </>
//         // ))}

        
//         // </>
//         <>
//         <button onClick={()=>addData()}>POST ADD</button>
//         <table>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>TITLE</th>
//                     <th>UserId</th>
//                     <th>ACTION</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {employeeData.map((e)=>(
//                     <tr>
//                     <td>{e.id}</td>
//                     <td>{e.title}</td>
//                     <td>{e.userId}</td>
//                     <button onClick={()=>DummyData(e.id)}><MdDelete/></button>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//         </>

//     )
// }
// export default ApiInterface;