//Joe DePoyster
//Final Project cosc 4210

import React from "react";
import ResSections from "./ResSections"
import Title from "./Title";

export default function Resume({resdata})
{
  return (
  <>
  <Title /> 
  <div className="resume">
    <h2 style={{color: "blue"}}>Education</h2>
    <p>B.S. Computer Science, University of Wyoming. :/)</p>
    {
    resdata.map((data, i) =>
    (
      <ResSections key={i} {...data}/>
    ))
    }

  </div>
  </>
  )
}
