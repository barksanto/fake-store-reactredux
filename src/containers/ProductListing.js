import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {

  const products = useSelector((state) => state);
  // to dispatch, we use redux hook called useDispatch
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err)
      });
    //this will go to the action and return the object 
    // in productAction, that obj will be taken by the reducer
    //
    dispatch(setProducts(response.data));
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  console.log("Products: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing;