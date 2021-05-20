import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {

  const { productId } = useParams(); //returns undefined???

  console.log(`Product Id: ${productId}`)

  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  )
}

export default ProductDetail;