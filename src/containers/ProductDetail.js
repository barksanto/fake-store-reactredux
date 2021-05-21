import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from '../redux/actions/productActions'


const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  //using this id we can make a new api call
  const { productId } = useParams();
  // console.log(`Product Id: ${productId}`)
  const dispatch = useDispatch();
  console.log(product)

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log("Error", err);
      });
    // once we get the data, we need to dispatch the action
    dispatch(selectedProduct(response.data));
  }

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId])

  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  )
}

export default ProductDetail;