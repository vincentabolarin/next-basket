import Image from "next/image";

import styles from "./productCard.module.scss";

import { truncateDescription, truncateName } from "@components/app/utils/text";

interface ProductProps {
  image: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
}

const imageWidth = 180;
const imageHeight = 240;

const ProductCard: React.FC<ProductProps> = ({
  image,
  name,
  description,
  price,
  discountedPrice,
}) => {

  return (
    <>
      <div className={styles.container}>
        <Image
          src={image}
          alt={`An image of ${name}`}
          width={imageWidth}
          height={imageHeight}
          className={styles.image}
        />
        <div className={styles.text}>
          <p className="size-16 weight-700 text-color-primary">{truncateName(name)}</p>
          <p className="size-14 weight-700 text-color-secondary">
            {truncateDescription(description)}
          </p>
          <p>
            <span className="size-16 weight-700 text-color-muted">{`$${price}`}</span>{" "}
            <span className="size-16 weight-700 color-success">{`$${discountedPrice}`}</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
