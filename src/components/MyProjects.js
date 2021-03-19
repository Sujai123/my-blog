import { motion } from 'framer-motion'
import React from 'react'
import myProjects from "../myProjects"
import styles from "./mainProfile.module.css"

const MyProjects = () => {

  const renderProjectComp = (each => {
    const {title, url} = each;

    const onClick = () => {
      window.open(url, "_blank")
    }

    return(
      <motion.div 
        whileHover={{ scale: 1.2 }} 
        whileTap={{ scale: 0.8 }} 
        className={styles.project}
        onClick={onClick}
      >
        {title}
      </motion.div>
    )
  })
  return (
    <div className={styles.projectContainer}>
      {myProjects.map(renderProjectComp)}
    </div>
  )
}

export default MyProjects
