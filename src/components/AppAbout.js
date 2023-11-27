//Joe DePoyster
//Final Project cosc 4210

import React from "react";

export default function AppAbout({resdata})
{
  return(
    <>
      <Title /> 
      <Navbar />
      <Resume resdata={resdata}/>
    </>
  )
}

