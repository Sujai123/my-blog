import { motion } from 'framer-motion'
import React from 'react'
import styles from "./mainProfile.module.css"
import logo from '../logo.svg';

const MainProfileContainer = () => {
  return (
    <div
      className={styles.container}
    >
      <div className={styles.profile}>
        <h1>Hi, I am Sujai</h1>
        <h4>Software Engineer | Frontend Developer | Ex-Sri Shakthi Student</h4>
      </div>
      {/* <div
        className={styles.profilePic}
      > */}
        <motion.div 
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.8 }} 
          className={styles.profilePic}
        >
          <img src={logo} />
        </motion.div>
      {/* </div> */}
    </div>
  )
}

export default MainProfileContainer
