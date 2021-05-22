import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import notFoundImage from "../../assets/undraw_page_not_found_su7k.svg";

const NotFound = () => {
  return (
    <>
      <Header />
      <div
        className="not-found"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "60vh",
        }}
      >
        <img
          src={notFoundImage}
          alt="Not found"
          style={{
            width: "60%",
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
