import React from 'react';
import styles from './Home.module.css';
import img from '../../images/image/image.png';

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt='img' />
      <div className={styles.heading}>404 Not Found</div>
      <div className={styles.text}>The page you search is deleted / not-exist</div>
    </div>
  )
}

export default Home