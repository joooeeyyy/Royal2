import styled from "@emotion/styled";
import { FiCheckCircle } from "react-icons/fi";
import { useContext } from "react";
import Text from "../../components/shared/Text";
import { systems, security, integrations } from "../../assets";
import { devices } from "../../utils/responsive";
import { ServiceContext } from "../../contexts/ServicesContext";
const { xs, md, lg, xl } = devices;

const Services = () => {
  const { isICT, setIsICT } = useContext(ServiceContext);
  return (
    <Container className="">
      <Inner>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px" marginBottom=".5rem">
              Bumper Repair Services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Requirements Management
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Enterprise Architecture
              and Domain Models
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Designing and
              Development
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Erp and Custom Solutions
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Release Management and
              Integration
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Testing and Deployment
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Tool Selection
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Change Management
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Training
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Auditing and QA
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Q&M Planning and Support
            </Text>
          </TextDiv>
        )}
        <ImageDiv>{isICT && <img src={integrations} />}</ImageDiv>
      </Inner>
      <Inner reverse>
        <ImageDiv>{isICT && <img src={security} />}</ImageDiv>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px">Auto Customization Services</Text>
            <Text lineHeight="2.2">
              Royal Auto Body and Painting systems engineering skills complement
              our security engineering practice from business process analysis
              through implementation, testing and deployment.
              <br />
              <br />
              Our specialities are in the areas of:
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Computer Security
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Network Security
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Infrastructure Security
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Information Security
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Cryptography
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> PKI Solutions
            </Text>
          </TextDiv>
        )}
      </Inner>
      <Inner>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px" marginBottom=".5rem">
              Vehicle Painting Services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Portal Services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Car Services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Servlets and JSP
              technologies
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Car GUI/Interface Design
              and Management
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Flash, Laszio and FLEX
              technologies
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Content management
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Performance,
              Load-Balancing, Real-time Server Monitoring Services
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Cluster Management,
              Hardenings
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> .NET Services,
              POD-Casting, RSS Feeds
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> ColdFusion - J2EE
              Component Development
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> One Global Pass
              Implementation
            </Text>
            <Text
              lineHeight="1.2"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <FiCheckCircle color="#fff100" size="" /> Web Automation and
              Testing
            </Text>
          </TextDiv>
        )}

        <ImageDiv>{isICT && <img src={systems} />}</ImageDiv>
      </Inner>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  padding: 5rem 0rem;
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
    padding: 3rem 0rem;
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
