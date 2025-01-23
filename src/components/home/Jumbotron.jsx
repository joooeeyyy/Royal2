import styled from "@emotion/styled";
import Text from "../../components/shared/Text";
import { devices, useMuiResponsiveness } from "../../utils/responsive";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import { ppe4, tech2, backgroundPPE } from "../../assets";

const { xs, md, lg, xl } = devices;

const Jumbotron = () => {
  const { isMobile } = useMuiResponsiveness();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };

  return (
    <Container className="">
      <Inner>
        <TextDiv>
          <ColoredSpan>
            ROYAL AUTO-BODY AND PAINTING Your trusted partner in automotive care
            and repair . Our mission is simple : To provide exceptional car
            maintenance and repair services , ensuring your vehicle performs at
            it best.
          </ColoredSpan>
          <Text
            fontSize={isMobile ? "40px" : "50px"}
            marginBottom="-1.5rem"
            fontWeight={600}
          >
            {/* Customised Personal Protective Equipment{"(PPE)"} solutions , and
            excellent ICT/Engineering services */}
          </Text>
          {/*<Text lineHeight="2.2">
            We provide a broad range of ICT Support Services including design,
            management and deployment relevant to your business needs to reduce
          </Text> */}
        </TextDiv>
        <BtnDiv>
          <Link to={"/product"} onClick={scrollToTop}>
            <StyledButton size="large">Car Solutions</StyledButton>
            {/* <StyledButton variant="outlined" size="large">
              PPE Solution
            </StyledButton> */}
          </Link>
          <Link to={"/services"} onClick={scrollToTop}>
            {" "}
            <StyledButton size="large">services</StyledButton>
          </Link>
        </BtnDiv>
      </Inner>
    </Container>
  );
};

export default Jumbotron;

const ColoredSpan = styled.span`
  color: black;
  height: 350px; // Change 'blue' to your desired color: ;
`;

const Container = styled.div`
  padding: 15rem 0rem 5rem;
  background-image: url(${backgroundPPE});
  background-size: cover; /* Adjust as needed (cover, contain, etc.) */
  background-position: center center;
  background-repeat: no-repeat;
  backdrop-filter: blur(5px);
  color: #000;
  @media ${xs} {
    padding: 10rem 1rem 2rem;
  }
  @media ${md} {
    padding: 10rem 3rem 3rem;
  }
  @media ${lg} {
    padding: 15rem 0rem 5rem;
  }
`;

const Inner = styled.div`
  margin: auto;
  width: 77rem;
  box-sizing: border-box;
  padding: 1rem 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${xs} {
    width: 100%;
    gap: 3rem;
    flex-direction: column;
  }
  @media ${lg} {
    width: 100%;
    padding: 5rem;
    gap: 4rem;
  }
  @media ${xl} {
    width: 77rem;
    padding: 3rem 0rem;
  }
`;

const TextDiv = styled.div`
  text-align: center;
  width: 70%;
  font-size: 24px;
  font-weight: 600;
  color: white;
  height: 150px;
  border-radius: 15px; /* Adjust the value to control the roundness of the border */
  border: 2px solid #333;
  background-color: rgba(255, 255, 0, 0.5);

  @media screen and (max-width: 654px) {
    height: 400px;
  }

  @media ${xs} {
    width: 100%;
  }

  @media ${lg} {
    width: 70%;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  gap: 1rem;
  @media ${xs} {
    flex-direction: column;
  }

  @media ${md} {
    flex-direction: row;
  }
`;

const StyledButton = styled(Button)`
  width: auto;
  font-size: 16px;
  font-weight: bold;
  @media ${xs} {
    width: 100%;
  }

  @media ${md} {
    width: auto;
  }
`;
