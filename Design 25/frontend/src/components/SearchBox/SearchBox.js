import React from "react";
import styles from "./SearchBox.module.css";
import img1 from "../../images/image (5).jpg";
import img2 from "../../images/image (6).jpg";

const SearchBox = () => {
  return (
    <div className={styles.serachBox_container}>
      <div className={styles.heading}>
        Welcome To The Classic 
      </div>
      <div className={styles.input_container}>
       <span>
        <img className={styles.img} src={img1} alt='img' />
        <img className={styles.img} src={img2} alt='img' />
       </span>
      </div>
    </div>
  );
};

export default SearchBox;
