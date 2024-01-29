"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.scss";
import { toast } from "react-toastify";

import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete";


import person from "../../assets/person.svg";
import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";
import like from "../../assets/like.svg";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@components/app/redux/store";
import { getDiscountedPrice } from "@components/app/utils/calculations";
import { removeItem } from "@components/app/redux/features/cart/cartSlice";
import { removeFromWishlist } from "@components/app/redux/features/wishlist/wishlistSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [modalItemsToDisplay, setModalItemsToDisplay] = useState<Array<Products>>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionsOn, setActionsOn] = useState("");
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60dvw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    outline: "none",
    maxHeight: "80dvh",
    overflow: "auto"
  };

  const modalContentStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
  }

  const modalRowStyle = {
    padding: "1rem 0",
    borderBottom: "1px solid var(--light-gray)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3rem"
  };

  const modalRowLeftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem"
  }

  let existingCartItems: Array<Products> = useSelector(
    (state: RootState) => state.cart.data
  );
  let existingWishlistItems: Array<Products> = useSelector(
    (state: RootState) => state.wishlist.data
  );

  const displayCartItems = () => {
    setModalItemsToDisplay(existingCartItems);
    setActionsOn("cart");
    setModalOpen(true);
  }
  
  const displayWishlistItems = () => {
    setModalItemsToDisplay(existingWishlistItems);
    setActionsOn("wishlist");
    setModalOpen(true);
  }

  const removeSelectedItem = (item: Products): any => {
    try {
       if (actionsOn === "cart") {
         dispatch(removeItem(item));
         setModalItemsToDisplay(modalItemsToDisplay.filter(modalItem => modalItem.id !== item.id && modalItem.title !== item.title));
         toast.success(`${item.title} successfully removed from cart`);
       } else {
         dispatch(removeFromWishlist(item));
         setModalItemsToDisplay(modalItemsToDisplay.filter(modalItem => modalItem.id !== item.id && modalItem.title !== item.title));
         toast.success(`${item.title} successfully removed from wishlist`);
       }
    } catch (error) {
      toast.error("error");
    }
  }

  const iconSize = 16;
  return (
    <>
      <div className={`${styles.container} container`}>
        <div className={styles.left}>
          <Link href="/" className={`size-24 weight-700 ${styles.logo}`}>
            Bandage
          </Link>
          <div className={styles.menu}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Pages</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <Link href="/" className={styles.login}>
            <Image
              src={person}
              alt="Person icon"
              width={iconSize}
              height={iconSize}
            />
            <p className="color-primary">Login / Register</p>
          </Link>
          <div className={styles.action}>
            <Image
              src={search}
              alt="Search icon"
              width={iconSize}
              height={iconSize}
            />
          </div>
          <div className={styles.action} onClick={displayCartItems}>
            <Image
              src={cart}
              alt="Cart icon"
              width={iconSize}
              height={iconSize}
            />
            <p className="color-primary size-12 weight-400">
              {existingCartItems.length}
            </p>
          </div>
          <div className={styles.action} onClick={displayWishlistItems}>
            <Image
              src={like}
              alt="Like icon"
              width={iconSize}
              height={iconSize}
            />
            <p className="color-primary size-12 weight-400">
              {existingWishlistItems.length}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.modalContainer}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalOpen}
          onClose={handleModalClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={modalOpen}>
            <Box sx={modalStyle}>
              <Box sx={{ borderBottom: "1px solid var(--light-gray)" }}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {`${
                    actionsOn === "cart"
                      ? "Cart"
                      : "Wishlist"
                  }`}
                </Typography>
              </Box>
              <Box sx={modalContentStyle}>
                {modalItemsToDisplay.length === 0 && (
                  <Typography>
                    {`Your ${
                      actionsOn === "cart"
                        ? "cart"
                        : "wishlist"
                    } is currently empty.`}
                  </Typography>
                )}
                {modalItemsToDisplay.map((item: Products) => {
                  return (
                    <div key={crypto.randomUUID()}>
                      <Box sx={modalRowStyle}>
                        <Box sx={modalRowLeftStyle}>
                          <Image
                            src={item.thumbnail}
                            alt={`Image of ${item.thumbnail}`}
                            width={50}
                            height={50}
                          />
                          <Box>
                            <Typography component="h2">{item.title}</Typography>
                            <Typography component="p">
                              {item.description}
                            </Typography>
                            <Typography component="p">
                              $
                              {getDiscountedPrice(
                                item.price,
                                item.discountPercentage
                              )}
                            </Typography>
                          </Box>
                        </Box>

                        <div onClick={() => removeSelectedItem(item)}>
                          <Delete sx={{ color: "red", cursor: "pointer" }} />
                        </div>
                      </Box>
                    </div>
                  );
                })}
              </Box>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};
export default Navbar;
