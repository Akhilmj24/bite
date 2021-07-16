import React from 'react'
import { motion } from "framer-motion";
const loader={
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
x:{
    yoyo:Infinity,
    duration:0.5
},
y:{
    yoyo:Infinity,
    duration:0.25
}
        }
    }
}
export default function Loader() {
    return (
        <motion.div className="loader"
        variants={loader}
        animate="animationOne"
        >
            
        </motion.div>
    )
}
