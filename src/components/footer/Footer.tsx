"use client"
import Image from 'next/image';
import styles from './footer.module.css'

const Footer = () => {
  console.log("Hello");
  
  return (
    <div className={styles.container}>
      <div>©2024 Bloggero . All rights received.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={25} height={25} className={styles.icon} alt='Bloggero FB' />
        <Image src="/2.png" width={25} height={25} className={styles.icon} alt='Bloggero Insta ' />
        <Image src="/3.png" width={25} height={25} className={styles.icon} alt='Bloggero Twitter' />
        <Image src="/4.png" width={25} height={25} className={styles.icon} alt='Bloggero Youtube' />
      </div>
    </div>
  );
};

export default Footer;
