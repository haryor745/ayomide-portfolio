import Head from "next/head";
import styled from "../components/compStyles/Contact.module.scss";
function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Ayomide</title>
      </Head>
      <div className={styled.imgCont}>
        <img src="./images/contact-img.png" alt="img" />
      </div>
      <div className="head">
        <h2>Contact Me</h2>
        <div className="line"></div>
      </div>
      <form class={styled.formGrid}>
        <div class={styled.input}>
          <input
            className={styled.inputChild}
            type="text"
            placeholder="Elton John"
            required
          />
          <input
            className={styled.inputChild}
            type="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <textarea cols="30" rows="10" class={styled.textArea}></textarea>
        <div className={styled.btnContainer}>
          <button type="submit" class={styled.submit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
export default Contact;
