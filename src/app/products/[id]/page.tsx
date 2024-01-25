"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "next/navigation";

import styles from "./product.module.scss";

import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

import Products from "@components/app/components/Products/Products";
import ProductDetail from "@components/app/components/ProductDetail/ProductDetail";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;

  const [loading, setLoading] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState();

  const getProductDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProductDetails(response.data);
      setLoading(false);
    } catch (err) {
      toast.error("Error fetching products");
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    console.log('productDetails', productDetails)
  }, [productDetails]);
  
  return (
    <>
      <div className={styles.container}>
        <ProductDetail productDetails={productDetails!} />
        <p className="size-24 weight-700 uppercase text-color-primary">
          Bestseller Products
        </p>
        <Products columnsClass="columns4" canLoadMore={false} />
      </div>
    </>
  );
}
export default ProductDetails