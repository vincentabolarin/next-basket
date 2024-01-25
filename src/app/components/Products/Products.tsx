"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { Box, Button } from "@mui/material";

import styles from "./products.module.scss";

import ProductCard from "../ProductCard/ProductCard";
import { getDiscountedPrice } from "@components/app/utils/calculations";

interface ProductsProps {
  columnsClass: string;
  canLoadMore: boolean;
}

const Products: React.FC<ProductsProps> = ({ columnsClass, canLoadMore = true }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [limit, setLimit] = useState<number>(10);
  const [skip, setSkip] = useState<number>(0);

  const buttonSx = {
    boxShadow: "0px 0px 0px 0px",
    border: "1px solid #23A6F0",
    padding: "15px 40px",
    "&:hover": {
      bgcolor: "#23A6F0",
      color: "#FFF"
    },
  };

  const loaderSx = {
    color: "#23A6F0",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-12px",
    marginLeft: "-12px",
  };

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      if (response.data.products.length === 0) {
        toast.error("There are no products left");
        const loadMoreButton = document.querySelector('#load-more-button');
        loadMoreButton?.classList.add(`${styles.hide}`);
      }
      setProducts((prevProducts) => [
        ...prevProducts,
        ...response.data.products,
      ]);
      setLoading(false);
    } catch (err) {
      toast.error("Error fetching products");
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      setSkip((prev) => {
        return prev + 10;
      })
    }
    catch (err) {
      toast.error("Error loading more products");
    }
  }

  useEffect(() => {
    getProducts();
  }, [skip]);

  useEffect(() => {
  }, [products]);

  return (
    <div className={styles.container}>
      {products.length === 0 && <CircularProgress />}

      <div className={`${styles.columnsContainer} ${styles[columnsClass]}`}>
        {products &&
          products.map((product) => {
            return (
              <Link href={`/products/${product.id}`} key={crypto.randomUUID()}>
                <ProductCard
                  image={product.images[0]}
                  name={product.title}
                  description={product.description}
                  price={product.price}
                  discountedPrice={getDiscountedPrice(
                    product.price,
                    product.discountPercentage
                  )}
                />
              </Link>
            );
          })}
      </div>

      {products.length > 0 && canLoadMore && (
        <div id="load-more-button" className={styles.loadMoreButton}>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              variant="contained"
              sx={buttonSx}
              className="color-primary background-color-white uppercase size-14 weight-700"
              disabled={loading}
              onClick={loadMore}
            >
              Load More Products
            </Button>
            {loading && <CircularProgress size={24} sx={loaderSx} />}
          </Box>
        </div>
      )}
    </div>
  );
};
export default Products;
