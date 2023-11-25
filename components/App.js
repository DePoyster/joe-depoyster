//Joe DePoyster
//Final Project cosc 4210

import React from "react";
import "../public/styles.css"
import Resume from "./Resume"
import pic from '../images/volcano.jpg'

export default function App({resdata})
{
  return(
    <>
    <img src={pic} alt="som ole bulllshiiitttt" />
    <Resume resdata={resdata}/>
    </>
  )
}
