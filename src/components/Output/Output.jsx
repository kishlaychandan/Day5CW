import React, { useState } from 'react'
import './Output.css'

function Output({ hour, subject }) {
    const[hr,setHour]=useState(hour);
    const [sub,setSubject]=useState(subject);
  return (
    <>
      <div className="output">
        <p>{sub} - {hr} hours</p>
        <button onClick={()=>{if(hr<24)setHour(parseInt(hr) + 1)}}>+</button>
        <button onClick={()=>{if(hr>0)setHour(parseInt(hr) - 1)}}>-</button>
      </div>
    </>
  )
}

export default Output;
