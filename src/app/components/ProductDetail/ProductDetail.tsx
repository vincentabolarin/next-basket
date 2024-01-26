import Image from "next/image";

import styles from "./productDetail.module.scss";
import { getDiscountedPrice } from "@components/app/utils/calculations";
import { Button } from "@mui/material";

import like from "../../assets/like-2.svg";
import cart from "../../assets/cart-2.svg";
import view from "../../assets/view.svg"

import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/features/cart/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { toast } from "react-toastify";

import star from "../../assets/star.svg";

interface ProductProps {
  productDetails: {
    title: string;
    rating: number;
    price: number;
    discountPercentage: number;
    stock: number;
    thumbnail: string;
    images: Array<string>;
    brand: string;
    category: string;
    description: string;
    id: number;
  }
}

const imageWidth = 450;
const imageHeight = 400;

const thumbnailWidth = 100;
const thumbnailHeight = 75;

const iconSize = 20;

const starSize = 18;

const buttonSx = {
  boxShadow: "0px 0px 0px 0px",
  border: "1px solid #23A6F0",
  padding: "10px 20px",
  "&:hover": {
    bgcolor: "#23A6F0",
    color: "#FFF",
  },
};

const ProductDetails: React.FC<ProductProps> = ({ productDetails }) => {
  const dispatch = useDispatch();

  const existingCartItems = useSelector(
    (state: RootState) => state.cart.data
  );

  const existingWishlistItems = useSelector(
    (state: RootState) => state.wishlist.data
  );

  const addToCart = () => {
    const cartIcon = document.querySelector("#cart-icon");

    if (existingCartItems.includes(productDetails)) {
      toast.error("You have already added this product to cart");
    } else {
      dispatch(addItem(productDetails));
      toast.success("Product successfully added to cart");

      cartIcon?.classList.add(`${styles.disabled}`);
    }
  }

  const addItemToWishlist = () => {
    const wishlistIcon = document.querySelector("#wishlist-icon");

    if (existingWishlistItems.includes(productDetails)) {
      toast.error("You have already added this product to wishlist");
    } else {
      dispatch(addToWishlist(productDetails));
      toast.success("Product successfully added to wishlist");

      wishlistIcon?.classList.add(`${styles.disabled}`);
    }
  }

  return (
    <>
      {productDetails && (
        <div className={`${styles.container} container`}>
          <div className={styles.left}>
            <div className={styles.image}>
              <Image
                src={productDetails?.images[0]}
                width={imageWidth}
                height={imageHeight}
                alt={`Image of a ${productDetails?.title}`}
              />
            </div>
            <div className={styles.thumbnails}>
              {productDetails?.images.length > 0 &&
                productDetails?.images.map((image) => {
                  return (
                    <Image
                      src={image}
                      width={thumbnailWidth}
                      height={thumbnailHeight}
                      alt={`Thumbnail of the product ${productDetails?.title}`}
                      key={crypto.randomUUID()}
                    />
                  );
                })}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.details}>
              <p className="size-20 weight-400 text-color-primary">
                {productDetails?.title}
              </p>
              <div
                className={`${styles.rating} size-14 weight-400 text-color-secondary`}
              >
                <span>
                  <Image
                    src={star}
                    width={starSize}
                    height={starSize}
                    alt="Star"
                    key={crypto.randomUUID()}
                  />
                </span>
                <span>{productDetails?.rating}</span>
              </div>
              <p className={`${styles.price} size-24 weight-700`}>
                <span className="text-color-primary">
                  {`$${productDetails?.price}`}
                </span>{" "}
                <span className="color-success">
                  {`$${getDiscountedPrice(
                    productDetails?.price,
                    productDetails?.discountPercentage
                  )}`}
                </span>
              </p>
              <p className="size-14 weight-700">
                <span className="text-color-secondary">Availability :</span>{" "}
                <span className="color-primary">In Stock</span>
              </p>
            </div>
            <div className={styles.colours}>
              <div className={`${styles.colourOption} ${styles.blue}`}></div>
              <div className={`${styles.colourOption} ${styles.green}`}></div>
              <div className={`${styles.colourOption} ${styles.orange}`}></div>
              <div className={`${styles.colourOption} ${styles.dark}`}></div>
            </div>
            <div className={styles.options}>
              <Button
                variant="contained"
                sx={buttonSx}
                className="color-white background-color-primary uppercase size-14 weight-700"
              >
                Load More Products
              </Button>

              <div id="cart-icon" className={styles.cartIcon}>
                <Image
                  src={cart}
                  width={iconSize}
                  height={iconSize}
                  alt="Button for adding a product to cart"
                  className={styles.icon}
                  onClick={addToCart}
                />
              </div>

              <div id="wishlist-icon" className={styles.wishlistIcon}>
                <Image
                  src={like}
                  width={iconSize}
                  height={iconSize}
                  alt="Button for adding a product to wishlist"
                  className={styles.icon}
                  onClick={addItemToWishlist}
                />
              </div>

              <Image
                src={view}
                width={iconSize}
                height={iconSize}
                alt="Button for viewing"
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductDetails