import styled from "@emotion/styled";
import {
  GiMiningHelmet,
  GiWinterGloves,
  GiLeatherBoot,
  GiSteampunkGoggles,
} from "react-icons/gi";
import { PiFaceMaskFill } from "react-icons/pi";
import { ImHeadphones } from "react-icons/im";
import { FaVest } from "react-icons/fa6";

import Text from "../../components/shared/Text";
import { devices, useMuiResponsiveness } from "../../utils/responsive";

const { xs, md, lg, xl } = devices;

const Market = () => {
  const { isLaptop } = useMuiResponsiveness();
  const categories = [
    {
      name: "Bumper Repair",
      icon: <GiMiningHelmet color="#fff100" size="3.5rem" />,
    },
    {
      name: "Auto Customization",
      icon: <GiWinterGloves color="#fff100" size="3.5rem" />,
    },
    {
      name: "Vehicle Painting",
      icon: <GiLeatherBoot color="#fff100" size="3.5rem" />,
    },
    // { name: "Masks", icon: <PiFaceMaskFill color="#fff100" size="3.5rem" /> },
    {
      name: "Auto Exterior Customization",
      icon: <GiSteampunkGoggles color="#fff100" size="3.5rem" />,
    },
    // {
    //   name: "Tyre Changes",
    //   icon: <ImHeadphones color="#fff100" size="3rem" />,
    // },
    {
      name: "Body Part Changes",
      icon: <FaVest color="#fff100" size="3.5rem" />,
    },
  ];
  return (
    <Container className="">
      <Inner>
        <Text fontSize="32px">Our Market</Text>
        <TextDiv>
          <Text lineHeight="2.2">
            We provide a wide range of Car Servicing Equipment to ensure
            worker&apos;s safety in various fields. We are committed to
            providing innovative solutions to address Car issues. We work
            closely with suppliers to find high-quality functional , cost
            effective products to improve Car Performances and reduce Car
            problems
          </Text>
        </TextDiv>
        <Grid>
          {categories.map(({ name, icon }, index) => (
            <Card key={index}>
              {icon}
              <Text fontSize={isLaptop ? "14px" : "16px"} align="center">
                {name}
              </Text>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Container>
  );
};

export default Market;

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

const TextDiv = styled.div`
  text-align: center;
  width: 70%;
  @media ${xs} {
    width: 100%;
  }

  @media ${lg} {
    width: 70%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: 70%;
  padding-top: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  @media ${xs} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${lg} {
    width: 70%;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: linear-gradient(
    -168.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  /* color: #fff100 */
  height: 8rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
