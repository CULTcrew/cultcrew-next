import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { urlFor } from '../../../lib/client'
import Image from 'next/image'
import Title from '../Title/Title'
import Form from './Form'
import { IoLocationSharp, IoMail, IoCallSharp  } from "react-icons/io5";


export default function Contact({className, title, subtitle, image, logo, address, phone, email}) {

  return (
    <div className={cl(className, styles.contact)}>
        <div className={cl(className, styles.contactLeft)}>
            <Title type="medium" 
            className={cl(className, styles.contactTitle)}>{title}</Title>
            <p className={cl(className, styles.contactText)}> {subtitle}</p>
            <Form />
        </div>
        <div className={cl(className, styles.contactRight)}>
            <Image 
            src={urlFor(image).url()}
            alt="contact"
            width={350}
            height={350}
            className={cl(className, styles.contactImage)}
            />
            <Image
                src={urlFor(logo).url()}
                alt="logo"
                width={140}
                height={70}
                className={cl(className, styles.contactLogo)}
            />
            <div className={cl(className, styles.contactRightData)}>
                <div className={cl(className, styles.contactRightDataText)}>
                    <IoLocationSharp className={styles.contactRightDataIcon} />
                    {address} 
                    </div>
                <div className={cl(className, styles.contactRightDataText)}>
                    <IoCallSharp className={styles.contactRightDataIcon} />
                    {phone}
                    </div>
                <div className={cl(className, styles.contactRightDataText)}>
                    <IoMail className={styles.contactRightDataIcon} />
                    {email}
                </div>

            </div>
            
        </div>
      
    </div>
  )
}
