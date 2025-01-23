import styled from "@emotion/styled";

import Text from "../../components/shared/Text";
import { devices, useMuiResponsiveness } from "../../utils/responsive";

const { xs, md, lg, xl } = devices;

const Suppliers = () => {
  const { isLaptop } = useMuiResponsiveness();
  const categories = [
    {
      name: "AGILITE",
      description:
        "A dedicated dealer platform to place and track orders easily with distribution facilities in both the United States and Isreal for fast and hassle-free supply.",
    },
    {
      name: "SAKAR TACTICAL",
      description:
        "Suppliers and Manufacturers of ballistic protection, Tactical Headsets and EOD equipments with factories located in Glasgow, UK & EL Paso, Texas.",
    },
    {
      name: "XINXINGARMY",
      description:
        "A One Stop Shop and production line for customized bulletproof equipment, military footwears and uniforms to meet the needs of the military.",
    },
  ];
  return (
    <Container className="">
      <Inner>
        <Text fontSize="32px" align="center">
          {" "}
          Our Suppliers and Manufacturers
        </Text>

        <Grid>
          {categories.map(({ name, description }, index) => (
            <Card key={index}>
              <Text fontSize={isLaptop ? "28px" : "20px"} align="center">
                <span className="text-gradient">{name}</span>
              </Text>
              {description}
            </Card>
          ))}
        </Grid>
      </Inner>
    </Container>
  );
};

export default Suppliers;

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
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2rem;

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

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: 80%;
  padding-top: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  @media ${xs} {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${lg} {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${xl} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: linear-gradient(
    -168.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  /* color: #13f6ff */
  height: 18rem;
  align-items: center;
  display: flex;
  gap: 2rem;
  text-align: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2.2rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
