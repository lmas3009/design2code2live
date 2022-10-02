import React from "react";
import styles from "./Image.module.css";
import ImageComponent from "./ImageComponent";

//==========================Images===================================
import img from "../../images/image (8).jpg";
import img1 from "../../images/image (1).jpg";
import img2 from "../../images/image (2).jpg";
import img3 from "../../images/image (3).jpg";
import img4 from "../../images/image (4).jpg";
import img5 from "../../images/image (5).jpg";
import img6 from "../../images/img (6).jpg";
import img7 from "../../images/img (7).jpg";
import img8 from "../../images/img (8).jpg";
import img9 from "../../images/img (9).jpg";
import img10 from "../../images/img (10).jpg";
import img11 from "../../images/img (11).jpg";

const Image = () => {
  const images = [img, img1, img2, img3, img4];
  return (
    <>
    <div className={styles.img_container}>
      {images.map((img, index) => (
        <ImageComponent key={index} img={img} />
      ))}

      
    </div>
    <div className={styles.middle_container}>
        <img className={styles.middle_img} src={img10} />
        <div className={styles.middle_text}>
          <h3 className={styles.middle_head}>Hip Hop</h3>
          <p className={styles.middle_para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <h5 className={styles.foot}>Call us : 123-456-789</h5>
        <h6 className={styles.foot}>mail us : test@gmail.com</h6>
      </div>
      </>
  );
};

export default Image;
