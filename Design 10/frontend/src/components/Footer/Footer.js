import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.text}>Call us on 123-46-789</div>
        <div className={styles.text}>Mail us on:test-email@email.com</div>
    </div>
  )
}

export default Footer