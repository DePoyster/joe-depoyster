//Joe DePoyster
//Final Project cosc 4210

import React from "react";
import ResSectionData from "./ResSectionData";

export default function ResSecions({section, data})
{
  return (
    <>
      <h3>{section}</h3>
      <ResSectionData data={data}/>
    </>
  )
}
