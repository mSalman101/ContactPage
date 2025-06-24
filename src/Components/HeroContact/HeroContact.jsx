import React from "react";
import styles from "./HeroContact.module.css";
console.log(` yoyo${styles.HeroContact}`);
function HeroContact() {
  return (
    <div className={`${styles.HeroContact}`}>
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
    </div>
  );
}

export default HeroContact;
