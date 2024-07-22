'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import { TbArrowNarrowUp } from 'react-icons/tb'
import styles from './backtotop.module.sass'

export default function BackToTop () {

    const [show, setShow] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const handleScroll = useCallback(() => {
        if (!show && window.scrollY > 500) setShow(true)
        if (show && window.scrollY <= 500) setShow(false)
    }, [show])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])

    return (
        <AnimatePresence>
      {show && (
        <motion.div
          className={styles.motionDiv}
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button
            onClick={scrollToTop}
            className={styles.btn}
          >
            <TbArrowNarrowUp size={20} />
          </button>
        </motion.div>
      )}
        </AnimatePresence>

    )
}