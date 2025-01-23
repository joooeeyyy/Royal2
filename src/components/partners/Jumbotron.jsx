import styled from "@emotion/styled";

import Text from "../shared/Text";
import { supply } from "../../assets";
import { devices } from "../../utils/responsive";
import { useMuiResponsiveness } from "../../utils/responsive";

const { xs, md, lg, xl } = devices;

const Jumbotron = () => {
  const { mobile } = useMuiResponsiveness();
  return (
    <Container className="">
      <Inner>
        <TextDiv>
          <Text fontSize={mobile ? "32px" : "50px"}>
            {" "}
            <span className="text-gradient">
              ROYAL AUTO-BODY AND PAINTING
            </span>{" "}
            attributes her success to its strong relationship with{" "}
            <span className="text-gradient">local</span> and{" "}
            <span className="text-gradient">global suppliers</span>{" "}
          </Text>
        </TextDiv>
        <ImageDiv>
          <img src={supply} />
        </ImageDiv>
      </Inner>
    </Container>
  );
};

export default Jumbotron;

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
