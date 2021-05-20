import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

  const { productId } = useParams();
  console.log(productId)

  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  )
}

export default ProductDetail;