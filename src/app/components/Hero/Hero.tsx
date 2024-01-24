import styles from "./hero.module.scss";

import HeroCard from "../HeroCard/HeroCard"

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.a}>
        <HeroCard titleSize={40} />
      </div>

      <div className={styles.b}>
        <HeroCard />
      </div>

      <div className={styles.c}>
        <HeroCard />
      </div>

      <div className={styles.d}>
        <HeroCard />
      </div>
    </div>
  );
}
export default Hero