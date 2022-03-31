import React from "react";
import "./categories.css";


const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-products">
        <div className="categories-product">
          <h3>
            <strong>Watch</strong>
          </h3>
          <img
            className="poster"
            alt="poster"
            src="data:image/jpeg;base64,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REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q=="
          />
        </div>
      </div>
      <div className="categories-products">
        <div className="categories-product">
          <h3>
            <strong>Bag</strong>
          </h3>
          <img
            className="poster"
            alt="poster"
            src="https://media.istockphoto.com/photos/blue-school-backpack-isolated-on-white-picture-id1258122517?k=20&m=1258122517&s=612x612&w=0&h=h7753wKU8OHboZtBo8tCGhCVbKa7tL8nD84rn85ZVmM="
          />
        </div>
      </div>
      <div className="categories-products">
        <div className="categories-product">
          <h3>
            <strong>Shoes</strong>
          </h3>
          <img
            className="poster"
            alt="poster"
src="https://cpng.pikpng.com/pngl/s/186-1861125_free-png-download-nike-zoom-winflo-3-831561.png"
/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
