import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ...delivering comprehensive PPE solutions that exceed regulatory
        standards <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        TekBridge is committed to a safe, healthy, and environmentally
        responsible work environment for all stakeholders, including employees,
        customers, suppliers, and the community.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
