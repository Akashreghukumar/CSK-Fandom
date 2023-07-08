import React from 'react'
import {motion} from "framer-motion"
import Carousel from '../../CommonComponents/Carousel'

const Container2 = () => {
  return (
    <div className='section_container'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1,rotate: [0], }}
        transition={{ duration: 0.5 }} className='con3font'>
        Five Times Champions Of IPL
        </motion.div> 
        <Carousel/>
  
    </div>
  )
}

export default Container2