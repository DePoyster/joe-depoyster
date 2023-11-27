//Joe DePoyster
//Final Project cosc 4210

import React, {useState} from "react";
import Resume from "./Resume";
import Navbar from "./Navbar";
import Title from "./Title";

export default function App({resdata})
{
  return(
    <>
      <Title /> 
      <Navbar />
      <Resume resdata={resdata}/>
    </>
  )
}

