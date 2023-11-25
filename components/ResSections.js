//Joe DePoyster
//Final Project cosc 4210

import React from "react";
import ResSectionData from "./ResSectionData";

export default function ResSections({section, data})
{
  return (
    <>
      <h2>{section}</h2>
      <ul>      {
        data.map((e, i) => (
          <ResSectionData key={i} data={e}/>
        ))
      }
      </ul>
    </>
  )
}
