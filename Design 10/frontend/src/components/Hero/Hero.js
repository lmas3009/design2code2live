import React from 'react'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero_container}>
        <HeroContent />
        <HeroImage />
    </div>
  )
}

export default Hero