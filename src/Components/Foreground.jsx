import React, { useRef } from 'react'
import Card from './Card'
// React
// import { motion } from "framer-motion"
function Foreground() {
    const ref =useRef(null)
    const data = [
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing",
            fileSize:".9mbs",
            close:false,
            tag:{
                isOpen:true,
                tagTitle:"download now",
                tagColour:"green"
            }
        },
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing",
            fileSize:".9mbs",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"download now",
                tagColour:"blue"
            }
        },
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing",
            fileSize:".9mbs",
            close:true,
            tag:{
                isOpen:false,
                tagTitle:"upload",
                tagColour:"green"
            }
        }
    ];

  return (
    
    <div ref={ref} className='fixed top-0 left-0 flex gap-10 p-5 flex-wrap z-[3] w-full h-full'>
       {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
       ))}
       
    </div>
    
  )
}

export default Foreground
