import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Blog = () => {
  return (
    <>
      <Header></Header>
      <Banner page={"BLOG"} />
      <div className="text-center text-info display-1 fw-bold">
        BLOG IS COMING SOON
      </div>
      <Footer />
    </>
  );
};

export default Blog;
