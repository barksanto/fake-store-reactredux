import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  //using this id we can make a new api call
  const { productId } = useParams();
  // console.log(`Product Id: ${productId}`)

  const fetchProductDetail = () => {
    const response = await axios.get(`https:..fakestoreapi.com/products/${productId}`).catch(err => {
      console.log("Error", err);
    })
  }

  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  )
}

export default ProductDetail;