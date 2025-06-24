import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

let name = "i",
  email = "me",
  text = "myself";

const ContactForm = () => {
  const [name, setName] = useState("I");
  const [email, setEmail] = useState("me");
  const [text, setText] = useState("Myself");
  const handleSubmit = (e) => {
    e.preventDefault(); /* this is prevent reload on submit click+ */
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
    // console.log();
  };

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize={"24px"} />}
        />
        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <textarea name="text" rows={"8"} />
          <Button text="SUBMIT" />
          <p>{`${name} ${email}  ${text}`}</p>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="../../../public/Service 24_7-pana 1.svg" alt="svg" />
      </div>{" "}
    </section>
  );
};

export default ContactForm;
