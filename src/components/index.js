import { motion } from 'framer-motion'

const IndexContainer = () => {
  return (
    <div>
      <motion.div 
        whileHover={{ scale: 1.2 }} 
        whileTap={{ scale: 0.8 }} 
        style={{height: "100px", width: "100px", backgroundColor: "white"}}   
      >
        hi
      </motion.div>
    </div>
  )
}

export default IndexContainer