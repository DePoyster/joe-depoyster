//Joe DePoyster
//Final Project cosc 4210

import React from "react";
import "./styles.css"
import Resume from "./Resume"

export default function App({resdata})
{
  return(
    <>
    <Resume resdata={resdata}/>
    </>
  )
}
