import React from 'react';
import Image from "next/legacy/image";
import styles from './styles.module.scss';
import cl from 'classnames';
import Link from 'next/link';
import Block from '@/components/blockContent/Block';

export default function Cards({ image, title, description, slug, className }) {
  return (
    <Link href={`/services/${encodeURIComponent(slug)}`} className={cl(className, styles.card)} passHref>
      <Image 
        src={image} 
        width={120} 
        height={100} 
        alt={title}
        className={cl(className, styles.cardIcon)} 
      />
      <h3 className={cl(className, styles.cardTitle)}>{title}</h3>
      <div className={cl(className, styles.cardDescription)}>
        <Block blocks={description} />
      </div>
    </Link>
  );
}
