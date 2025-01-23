import styles from "../style";
import { discount, vest6 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/*First Column Text In Hero Row*/}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px]"
          ></img>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The <br className="sm:block hidden" />{" "}
            <span className="text-gradient">TEKBRIDGE</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[50px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Empowering Safety, Securing Tomorrow
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With dedication, expertise, and enthusiasm, we tackle complex problems
          linked to PPE use in the workplace every day. We’ll do all in our
          power to make sure you make it home to your family every day.
          Increasing workplace safety and reducing potential health problems are
          our top priorities.
        </p>
      </div>
      {/*First Column Text In Hero Row*/}

      {/*Right Side Div*/}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={vest6}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      {/*Right Side Div*/}

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
