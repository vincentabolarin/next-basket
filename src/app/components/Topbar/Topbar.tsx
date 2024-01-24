import Image from "next/image";
import Link from "next/link";

import styles from "./topbar.module.scss";

import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import facebook from "../../assets/facebook.svg";
import x from "../../assets/x.svg";

const Topbar = () => {
  const iconSize = 16;

  return (
    <>
      <div className={`${styles.container} container color-white background-color-secondary`}>
        <div className={styles.left}>
          <Link href="tel:(255) 555-0118" className={styles.phone}>
            <Image
              src={phone}
              alt="Phone icon"
              width={iconSize}
              height={iconSize}
            />
            <p>(225) 555-0118</p>
          </Link>
          <Link href="mailto:michelle.rivera@example.com" className={styles.mail}>
            <Image
              src={mail}
              alt="Mail icon"
              width={iconSize}
              height={iconSize}
            />
            <p>michelle.rivera@example.com</p>
          </Link>
        </div>
        <div className={styles.middle}>
          <p>Follow us and get a chance to win 80% off.</p>
        </div>
        <div className={styles.right}>
          <p>Follow us :</p>
          <div className={styles.icons}>
            <Link href="https://instagram.com" className={styles.icon}>
              <Image
                src={instagram}
                alt="Instagram icon"
                width={iconSize}
                height={iconSize}
              />
            </Link>
            <Link href="https://youtube.com" className={styles.icon}>
              <Image
                src={youtube}
                alt="YouTube icon"
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
              <Image
                src={x}
                alt="X icon"
                width={iconSize}
                height={iconSize}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Topbar