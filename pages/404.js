import Link from "next/link";
import Head from "next/head";
function Error() {
  return (
    <>
      <Head>
        <title>404 | Ayomide</title>
      </Head>
      <div className="error">
        <div className="head">
          <img src="./images/error.png" alt="img" />
          <h2>Page Not Found</h2>
          <div className="line"></div>
          <Link href="/">
            <a className="btn">Back to Home</a>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Error;
