import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About | Ayomide</title>
      </Head>
      <div className="about">
        <img src="./images/avatar.png" alt="img" />
        <div className="text">
          <div className="head">
            <h2>About Me</h2>
            <div className="line"></div>
          </div>
          <p>
            I design and code beautifully simple things, and I love what I do, I
            value simple content structure, clean design patterns, and
            thoughtful interactions. I like to code things from scratch, and
            enjoy bringing ideas to life in the browser, I genuinely care about
            people, and love helping fellow designers work on their craft.
            <br /> I Speak HTML, CSS (Mostly SCSS), Javascript, ReactJS, NextJS
            and a tiny bit of NodeJS.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
