import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hooks from './Hooks';
import ParentText from "./ChildtoParant";
import {BrowserRouter,Routes,Route, RouterProvider} from "react-router-dom";
import EmployeeDetails from './propDrillingReact';
import HomePage from './HomePage';
import ApiInterface from './ApiInterface';
import SignUpForm from './SignUpForm';
import DummyData from './ApiInterface';
import store from './Store';

import UserDetails from './reducer';
import { Provider } from 'react-redux';
import Rendering from './rendering';
import ChildComponentRender from './ChildComponentRender';
// import {Ref} from './Ref';
// import Ref from './Ref';
import Usememo from './useMemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  
    {/* <Route index element={<Hooks/>}></Route> */}
    {/* <Route path='/home' element={<ParentText />}></Route>
    <Route index element={<Hooks/>}></Route>

{/* <Route path='/Api' element={<ApiInterface/>}></Route> */}

 <Route path='/redux' element={<Provider store={store}><SignUpForm/></Provider>}></Route> 
 {/* <Route path='/reender' element={<Rendering />}></Route>    */}
    <Route path='/render' element={<Rendering />}></Route>
    {/* <Route path='./ref' element={<Ref/>}></Route> */}
{/* <Route path='/ref' element={<Ref/>}></Route> */}
<Route path='/memo' element={<Usememo/>}></Route>
    </Routes>
 
  </BrowserRouter>
  // <>

  // <ParentText/>
  // </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();