import { textContainer, textVariants2 } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  title: string
  textStyles?: string
}

export const TypingText = ({ title, textStyles }: Props) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-bold text-[32px] leading-[26px] ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textContainer}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  )
}

export const TitleText = ({ title, textStyles }: Props) => {
  return (
    <motion.h2
      variants={textVariants2}
      initial={"hidden"}
      whileInView={"show"}
    >
      {title}
    </motion.h2>
  )
}



export default TypingText