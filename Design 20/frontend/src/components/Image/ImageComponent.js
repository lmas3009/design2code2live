import React from 'react';
import styles from './Image.module.css';

const ImageComponent = ({img}) => {
  return (
    <div>
        <img className={styles.img} src={img} alt='img' />
    </div>
  )
}

export default ImageComponent