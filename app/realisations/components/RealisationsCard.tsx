'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  src: string;
  color: string;
  i: number;
  link: string;
}

const Card: React.FC<CardProps> = ({title, description, src, color, i, link}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div ref={container} className={`${styles.cardContainer}`}>
      <div className={`${styles.card} glass-container bg-gradient-to-b from-gray-900 to-gray-950 p-4`} style={{ top:`calc(-5vh + ${i * 25}px)` }}>
      <div className={`absolute inset-0 -z-10 bg-${color}-500/30 blur-2xl filter`}/>

        <h2 className='font-bold'>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p className='pb-2'>{description}</p>
          <Link
          className='text-sm'
          aria-label="Voir le site"
          href={link}
          >
          Voir le site
          </Link>
            {/* <span>
              <a href={src} target="_blank" rel="noopener noreferrer">See more</a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
              </svg>
            </span> */}
          </div>

          <div className={styles.imageContainer}>
            <motion.div 
            className={styles.inner}
            style={{scale: imageScale}}
            >
              <Image
                fill
                src={`/${src}`}
                alt="Réalisation de site web 974" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
