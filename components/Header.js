import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "./compStyles/header.module.scss";
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [size, setSize] = useState("");
  function dScroll() {
    const dBody = window.document.body;
    if (navOpen) {
      dBody.classList.add(styled.hidden);
    } else {
      dBody.classList.remove(styled.hidden);
    }
  }
  function checkScroll() {
    if (window.innerWidth > 500) {
      setNavOpen(false);
    } else {
      return;
    }
  }
  useEffect(() => {
    setSize(window.innerWidth);
  });
  useEffect(() => {
    dScroll();
  }, [navOpen]);
  useEffect(() => {
    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, [size]);
  return (
    <header className={styled.header}>
      <div className={styled.headerInner}>
        <Link href="/">
          <a>
            <img src="./icons/logo.svg" alt="logo" />
          </a>
        </Link>
        <div className={`${styled.links} ${navOpen ? styled.down : ""} `}>
          <Link href="/work">
            <a
              onClick={() => {
                setNavOpen(false);
              }}
            >
              Work
            </a>
          </Link>
          <Link href="/about">
            <a
              onClick={() => {
                setNavOpen(false);
              }}
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              onClick={() => {
                setNavOpen(false);
              }}
            >
              Contact
            </a>
          </Link>
        </div>
        <button
          className={styled.button}
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
            });
            setNavOpen(!navOpen);
          }}
        >
          MENU
        </button>
      </div>
    </header>
  );
}
export default Header;
