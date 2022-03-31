import React from "react";
import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";
import Footer from "../Components/Footer/Footer";
import RowProduct from "../Components/RowProduct/RowProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <RowProduct name="Men's" />
      <RowProduct name="Women's" />
      <Footer />
    </div>
  );
};

export default Home;
