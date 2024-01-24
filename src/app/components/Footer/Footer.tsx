import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.scss";

import facebook from "../../assets/facebook-2.svg";
import instagram from "../../assets/instagram-2.svg";
import x from "../../assets/x-2.svg";

const Footer = () => {
  const iconSize = 24;

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.icons} background-color-light-gray-2`}>
          <Link href="/" className={`size-24 weight-700 ${styles.logo}`}>
            Bandage
          </Link>
          <div className={styles.socialMedia}>
            <Link href="https://instagram.com" className={styles.icon}>
              <Image
                src={instagram}
                alt="Instagram icon"
                width={iconSize}
                height={iconSize}
              />
            </Link>

            <Link href="https://facebook.com" className={styles.icon}>
              <Image
                src={facebook}
                alt="Facebook icon"
                width={iconSize}
                height={iconSize}
              />
            </Link>

            <Link href="https://x.com" className={styles.icon}>
              <Image src={x} alt="X icon" width={iconSize} height={iconSize} />
            </Link>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.group}>
            <p>Company Info</p>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>

          <div className={styles.group}>
            <p>Legal</p>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>

          <div className={styles.group}>
            <p>Features</p>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>

          <div className={styles.group}>
            <p>Resources</p>
            <p>iOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </div>
        <div className={`${styles.copyright} background-color-light-gray-2`}>
          <p className="size-14 weight-700 text-color-secondary">
            &#169; 2024 - {new Date().getFullYear()}. Made With Love By{" "}
            <Link href="https://www.linkedin.com/in/vincentabolarin" className={styles.myName}>Vincent Abolarin</Link>. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer