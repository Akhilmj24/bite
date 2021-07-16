import React from "react";
import { motion } from "framer-motion";

export default function Banner() {

   
  return (
    <div className="banner_main_conatiner">
      <div className="banner_conatiner">
        <motion.div
          initial={{ height: "0px" }}
          animate={{ height: "60%" }}
          transition={{
            delay: 0.2,
            duration: 3,
          }}
          className="banner_img"
        ></motion.div>
        <div className="banner_content">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 5,
            }}
          >
            The <motion.span
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{
              delay:.3,
              duration: 1,
              yoyo:Infinity
            }}
            >bite</motion.span>
          </motion.h1>
          <p>food station</p>
        </div>
      </div>
    </div>
  );
}
