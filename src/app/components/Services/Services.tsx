import Image from "next/image";

import styles from "./services.module.scss";

import easyWins from "../../assets/easy-wins.svg";
import concrete from "../../assets/concrete.svg";
import hackGrowth from "../../assets/hack-growth.svg";

const Services = () => {
  const imageSize = 72;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src={easyWins}
            alt={""}
            width={imageSize}
            height={imageSize}
          />
          <div className="size-24 weight-700">Easy Wins</div>
          <div className="size-14 weight-400">We make wins look easy.</div>
        </div>

        <div className={styles.card}>
          <Image
            src={concrete}
            alt={""}
            width={imageSize}
            height={imageSize}
          />
          <div className="size-24 weight-700">Concrete</div>
          <div className="size-14 weight-400">We have concrete evidence to show for our solid stand in the industry.</div>
        </div>

        <div className={styles.card}>
          <Image
            src={hackGrowth}
            alt={""}
            width={imageSize}
            height={imageSize}
          />
          <div className="size-24 weight-700">Hack Growth</div>
          <div className="size-14 weight-400">We have hacked the growth formula. Why don't you let us hack it for you?</div>
        </div>
      </div>
    </>
  );
}
export default Services