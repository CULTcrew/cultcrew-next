import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"

export default function FeedbackCard({className, name, text}) {
  return (
    <div className={cl(styles.feedbackCard)}>
        <Image 
        src="/BG.svg"
        alt="Background"
        width={550}
        height={400}
        className={cl(styles.feedbackCardImage)}
        />
        <p className={cl(className, styles.feedbackCardText)}>{text}</p>
        <h3 className={cl(className, styles.feedbackCardName)}>{name}</h3>
    </div>
  )
}