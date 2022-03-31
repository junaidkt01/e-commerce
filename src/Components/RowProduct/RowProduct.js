import React, { useEffect, useState } from "react";
import "./rowProduct.css";
import { NavLink } from "react-router-dom";

const RowProduct = (props) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;
  useEffect(() => {
    const products = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    products();
  }, []);


  return (
    <div className="rowProduct">
      <div className="heading">
        <h1>
          <strong>{props.name}</strong>
        </h1>
      </div>
      <div className="products">
        {filter.map((product) => {
          return (
            <>
              <div className="product">
                <img className="poster" alt="poster" src={product.image} />
                <div className="product-text">
                  <h1 className="product-name">
                    {product.title.substring(0, 12)}
                  </h1>
                  <h4 className="product-description">
                    {product.description.substring(0, 20)}
                  </h4>
                  <h4 className="product-description">${product.price}</h4>
                  <NavLink to={`/products/${product.id}`}>
                  <button>Buy now</button>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RowProduct;
