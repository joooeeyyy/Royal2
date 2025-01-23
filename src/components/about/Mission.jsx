import styled from "@emotion/styled";

import Text from "../../components/shared/Text";
import { mission, vision } from "../../assets";
import { devices } from "../../utils/responsive";

const { xs, md, lg, xl } = devices;

const Mission = () => {
  return (
    <Container className="">
      <Inner>
        <TextDiv>
          <Text fontSize="32px">Our Mission</Text>
          <Text lineHeight="2.2">
            With Years Of Industry experience , we take pride in delkivering
            unparalleled customer services , expert craftmanship , and reliable
            solutions . From routine maintenance to emergency repairs , our
            skilled professional are here to keep you moving foward.
          </Text>
        </TextDiv>
        <ImageDiv>
          <img src={mission} />
        </ImageDiv>
      </Inner>
      <Inner reverse>
        <ImageDiv>
          <img src={vision} />
        </ImageDiv>
        <TextDiv>
          <Text fontSize="32px">Our Vision</Text>
          <Text lineHeight="2.2">
            - Free Estimate - Highly Skilled and Certified technicians -
            Transparent Pricing without hidden charges - Commitment to quality
            and your satisfaction - Comprehensive range of automotive services
          </Text>
        </TextDiv>
      </Inner>
    </Container>
  );
};

export default Mission;

const Container = styled.div`
  padding: 5rem 0rem;
  /* background: #00040e; */
  background: linear-gradient(
    -168.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  color: #fff;
  @media ${xs} {
    padding: 2rem 1rem;
  }
  @media ${md} {
    padding: 3rem;
  }
  @media ${lg} {
    padding: 5rem 0;
  }
`;

const Inner = styled.div`
  margin: auto;
  width: 77rem;
  box-sizing: border-box;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  gap: 5rem;
  @media ${xs} {
    width: 100%;
    gap: 3rem;
    flex-direction: ${(props) => (props.reverse ? "column-reverse" : "column")};
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
  gap: 1.5rem;
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
