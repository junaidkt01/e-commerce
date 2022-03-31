import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
let componentMouted =true;
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (componentMouted) {
        setProduct(await response.json());
        console.log(product);
      }
    };
    getProducts();
  });

  return (
    <div className="row container">
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead">Rating {product.rating && product.rating.rate}</p>
        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button 
        onClick={()=>addProduct(product)}
        >Add to cart</button>
        <NavLink to="/cart">
          <button className="m-2">Go to cart</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
