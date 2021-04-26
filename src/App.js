import React from "react"
import './App.css';
import ProfilePhoto from './Component/ProfilePhoto'
import MyName from "./Component/FullName" 
import Adress from "./Component/Address"


function App() {
  return (
    <div className="myproject">
   <ProfilePhoto />
   <MyName/>
   <Adress/>
 </div>
        
  
  );
}

export default App;
