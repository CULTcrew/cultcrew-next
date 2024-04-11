import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'

export default function Cards({image, title, description, className}) {
  return (
    <div className={cl(className, styles.card)}>
        <Image 
        src={image} 
        width={150} 
        height={150} 
        alt={title}
        className={cl(className, styles.cardIcon)} />
    <h3 className={cl(className, styles.cardTitle)}>{title}</h3>
    <p className={cl(className, styles.cardDescription)}>{description}</p>
  </div>
  )
}
