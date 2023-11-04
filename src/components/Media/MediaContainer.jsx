import React from "react";

// import "./mediacontainer.scss";
import styles from "./mediacontainer.module.scss";

const MediaContainer = ({ name, children }) => {
  return (
    // <div className="media-container__main-wrapper">
    //   <div className="media-container__title">
    //     <h1>{name}</h1>
    //   </div>
    //   <div className="media-container__content"></div>
    //   {children}
    // </div>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>{name}</h1>
      </div>
      <div className={styles.content}></div>
      {children}
    </div>
  );
};

export default MediaContainer;
