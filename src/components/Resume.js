//Joe DePoyster
//Final Project cosc 4210

import React from "react";
import ResSections from "./ResSections"

export default function Resume({resdata})
{
  return (
  <>
  <div className="resume">
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
