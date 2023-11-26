//Joe DePoyster
//Final Project cosc 4210

import React, {useState} from "react";
import Resume from "./Resume";
import Navbar from "./Navbar";

export default function App({resdata})
{
  return(
    <>
      <Navbar />
      <Resume resdata={resdata}/>
    </>
  )
}

