import styled from "./compStyles/footer.module.scss";
const footerArray = [
  {
    img: "./icons/facebook.png",
    title: "Facebook",
  },
  {
    img: "./icons/insta.png",
    title: "Instagram",
  },
  {
    title: "Twitter",
    img: "./icons/twitter.png",
  },
  {
    title: "Github",
    img: "./icons/github.png",
  },
  {
    title: "LinkedIn",
    img: "./icons/linkedin.png",
  },
];
function Footer() {
  return (
    <>
      <footer
        className="footer"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "90vw",
          marginTop: "130px",
          textAlign: "center",
          borderTop: "3px solid #fff",
          padding: "30px 0",
          fontSize: "1.2rem",
        }}
      >
        <div className={styled.linksCont}>
          {footerArray.map((item, index) => {
            return (
              <div key={index} className={styled.social}>
                <img src={item.img} alt="icon" />
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>
        <h2 className={styled.fh}>
          Copyright &copy; {new Date().getFullYear()} Ayomide.{" "}
        </h2>
      </footer>
    </>
  );
}
export default Footer;
