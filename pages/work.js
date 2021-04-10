import styled from "../components/compStyles/Work.module.scss";
import Head from "next/head";
import Link from "next/link";
const worksArray = [
  {
    id: 1,
    text: "Frontend Mentor Coffeeroasters Site",
    reactSass: true,
    htmlCss: false,
    link: "https://coffeeroasterz.netlify.app/",
    img: "./works/coffee.png",
  },
  {
    id: 2,
    text: "Frontend Mentor REST Countries API",
    reactSass: true,
    htmlCss: false,
    link: "https://harcountries.netlify.app/",
    img: "./works/country.png",
  },
  {
    id: 3,
    text: "Frontend Mentor Todo App",
    reactSass: true,
    htmlCss: false,
    link: "https://lazytodo.netlify.app/",
    img: "./works/todo.png",
  },
  {
    id: 4,
    text: "Frontend Mentor Clock App",
    reactSass: true,
    htmlCss: false,
    link: "https://ayo-loaction.netlify.app/",
    img: "./works/clock.png",
  },
  {
    id: 5,
    text: "Rock, Paper, Scissors game",
    reactSass: true,
    htmlCss: false,
    link: "https://rps21.netlify.app/",
    img: "./works/rps.png",
  },
  {
    id: 6,
    text: "Frontend Mentor Jobs App",
    reactSass: true,
    htmlCss: false,
    link: "https://steve-jobz.netlify.app/",
    img: "./works/jobz.png",
  },
  {
    id: 7,
    text: "Restaurant Site",
    reactSass: false,
    htmlCss: true,
    link: "https://restaurateur.netlify.app/",
    img: "./works/restaurant.png",
  },
  {
    id: 8,
    text: "Portfolio Site",
    reactSass: false,
    htmlCss: true,
    link: "https://haryor.netlify.app/",
    img: "./works/haryor.png",
  },
  {
    id: 9,
    text: "VFoodies Site",
    reactSass: false,
    htmlCss: true,
    link: "https://vfoodies.netlify.app/",
    img: "./works/food.png",
  },
  {
    id: 10,
    text: "Photography Site",
    reactSass: false,
    htmlCss: true,
    link: "https://psalmie.netlify.app/",
    img: "./works/photo.png",
  },
];
function Works() {
  return (
    <>
      <Head>
        <title>Work | Ayomide</title>
      </Head>
      <div className={styled.works}>
        <div className={styled.headImg}>
          <img src="./images/work-img.png" alt="img" />
        </div>
        <div className="head">
          <h2>Work</h2>
          <div className="line"></div>
        </div>
        <div className={styled.worksGrid}>
          {worksArray.map((work) => {
            return (
              <div className={styled.work} key={work.id}>
                <img src={work.img} alt="img" />
                <div className={styled.workText}>
                  <h2>{work.text}</h2>
                  {work.reactSass && (
                    <h3 className="haas">
                      <span style={{ color: "#e56037", marginRight: "30px" }}>
                        ReactJS
                      </span>
                      <span style={{ color: "#6fb5a1" }}>SCSS</span>
                    </h3>
                  )}
                  {work.htmlCss && (
                    <h3 className="haas">
                      <span style={{ color: "#e56037", marginRight: "30px" }}>
                        HTML
                      </span>
                      <span style={{ color: "#6fb5a1", marginRight: "30px" }}>
                        CSS
                      </span>
                      <span style={{ color: "#fff" }}>JS</span>
                    </h3>
                  )}
                  <Link href={work.link}>
                    <a target="_blank">
                      <div className={styled.workLink}>
                        <img src="./icons/Link.png" alt="img" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Works;
