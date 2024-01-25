import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <div className={styles.products}>
        <p className="size-20 weight-400 text-color-secondary">
          Featured Products
        </p>
        <p className="size-24 weight-700 uppercase text-color-primary">
          Bestseller Products
        </p>
        <p className="size-14 weight-400 text-color-secondary">
          These are our most-bought products
        </p>
      </div>

      <Products columnsClass="columns5" canLoadMore={true} />

      <div className={styles.services}>
        <p className="size-20 weight-400 text-color-secondary">
          Featured Services
        </p>
        <p className="size-24 weight-700 uppercase text-color-primary">
          The Best Services
        </p>
        <p className="size-14 weight-400 text-color-secondary">
          These are our best services
        </p>
      </div>
      
      <Services />
    </main>
  );
}
