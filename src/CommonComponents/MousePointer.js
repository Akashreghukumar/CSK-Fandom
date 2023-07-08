import React from 'react'
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from '../ConstFunctions/useFollowPointer';

const MousePointer = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
    ref={ref}
    className="mousepointer"
    animate={{ x, y }}
    transition={{
      type: "spring",
      damping: 3,
      stiffness: 50,
      restDelta: 0.001
    }}
  />
  )
}

export default MousePointer