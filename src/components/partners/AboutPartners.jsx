import styled from "@emotion/styled";

import Text from "../shared/Text";
import { suppliers } from "../../assets";
import { devices } from "../../utils/responsive";
import { useMuiResponsiveness } from "../../utils/responsive";

const { xs, md, lg, xl } = devices;

const AboutPartners = () => {
  const { mobile } = useMuiResponsiveness();
  return (
    <Container className="">
      <Inner>
        <TextDiv>
          <Text fontSize={mobile ? "32px" : "32px"} marginBottom="-1.5rem">
            About Our Partners
          </Text>
          <Text lineHeight="2.2">
            We collaborate closely with our supply partners to offer a
            comprehensive range of high-quality personal protective equipment
            (PPE) that surpasses industry standards. TekBridge values its
            partnerships and strives to find functional products that address
            real workplace issues. we are committed to fostering lasting
            relationships with its supply partners and working together to
            develop innovative solutions that meet the evolving needs of
            customers
          </Text>
        </TextDiv>
        <ImageDiv>
          <img src={suppliers} />
          <Text lineHeight="2.2">
            These partnerships also provide customers additional value, such as
            training and technical support. we continously seek new productss
            and services to enhance its existing offerings and works with
            suppliers to reduce costs while maintaining quality.
            TekBridge&apos;s relationships with its supply partners serve as a
            solid foundation for future growth.{" "}
          </Text>
        </ImageDiv>
      </Inner>
    </Container>
  );
};

export default AboutPartners;

const Container = styled.div`
  padding: 5rem 0rem;
  /* background: #00040e; */
  color: #fff;
  @media ${xs} {
    padding: 10rem 1rem;
  }
  @media ${md} {
    padding: 6rem 3rem;
  }
  @media ${lg} {
    padding: 5rem 0;
  }
`;

const Inner = styled.div`
  margin: auto;
  width: 77rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;

  @media ${xs} {
    width: 100%;
    gap: 3rem;
    flex-direction: column;
  }
  @media ${lg} {
    width: 100%;
    padding: 5rem;
    gap: 4rem;
    flex-direction: row;
  }
  @media ${xl} {
    width: 77rem;
    padding: 0rem;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50%;
  @media ${xs} {
    width: 100%;
  }
  @media ${lg} {
    width: 50%;
  }
`;

const ImageDiv = styled.div`
  width: 50%;

  @media ${xs} {
    width: 100%;
  }
  @media ${lg} {
    width: 50%;
  }
`;
