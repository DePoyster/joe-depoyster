import React from "react";
import ResPoints from "./ResPoints";

export default function ResSectionData({name, company, date, points})
{
  return (
    <>
      <p style={{textDecoration: 'underline'}}>
        <span style={{ fontWeight: 'bold'}}>{name}</span>{' | '} {company}{' | '}
        <span style={{ fontStyle: 'italic'}}>{date}</span>
      </p>
      <ul>
        {
          points.map((e,i) => (
            <ResPoints key = {i} point={e}/>
          ))
        }
      </ul>
    </>
    )
}
