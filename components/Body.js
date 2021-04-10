import Header from "./Header";
import Footer from "./Footer";
function Body({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Body;
