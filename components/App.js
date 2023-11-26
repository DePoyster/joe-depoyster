//Joe DePoyster
//Final Project cosc 4210

import React from "react";
import Resume from "./Resume"

export default function App({resdata})
{
  const picpic = '/images/volcano.jpg';
  return(
    <>
      <img src={picpic} alt="FUCK"/> 
      <Resume resdata={resdata}/>
    </>
  )
}
