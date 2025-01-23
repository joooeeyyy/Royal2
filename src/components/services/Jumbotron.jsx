import styled from "@emotion/styled";
import { useContext } from "react";
import Text from "../shared/Text";
import { tech } from "../../assets";
import { devices } from "../../utils/responsive";
import { useMuiResponsiveness } from "../../utils/responsive";
import { ServiceContext } from "../../contexts/ServicesContext";

const { xs, md, lg, xl } = devices;

const Jumbotron = () => {
  const { mobile } = useMuiResponsiveness();
  const { isICT, setIsICT } = useContext(ServiceContext);

  return (
    <Container className="">
      <Inner>
        <ImageDiv>{isICT && <img src={tech} />}</ImageDiv>
        <TextDiv>
          {isICT && (
            <Text fontSize={mobile ? "25px" : "50px"}>
              {" "}
              <span className="text-gradient">The Best</span> Services at{" "}
              <span className="text-gradient">Royal AutoBody And Painting</span>{" "}
              we strive to build our business by making your{" "}
              <span className="text-gradient">
                Car work smoothly without any
              </span>{" "}
              future inconvinences{" "}
              <span className="text-gradient">
                {" "}
                thereby avoiding future car failure
              </span>
            </Text>
          )}
          {!isICT && (
            <Text fontSize={mobile ? "32px" : "50px"}>
              {" "}
              At <span className="text-gradient">TekBridge</span> With
              dedication, expertise, and enthusiasm, we tackle complex problems
              linked to PPE use in the workplace every day. We’ll do all in our
              power to make sure you make it home to your family every day.
              Increasing workplace safety and reducing potential health problems
              are our top priorities.
              <span className="text-gradient">
                {/* Technology Service */}
              </span>{" "}
              occur <span className="text-gradient"></span>
            </Text>
          )}
        </TextDiv>
      </Inner>
    </Container>
  );
};

export default Jumbotron;

const Container = styled.div`
  padding: 10rem 0rem;
  /* background: #00040e; */
  color: #fff;
  @media ${xs} {
    padding: 5rem 1rem;
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
