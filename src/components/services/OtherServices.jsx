import styled from "@emotion/styled";
import { useContext } from "react";
import Text from "../../components/shared/Text";
import { erp, server, analytics } from "../../assets";
import { devices } from "../../utils/responsive";
import { ServiceContext } from "../../contexts/ServicesContext";

const { xs, md, lg, xl } = devices;

const OtherServices = () => {
  const { isICT, setIsICT } = useContext(ServiceContext);

  return (
    <Container className="">
      <Inner>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px">Auto Exterior Customization</Text>
            <Text lineHeight="2.2">
              Royal AutoBody and Painting Business Services (EBS) capabilities
              cover the full ERP and COTS lifecycle services for SAP, Oracle,
              PeopleSoft, and next-generation cloud-based ERP ans SaaS including
              Salesforce, Microsoft and Workday.
              <br />
              <br />
              Our highly successful EBS offering has enhanced our
              customer&apos;s mission capabilities across the federal
              government(e.g IRS Modernization Program yielding a high return on
              investment with cumulative program values of more than $1B,
              including modernization of legacy ERPs to commercial off the shelf
              (COTS) solutions)
            </Text>
          </TextDiv>
        )}

        <ImageDiv>{isICT && <img src={erp} />}</ImageDiv>
      </Inner>
      <Inner reverse>
        <ImageDiv>{isICT && <img src={analytics} />}</ImageDiv>

        {isICT && (
          <TextDiv>
            <Text fontSize="32px">Data & Analytics</Text>
            <Text lineHeight="2.2">
              We empower decision-makers, end-users and systems to make mission
              impacts with real-time, big data analytics. Our Data and Analytics
              teams manage and analyse data to make mission impacts using Big
              Data, Next Generation Business Intelligence and Data Warehousing,
              Data Science and Advanced Algorithms and Next Generation
              Enterprise Data Management.
            </Text>
          </TextDiv>
        )}
      </Inner>
      <Inner>
        {isICT && (
          <TextDiv>
            <Text fontSize="32px">Digital Platforms </Text>
            <Text lineHeight="2.2">
              <span className="text-gradient">
                Royal AutoBody Work and painting
              </span>{" "}
              solution helps customers securely journey from traditional IT to a
              Digital Enterprise with minimum risk. We support customers in
              their efforts to deliver agile car services, including Enterprise
              Digital Service Management, Cloud Migration, Application
              Platforms, High Performance Computing and Mobile Platforms
            </Text>
          </TextDiv>
        )}
        <ImageDiv>{isICT && <img src={server} />}</ImageDiv>
      </Inner>
    </Container>
  );
};

export default OtherServices;

const Container = styled.div`
  padding: 5rem 0rem;
  background: #00040e;
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
