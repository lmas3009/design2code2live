import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
        <div className={styles.heading}>Logo</div>
        <div className={styles.heading}>Menu</div>
    </div>
  )
}

export default Navbar