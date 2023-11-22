//Joe DePoyster
//Final Proejct COSC 4210

import React from "react";
import Swag from "./Swag"
export default function ResumeElement({data})
{
  return (
    <ul>
      {
        data.map((swag, i)=>
        (
          <Swag key={i} {...swag}/>
        ))
      }
    </ul>
  )
}
