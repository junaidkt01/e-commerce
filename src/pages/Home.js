import React from "react";
import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import RowProduct from "../Components/RowProduct/RowProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <RowProduct name="Shoes" />
      <RowProduct name="Backpack" />
      <Footer />
    </div>
  );
};

export default Home;
