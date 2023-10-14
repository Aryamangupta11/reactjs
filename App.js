
// src/App.js

import React from "react";
import "./App.css";

import { ColorPicker, useColor } from "react-color-palette"; 


function App() {
   
  
 
  const [color, setColor] = useColor("hex", "#121212"); 
  
  return ( 
    <div> 
        <h1>Color Picker </h1> 
        <ColorPicker width={456} height={228}  
                   color={color}  
                   onChange={setColor} hideHSV dark />; 
    </div> 
  ) 
};


export default App;

