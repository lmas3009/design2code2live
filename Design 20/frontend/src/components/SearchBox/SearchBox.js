import React from "react";
import styles from "./SearchBox.module.css";
import search from "../../images/search.png";

const SearchBox = () => {
  return (
    <div className={styles.serachBox_container}>
      <div className={styles.heading}>
        Free High Quality Illustration Images
      </div>
      <div className={styles.input_container}>
        <input className={styles.textInput} placeholder='Search for a Images' />
        <span>
          <img className={styles.searchIcon} src={search} alt='icon' />
        </span>
      </div>
    </div>
  );
};

export default SearchBox;
