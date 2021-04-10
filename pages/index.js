import Head from "next/head";
import styled from "../styles/Home.module.scss";
import Link from "next/link";
const servicesArray = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    text:
      "I have gained a lot of experience building many responsive websites. I have developed a personal approach to testing different solutions that has brought me to design better.",
    img: "./icons/computer.png",
  },
  {
    id: 2,
    title: "SEO",
    text:
      "I have gained a lot of experience building many responsive websites. I have developed a personal approach to testing different solutions that has brought me to design better.",
    img: "./icons/search.png",
  },
  {
    id: 3,
    title: "CYBER-SECURITY",
    text:
      "I have gained a lot of experience building many responsive websites. I have developed a personal approach to testing different solutions that has brought me to design better.",
    img: "./icons/lock.png",
  },
  {
    id: 4,
    title: "MOBILE APP DEVELOPMENT",
    text:
      "I have gained a lot of experience building many responsive websites. I have developed a personal approach to testing different solutions that has brought me to design better.",
    img: "./icons/phone.png",
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ayomide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styled.hero}>
        <div className={styled.me}>
          <div className={styled.bio}>
            <h2>Hey!</h2>
            <h1>
              I’m <span>Ayomide</span>
            </h1>
            <p>
              A front-end developer from <br /> Lagos, Nigeria.
            </p>
            <Link href="/contact">
              <a className="btn" style={{ marginTop: "40px" }}>
                Get in touch
                {/* <img src="./icons/Group.png" alt="arrow" /> */}
              </a>
            </Link>
          </div>
          <div className={styled.heroImg}>
            <img src="./images/hero-image.png" alt="hero-image" />
          </div>
        </div>
        <div className={styled.heroBottom}>
          <div className={styled.mouse}>
            <span>
              <img src="./icons/mouse.png" alt="mouse" />
            </span>
            <span>
              <p>Scroll down</p>
            </span>
          </div>
          <div className={styled.social}>
            <img src="./icons/facebook.png" alt="fb" />
            <img src="./icons/insta.png" alt="insta" />
            <img src="./icons/twitter.png" alt="twitter" />
            <img
              src="./icons/github.png"
              alt="github"
              className={styled.shockA}
            />
            <img
              src="./icons/linkedin.png"
              alt="linked-in"
              className={styled.shockB}
            />
          </div>
        </div>
      </div>
      <div className="services">
        <div className="head">
          <h2>Services</h2>
          <div className="line"></div>
        </div>
        <div className={styled.servicesGrid}>
          {servicesArray.map((card) => {
            return (
              <div className={styled.card} key={card.id}>
                <img src={card.img} alt="img" />
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <h1>0{card.id}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styled.works}>
        <div className="head">
          <h2>Work</h2>
          <div className="line"></div>
        </div>
        <div className={styled.worksGrid}>
          <div className={styled.work}>
            <img src="./works/coffee.png" alt="img" />
            <div className={styled.workText}>
              <h2>Frontend Mentor Coffeeroasters Site</h2>
              <h3 className="haas">
                <span style={{ color: "#e56037", marginRight: "30px" }}>
                  ReactJS
                </span>
                <span style={{ color: "#6fb5a1" }}>SCSS</span>
              </h3>
              <a href="https://coffeeroasterz.netlify.app/">
                <div className={styled.workLink}>
                  <img src="./icons/Link.png" alt="img" />
                </div>
              </a>
            </div>
          </div>
          <div className={styled.work}>
            <img src="./works/country.png" alt="img" />
            <div className={styled.workText}>
              <h2>Frontend Mentor REST Countries API</h2>
              <h3 className="haas">
                <span style={{ color: "#e56037", marginRight: "30px" }}>
                  ReactJS
                </span>
                <span style={{ color: "#6fb5a1" }}>SCSS</span>
              </h3>
              <a href="https://harcountries.netlify.app/">
                <div className={styled.workLink}>
                  <img src="./icons/Link.png" alt="img" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <Link href="/work">
          <a className="btn">
            See More
            <img src="./icons/Group.png" alt="arrow" />
          </a>
        </Link>
      </div>
    </>
  );
}
