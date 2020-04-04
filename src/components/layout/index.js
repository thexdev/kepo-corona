import React, { useEffect, memo } from "react";
import Navbar from "components/navbar";
import Footer from "components/footer";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="container my-5">{children}</main>
      <Footer />
    </>
  );
};

export default memo(Layout);
