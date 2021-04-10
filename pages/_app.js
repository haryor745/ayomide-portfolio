import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Body from "../components/Body";
function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    setSide(!side);
  }, [router.route]);
  const [side, setSide] = useState(false);
  const origin = side ? "50%" : "-50%";
  return (
    <Body>
      <motion.div
        key={router.route}
        className="container"
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
            x: origin,
          },
          animate: {
            opacity: 1,
            x: "0",
            transition: {
              type: "easeIn",
              duration: 0.5,
            },
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Body>
  );
}

export default MyApp;
