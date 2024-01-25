"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.scss";

import person from "../../assets/person.svg";
import search from "../../assets/search.svg";
import cart from "../../assets/cart.svg";
import like from "../../assets/like.svg";

import { useSelector } from "react-redux";
import { RootState } from "@components/app/redux/store";

const Navbar = () => {
  let currentCartItemsCount;
  let currentWishlistItemsCount;

  useEffect(() => {
    if (typeof window !== "undefined") {
      currentCartItemsCount = JSON.parse(
        localStorage.getItem("current_cart_items")!
      ).length;
      currentWishlistItemsCount = JSON.parse(
        localStorage.getItem("current_wishlist_items")!
      ).length;
    }
    
  }, []);

  const cartCount = useSelector((state: RootState) => state.cart.data.length);
  const wishlistCount = useSelector((state: RootState) => state.wishlist.data.length);

  
  const iconSize = 16;
  ;
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
          <div className={styles.action}>
            <Image
              src={cart}
              alt="Cart icon"
              width={iconSize}
              height={iconSize}
            />
            <p className="color-primary size-12 weight-400">{currentCartItemsCount || cartCount}</p>
          </div>
          <div className={styles.action}>
            <Image
              src={like}
              alt="Like icon"
              width={iconSize}
              height={iconSize}
            />
            <p className="color-primary size-12 weight-400">{currentWishlistItemsCount|| wishlistCount}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
