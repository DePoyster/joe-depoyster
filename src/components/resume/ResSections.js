import React from "react";
import ResSectionData from "./ResSectionData";

export default function ResSections({section, data})
{
  if(section === "Skills")  {
    const list = data.join(',  ');
    return (
      <>
        <h2>{section}</h2>
        <p>{list}</p>
      </>
    )
  }
  else{
    return(
      <>
      <h2>{section}</h2>
      {
        data.map((e, i)=>
        (
          <ResSectionData key={i} {...e}/>
        ))
      }
      </>
    )
  }
}