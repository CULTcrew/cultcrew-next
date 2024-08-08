"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Image from 'next/legacy/image';
import { urlFor } from '../../lib/client';
import Block from '../block/Block';
import Button from '../button/Button';

export default function Cover({ title, subtitle, className, btnLabel, image, ariaLabel, href, date, timeToRead }) {

  return (
    <div className={cl(styles.cover, className)}>
      {image && image.asset?.url && (
        <Image
          src={urlFor(image).url()}
          alt={title || 'Cover Image'}
          layout="fill" 
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className={styles.coverImage}
        />
      )}
      <div className={cl(styles.coverCircleBlur)}></div>
      <div className={styles.coverContent}>
        {title && <h1 className={styles.coverContentTitle}>{title}</h1>}
        <div className={cl(styles.coverContentText, className)}>
          {subtitle && Array.isArray(subtitle) && subtitle.length > 0 && (
            <Block value={subtitle} />
          )}
        </div>
        {
          date && timeToRead &&
          <div className={cl(className, styles.coverContentText)}>
            <p> Datum der Publikation : {date}</p>
            <p>Lesenzeit :  {timeToRead} </p>
          </div>
        }
        <div className={cl(className, styles.coverTitleBtn)}>
          {btnLabel && href && ariaLabel &&
            <Button
              href={href}
              ariaLabel={ariaLabel}
              btnLabel={btnLabel}
            />
          }
        </div>
      </div>
    </div>
  );
}