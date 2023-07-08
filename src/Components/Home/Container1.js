import React from 'react'
import {motion} from "framer-motion"

const Container1 = () => {
  return (
    <div style={{top:"6rem"}} className='section_container'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1,   rotate: [12, -6], }}
        transition={{ duration: 0.5 }}
         className='con1font'>WISTLE</motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1,rotate: [12, -6], }}
        transition={{ duration: 0.5 }}
        className='con1font'>PODU</motion.div>   
    </div>
  )
}

export default Container1