import React, {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

const detailsAnimation = {
  hidden: {
    height: 0,
    opacity: 0,
    y: 20,
  },
  visible: {
    height: '50vh',
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
}

export default ({expanded, id}) => {

  useEffect(() => {
    // TODO: make api call
  }, [expanded])

  return (
    <AnimatePresence>
      {
        expanded && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={detailsAnimation}></motion.div>
        )
      }
    </AnimatePresence>
  )
}