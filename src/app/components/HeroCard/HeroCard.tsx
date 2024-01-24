import styles from "./heroCard.module.scss";

interface HeroProps {
  titleSize?: number;
}

const HeroCard: React.FC<HeroProps> = ({ titleSize=24 }) => {
  return (
    <>
      <div className={styles.container}>
        <div className="count color-success size-14 weight-700">5 Items</div>
        <div className={`title uppercase size-${titleSize} weight-700`}>Furniture</div>
        <div className="more size-14 weight-700">Read More</div>
      </div>
    </>
  );
}
export default HeroCard